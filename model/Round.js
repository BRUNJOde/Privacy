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
            return true;
        } else {
            return false;
        }
    }

    resolveRound() {
        this.aggregateNumberOfYes();
        this.getDifferencesBetweenEstimationAndRealNumber();
        return {
            numberOfYes: this.numberOfYes,
            playerList: this.mapToList(),
        };
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

    mapToList() {
        let playerListTemp = [];
        this.playerMap.forEach((value) => {
            playerListTemp.push({
                playerName: value.playerName,
                estimation: value.estimation,
                difference: value.difference,
            });
        });
        return playerListTemp;
    }
}
module.exports = Round;
