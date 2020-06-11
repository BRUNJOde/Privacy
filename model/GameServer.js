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
        while (this.GameList.has(game.GameID)) {
            game.GameID++;
        }
        this.GameList.set(game.GameID, game);
        return game.GameID;
    }

    /**
     * Try to find a game by unique id
     * @param gameID
     * @returns unique id if found, false if not found
     */
    findGame(gameID) {
        if (this.GameList.has(gameID)) {
            return this.GameList.get(gameID);
        } else {
            throw new Error("Das Spiel wurde nicht gefunden");
        }
    }

    /**
     * Try to delete a game
     *
     * @returns boolean wether successful or not
     */
    deleteGame() {}
}
module.exports = GameServer;
