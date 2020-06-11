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
        return gameId;
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

    saveAnswer(gameId, player, answer) {
        let game = this.GameServer.findGame(gameId);
        let response = game.round.savePlayerAnswer(player, answer);
        return response;
    }

    saveEstimation(gameId, player, answer) {
        let game = this.GameServer.findGame(gameId);
        let response = game.round.savePlayerEstimation(player, answer);
        return response;
    }

    resolveRound(gameId, player) {
        let game = this.GameServer.findGame(gameId);
        game.playerIsAdmin(player);
        game.hasActiveRound();
        let resolveObject = game.round.resolveRound();
        game.round = null;
        return resolveObject;
    }
}

module.exports = Composer;
