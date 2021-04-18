var rn = require("random-number");

class Game {
    constructor() {
        this.id = rn({ integer: true, min: 1000, max: 9999 });
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

    addPlayer(newPlayer) {
        this.playerMap.forEach((player, key) => {
            if (player.playerName === newPlayer.playerName) {
                throw new Error(
                    "Dein Spielername existiert bereits in dem Spiel"
                );
            }
        });
        newPlayer.totalPoints = 0;
        this.playerMap.set(newPlayer.id, newPlayer);
    }

    hasPlayer(player) {
        if (!this.playerMap.has(player.id)) {
            let e = new Error("Spieler gehört nicht zu Spiel");
            e.name = "PlayerNotFound";
            throw e;
        }
    }

    getPlayer(player) {
        return this.playerMap.get(player.id);
    }

    getPlayerByName(playerName) {
        let playerFound = null;
        this.playerMap.forEach((player, key) => {
            if (player.playerName === playerName) playerFound = player;
        });
        if (playerFound) {
            return playerFound;
        } else {
            throw new Error("Spieler gehört nicht zu Spiel");
        }
    }

    removePlayer(player) {
        this.playerMap.delete(player.id);
        console.log(this.playerMap.size);
        if (this.playerMap.size < 1) {
            return true;
        } else {
            if (player.id == this.admin.id) {
                this.admin = this.playerMap.values().next().value;
            }
            return false;
        }
    }

    cleanPlayerMap() {
        this.playerMap.forEach((value) => {
            value.estimation = null;
            value.sipsInThisRound = 0;
            value.difference = null;
            value.answer = null;
            value.sipsAssigned = null;
            value.success = null;
        });
    }

    mapToList() {
        let playerListTemp = [];

        this.playerMap.forEach((value, key) => {
            playerListTemp.push({
                playerName: value.playerName,
                isAdmin: key == this.admin.id,
                estimation: value.estimation,
                difference: value.difference,
                success: value.success,
                sipsInThisRound: value.sipsInThisRound,
                sipsAssigned: value.sipsAssigned,
                totalPoints: value.totalPoints,
            });
        });

        return playerListTemp;
    }

    getGameInfo() {
        return {
            playerList: this.mapToList(),
            id: this.id,
            round: this.round,
            resolveOfLastRound: this.resolveOfLastRound,
        };
    }
}
module.exports = Game;
