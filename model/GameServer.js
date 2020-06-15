GameClass = require("./Game");
class GameServer {
    constructor() {
        this.GameList = new Map();
    }

    /**
     * Try to create a game
     *
     * @returns unique id of game, false if not successful
     */
    createGame() {
        let game = new GameClass();
        while (this.GameList.has(game.id)) {
            game.id++;
        }
        this.GameList.set(game.id, game);
        return game.id;
    }

    /**
     * Try to find a game by unique id
     * @param gameID
     * @returns unique id if found, false if not found
     */
    findGame(gameID) {
        let gameIdInt = parseInt(gameID);
        if (this.GameList.has(gameIdInt)) {
            return this.GameList.get(gameIdInt);
        } else {
            let e = new Error("Das Spiel wurde nicht gefunden");
            e.name = "GameNotFound";
            throw e;
        }
    }

    /**
     * Try to delete a game
     *
     * @returns boolean wether successful or not
     */
    deleteGame(gameId) {
        console.log("Game was deleted");
        this.GameList.delete(gameId);
    }
}
module.exports = GameServer;
