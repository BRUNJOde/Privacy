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

let Composer = require("Composer")();

//Socket IO Communication
io.on("connection", (socket) => {
    socket.on("CreateGame", (playerName) => {
        socket.playerName = playerName;
        let gameId = Composer.createGame(socket);
        sendEventToPlayer(socket.id, "CreateGame", {
            state: 200,
            gameId: gameId,
            playerList: playerList,
        });
    });

    socket.on("JoinGame", (joinGameObject) => {
        let playerName = joinGameObject.playerName;
        let gameId = joinGameObject.gameId;
        socket.playerName = playerName;
        let playerList = joinGame(gameId, socket);
        if (playerList) {
            sendEventToPlayer(socket.id, "JoinGame", {
                state: 200,
                gameId: gameId,
                playerList: playerList,
            });
        }
    });
});

io.on("StartRound", (socket) => {});

io.on("AnswerQuestion", (socket) => {});

io.on("SendEstimation", (socket) => {});

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
