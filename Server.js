//Server init
let express = require("express");
let app = express();
let http = require("http").createServer(app);
let port = process.env.PORT || 3001;

http.listen(port, function () {
    console.log("listening on *: " + port);
});
var io = require("socket.io")(http);
//End server init

app.use(express.static(__dirname + "/public"));

let ComposerClass = require("./model/Composer");
let Composer = new ComposerClass();

//Socket IO Communication
io.on("connection", (socket) => {
    socket.emit("PingPong", {
        state: 200,
    });
    console.log("User connected " + socket.id);
    socket.on("CreateGame", (playerName) => {
        socket.playerName = playerName;
        try {
            let gameInfo = Composer.createGame(socket);
            sendEventToPlayer(socket.id, "CreateGame", {
                state: 200,
                gameInfo: gameInfo,
            });
            //Joins Game Socket.io room
            socket.join(gameInfo.id);
            socket.gameId = gameInfo.id;
        } catch (error) {
            console.log(error.stack);
            sendEventToPlayer(socket.id, "CreateGame", {
                state: 400,
                msg: error.message,
            });
        }
    });

    socket.on("JoinGame", (joinGameObject) => {
        let playerName = joinGameObject.playerName;
        let gameId = joinGameObject.gameId;
        socket.playerName = playerName;
        try {
            let playerList = Composer.joinGame(gameId, socket);
            let game = Composer.getGame(gameId);
            if (playerList) {
                sendEventToPlayer(socket.id, "JoinGame", {
                    state: 200,
                    gameInfo: game.getGameInfo(),
                });
                socket.gameId = game.id;
            }
            //Joins Game Socket.io room
            socket.join(gameId);
            sendEventToPlayer(gameId, "GameUpdate", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
            sendEventToPlayer(socket.id, "JoinGame", {
                state: 400,
                msg: error.message,
            });
        }
    });
    socket.on("StartRound", (roundStartInfo) => {
        let gameId = roundStartInfo.gameId;
        try {
            let game = Composer.getGame(gameId);
            Composer.startRound(gameId, socket);
            sendEventToPlayer(gameId, "GameUpdate", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
        }
    });

    socket.on("SendAnswer", (answer) => {
        var gameId = socket.gameId;
        try {
            let game = Composer.getGame(gameId);
            Composer.saveAnswer(gameId, socket, answer);
            console.log("Send Answer Successful");
            sendEventToPlayer(socket.id, "SendAnswer", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
            sendEventToPlayer(gameId, "GameUpdate", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
            sendEventToPlayer(socket.id, "SendAnswer", {
                state: 400,
                msg: "Deine Antwort konnte nicht gespeichert werden",
            });
        }
    });

    socket.on("SendAssignSips", (assignedSips) => {
        var gameId = socket.gameId;
        try {
            let game = Composer.getGame(gameId);
            Composer.saveSipAssignment(gameId, assignedSips, socket);
            console.log("Send SipAssignment Successful");
            sendEventToPlayer(socket.id, "SendAssignSips", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
            sendEventToPlayer(gameId, "GameUpdate", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
            sendEventToPlayer(socket.id, "SendAssignSips", {
                state: 400,
                msg: "Deine Antwort konnte nicht gespeichert werden",
            });
        }
    });

    socket.on("PingPong", (gameIdOfPlayer) => {
        try {
            if (gameIdOfPlayer != null) {
                let game = Composer.getGame(gameIdOfPlayer);
                game.hasPlayer(socket);
                sendEventToPlayer(socket.id, "PingPong", {
                    state: 200,
                    gameInfo: game.getGameInfo(),
                });
            } else {
                sendEventToPlayer(socket.id, "PingPong", {
                    state: 200,
                });
            }
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
            socket.leave(gameIdOfPlayer);
            let message = () => {
                switch (error.name) {
                    case "PlayerNotFound":
                        return "Deine Internetverbindung war unterbrochen, bitte trete dem Spiel neu bei";
                    case "GameNotFound":
                        return "Dein Spiel wurde nicht mehr gefunden, bitte erstelle ein neues";
                    default:
                        return "Unbekannter Fehler, bitte erstelle ein neues Spiel";
                }
            };
            sendEventToPlayer(socket.id, "PingPong", {
                state: 400,
                msg: message(),
            });
        }
    });

    socket.on("SendEstimation", (answer) => {
        var gameId = socket.gameId;
        try {
            let game = Composer.getGame(gameId);
            Composer.saveEstimation(gameId, socket, answer);
            sendEventToPlayer(socket.id, "SendEstimation", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
            sendEventToPlayer(gameId, "GameUpdate", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
            sendEventToPlayer(socket.id, "SendEstimation", {
                state: 400,
                msg: "Deine Antwort konnte nicht gespeichert werden",
            });
        }
    });

    socket.on("ResolveRound", () => {
        var gameId = socket.gameId;
        try {
            let game = Composer.getGame(gameId);
            Composer.resolveByUser(gameId, socket);
            sendEventToPlayer(gameId, "GameUpdate", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
            sendEventToPlayer(socket.id, "SendEstimation", {
                state: 400,
                msg: "Die Runde konnte nicht resolved werden",
            });
        }
    });

    socket.on("LeaveGame", () => {
        try {
            let gameId = socket.gameId;
            let game = Composer.getGame(gameId);
            let response = Composer.removePlayerFromGame(gameId, socket);
            if (game.getGameInfo().playerList.length > 0)
                sendEventToPlayer(game.admin.id, "YouAreAdmin");
            socket.leave(gameId);
            sendEventToPlayer(socket.id, "LeaveGame", {
                state: 200,
            });
            sendEventToPlayer(gameId, "GameUpdate", {
                state: 200,
                gameInfo: game.getGameInfo(),
            });
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
        }
    });

    socket.on("disconnect", () => {
        try {
            console.log("Player disconected");
            let gameId = socket.gameId;
            if (gameId != null) {
                let game = Composer.getGame(gameId);
                let response = Composer.removePlayerFromGame(gameId, socket);
                sendEventToPlayer(game.admin.id, "YouAreAdmin");
                socket.leave(gameId);
                sendEventToPlayer(gameId, "GameUpdate", {
                    state: 200,
                    gameInfo: game.getGameInfo(),
                });
            }
        } catch (error) {
            console.log(error.stack + " --- " + error.message);
        }
    });
});

io.on("EndRound", (socket) => {});
//End Socket Io Communication

/**
 * A user tries to start a game round
 * User need to be round admin
 *
 * @returns boolean wether successful or not
 */
function startRound() {}

/**
 * A user tries to send an yes/no answer on question
 *
 * @returns boolean wether successful or not
 */
function answerQuestion() {}

/**
 * A user tries to send an estimation on yesses for round
 *
 * @returns boolean wether successful or not
 */
function sendEstimation() {}

/**
 * A user tries to force an round to end
 *
 * @returns boolean wether successful or not
 */
function endRound() {}

//Server Response
function sendEventToPlayer(receiver, topic, data) {
    io.to(receiver).emit(topic, data);
}
