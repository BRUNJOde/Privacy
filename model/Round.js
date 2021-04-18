class Round {
    constructor(questionText, playerMap) {
        this.questionText = questionText;
        this.playerMap = playerMap;
        this.numberOfYes = 0;
        this.assignSipPhase = false;
        /**
         * Estimation -> AssignSips -> Resolve
         */
        this.roundState = "Estimation";
    }

    savePlayerAnswer(player, answer) {
        if (this.playerMap.has(player.id)) {
            this.playerMap.get(player.id).answer = answer;
            return true;
        } else {
            return false;
        }
    }

    savePlayerEstimation(player, estimation) {
        if (this.playerMap.has(player.id)) {
            this.playerMap.get(player.id).estimation = estimation;
            return this.checkIfAllPlayerHaveAnswered();
        } else {
            throw new Error("Spieler gehört nicht zum Spiel");
        }
    }

    checkIfAllPlayerHaveAnswered() {
        let allHaveAnswered = true;
        this.playerMap.forEach((value) => {
            if (value.estimation == null) {
                allHaveAnswered = false;
            }
        });
        if (allHaveAnswered) {
            this.roundState = "AssignSips";
        }
        return allHaveAnswered;
    }

    resolveRound() {
        this.aggregateNumberOfYes();
        this.getDifferencesBetweenEstimationAndRealNumber();
        this.allPlayersHaveSipsAssigned();
    }

    /**
    success beschreibt wie gut ein Spieler in der Runde war 
    je nach success wert darf der Spieler unterschiedlich viele Schlücke
    verteilen.
    perfectHit => 3 Schlücke
    closeHit => 1 Schluck
    noHit => 0 Schlücke
    **/
    getDifferencesBetweenEstimationAndRealNumber() {
        this.playerMap.forEach((player) => {
            if (player.estimation != null) {
                player.difference = Math.abs(
                    player.estimation - this.numberOfYes
                );
            } else {
                player.difference = 999;
            }
            switch (player.difference) {
                case 0:
                    player.success = "perfectHit";
                    this.increasePlayerTotalePoint(player, 3);
                    break;
                case 1:
                    player.success = "closeHit";
                    this.increasePlayerTotalePoint(player, 1);
                    break;
                default:
                    player.success = "noHit";
                    player.sipsAssigned = true;
            }
            this.assignSipPhase = true;
        });
    }

    increasePlayerTotalePoint(player, increaseBy) {
        if (!player.totalPoints) player.totalPoints = 0;
        player.totalPoints += increaseBy;
    }

    saveSipAssignment(player, sipAssignment) {
        sipAssignment.forEach((sip) => {
            let playerToAssignSips;
            try {
                playerToAssignSips = this.getPlayerByName(sip.playerName);
                if (!playerToAssignSips.sipsInThisRound) {
                    playerToAssignSips.sipsInThisRound = 0;
                }
                playerToAssignSips.sipsInThisRound += parseInt(
                    sip.assignedSips
                );
            } catch (error) {
                console.log("Sip assignment failed " + error.message);
            }
        });
        player.sipsAssigned = true;
        return this.allPlayersHaveSipsAssigned();
    }

    allPlayersHaveSipsAssigned() {
        let allHaveAnswered = true;
        this.playerMap.forEach((player) => {
            if (!player.sipsAssigned) {
                allHaveAnswered = false;
            }
        });
        if (allHaveAnswered) {
            this.roundState = "Resolve";
        }
        return allHaveAnswered;
    }

    aggregateNumberOfYes() {
        this.playerMap.forEach((value) => {
            if (value.answer == 1) {
                this.numberOfYes++;
            }
        });
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
}
module.exports = Round;
