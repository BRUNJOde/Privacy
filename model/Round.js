class Round {
    constructor(questionText, playerMap) {
        this.questionText = questionText;
        this.playerMap = playerMap;
        this.numberOfYes = 0;
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
        return allHaveAnswered;
    }

    resolveRound() {
        this.aggregateNumberOfYes();
        this.getDifferencesBetweenEstimationAndRealNumber();
    }

    getDifferencesBetweenEstimationAndRealNumber() {
        this.playerMap.forEach((value) => {
            if (value.estimation != null) {
                value.difference = Math.abs(
                    value.estimation - this.numberOfYes
                );
            } else {
                value.difference = 999;
            }
        });
    }

    aggregateNumberOfYes() {
        this.playerMap.forEach((value) => {
            if (value.answer == 1) {
                this.numberOfYes++;
            }
        });
    }
}
module.exports = Round;
