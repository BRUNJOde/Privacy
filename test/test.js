let ComposerClass = require("./../model/Composer");
let Composer = new ComposerClass();

var assert = require("assert");
describe("Functional Test of Composer", function () {
    let gameId;
    let gameId2;
    let adminOfGame = { id: 1, playerName: "Michi" };
    let playerInGame2 = { id: 2, playerName: "Maxi" };
    let playerNotInGame = { id: 45, playerName: "Sipp" };
    before(function () {
        let game = Composer.createGame(adminOfGame);
        console.log(game);
        gameId = game.id;
    });
    describe("Try to join nonexisting game", function () {
        it("Error is thrown", function () {
            let errorThrown;
            try {
                Composer.joinGame(null, playerNotInGame);
            } catch (error) {
                errorThrown = error;
            }
            assert.equal(errorThrown instanceof Error, true);
        });
    });
    describe("A new game is created", function () {
        it("playerList length should be one", function () {
            assert.equal(Composer.getPlayerListOfGame(gameId).length, 1);
        });
        it("Player name is right", function () {
            assert.equal(
                Composer.getPlayerListOfGame(gameId)[0].playerName,
                "Michi"
            );
        });
    });
    describe("A new player tries to join an existing game", function () {
        let playerList;
        before(function () {
            playerList = Composer.joinGame(gameId, playerInGame2);
        });
        it("playerList length should be two", function () {
            assert.equal(Composer.getPlayerListOfGame(gameId).length, 2);
        });
        it("Player name is right", function () {
            assert.equal(
                Composer.getPlayerListOfGame(gameId)[1].playerName,
                "Maxi"
            );
        });
    });
    describe("A new round is started by non-admin", function () {
        let response1;
        before(function () {
            try {
                response1 = Composer.startRound(gameId, playerInGame2);
            } catch (error) {
                response1 = error;
            }
        });
        it("Error is thrown", function () {
            assert.equal(response1 instanceof Error, true);
        });
    });
    describe("A new round is started by admin", function () {
        let round;
        let game;
        before(function () {
            game = Composer.getGame(gameId);
            round = Composer.startRound(gameId, adminOfGame, {
                text: "Custom question text",
            });
        });
        it("playerList is filled", function () {
            assert.equal(game.mapToList().length, 2);
        });
        it("questionText is not null", function () {
            assert.notEqual(round.questionText, null);
        });
        describe("Players try to answer questions", function () {
            let response1;
            let response2;
            let response3;
            before(function () {
                response2 = Composer.saveAnswer(gameId, adminOfGame, 2);
                response3 = Composer.saveAnswer(gameId, playerInGame2, 1);
            });

            it("Response for player whos in the game is true", function () {
                assert.equal(response2, true);
            });
            it("Answer of Player in Game is saved correctly", function () {
                assert.equal(
                    Composer.getGame(gameId).round.playerMap.get(adminOfGame.id)
                        .answer,
                    2
                );
            });
        });
        describe("Players send their estimations", function () {
            let response1;
            let response2;
            before(function () {
                response2 = Composer.saveEstimation(gameId, adminOfGame, 1);
            });
            it("Error for player whos not in the game is false", function () {
                let errorThrown;
                try {
                    Composer.saveEstimation(gameId, playerNotInGame, 3);
                } catch (error) {
                    errorThrown = error;
                }
                assert.equal(errorThrown instanceof Error, true);
            });

            it("Answer is set to correct value", function () {
                assert.equal(
                    Composer.getGame(gameId).round.playerMap.get(adminOfGame.id)
                        .estimation,
                    1
                );
            });
        });

        describe("Round gets resolved by admin", function () {
            let response1;
            let game;
            before(function () {
                game = Composer.getGame(gameId);
                response1 = Composer.resolveRound(gameId, adminOfGame);
            });
            it("Correct number of Yes", function () {
                assert.equal(game.resolveOfLastRound.numberOfYes, 1);
            });
            it("Correct length of player answer list", function () {
                assert.equal(game.resolveOfLastRound.playerList.length, 2);
            });
            it("Correct difference between estimation and real value of player who answered", function () {
                assert.equal(
                    game.resolveOfLastRound.playerList[0].difference,
                    0
                );
            });
            it("Player that did not answer has difference of 999", function () {
                assert.equal(
                    game.resolveOfLastRound.playerList[1].difference,
                    999
                );
            });
        });
    });
});
