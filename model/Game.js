var rn = require("random-number");

class Game {
    constructor() {
        this.GameID = rn({ integer: true, min: 1000, max: 9999 });
        this.playerMap = new Map();
        this.admin;
    }

    playerIsAdmin(player) {
        if (player.id == this.admin.id) return true;
        else throw new Error("Spieler ist kein Admin");
    }

    hasActiveRound() {
        if (this.round == null) {
            throw new Error("Es gibt gerade keine aktive runde");
        } else {
            return true;
        }
    }

    addPlayer(player) {
        this.playerMap.set(player.id, player);
    }

    removePlayer(player) {
        this.playerMap.delete(player.id);
    }

    mapToList() {
        let playerListTemp = [];
        this.playerMap.forEach((value) => {
            playerListTemp.push({
                playerName: value.playerName,
            });
        });
        return playerListTemp;
    }
}
module.exports = Game;
