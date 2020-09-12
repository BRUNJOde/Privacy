GameServerClass = require("./GameServer");
RoundClass = require("./Round");
let questions = require("./Questions");

class Composer {
    constructor() {
        this.GameServer = new GameServerClass();
    }
    /**
     * A user tries to create a game
     * Game get created
     * User joins the game and the socket io channel
     * And is set to admin
     * @returns Unique ID of Game
     */
    createGame(player) {
        let gameId = this.GameServer.createGame();
        let game = this.GameServer.findGame(gameId);
        game.admin = player;
        let playerList = this.joinGame(gameId, player);
        return game.getGameInfo();
    }

    /**
     * A user tries to join a game
     * @returns list of players when successful, else false
     */
    joinGame(gameId, player) {
        let game = this.GameServer.findGame(gameId);
        game.addPlayer(player);
        return game.mapToList();
    }

    getPlayerListOfGame(gameId) {
        let game = this.GameServer.findGame(gameId);
        return game.mapToList();
    }

    getGame(gameId) {
        let game = this.GameServer.findGame(gameId);
        return game;
    }

    removePlayerFromGame(gameId, player) {
        let game = this.getGame(gameId);
        let lastPlayerRemoved = game.removePlayer(player);
        if (lastPlayerRemoved) {
            this.GameServer.deleteGame(gameId);
        }
    }

    startRound(
        gameId,
        player,
        question = questions[Math.floor(Math.random() * questions.length)]
    ) {
        let game = this.GameServer.findGame(gameId);

        if (game.playerIsAdmin(player)) {
            let round = new RoundClass(question.text, game.playerMap);
            game.round = round;
            return round;
        } else {
            throw new Error("Nur der Admin kann eine Runde starten");
        }
    }

    /**
     *
     * @param {*} gameId
     * @param {*} player
     * @param {*} answer - 1=yes , 2=no
     */
    saveAnswer(gameId, player, answer) {
        console.log("Save Answer : " + answer);
        let game = this.GameServer.findGame(gameId);
        let response = game.round.savePlayerAnswer(player, answer);
        return response;
    }

    saveEstimation(gameId, player, answer) {
        console.log("Save Estimation : " + answer);
        console.log("Save Estimation : " + player.id);
        let game = this.GameServer.findGame(gameId);
        let allHaveAnswered = game.round.savePlayerEstimation(player, answer);
        if (allHaveAnswered) {
            console.log("All have answered");
            this.resolveRound(gameId);
        }
    }

    resolveByUser(gameId, player) {
        let game = this.GameServer.findGame(gameId);
        game.playerIsAdmin(player);
        this.resolveRound(gameId);
    }

    resolveRound(gameId) {
        let game = this.GameServer.findGame(gameId);
        game.hasActiveRound();
        let resolveObject = game.round.resolveRound();
        console.log(game.round.numberOfYes);
        game.resolveOfLastRound = {
            questionText: game.round.questionText,
            numberOfYes: game.round.numberOfYes,
            playerList: game.mapToList(),
        };
        game.cleanPlayerMap();
        game.round = null;
        return resolveObject;
    }
}

module.exports = Composer;
