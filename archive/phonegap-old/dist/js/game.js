'use strict';

/* Back-end game functionality.  e.g. score handling. */

const Game = (function() {
    let score;

    function start() {
        score = 0;
    }

    function scorePoint() {
        score++;
    }

    function setScore(value) {
        if (typeof value == "number") {
            score = Math.round(value);
        } else {
            throw new TypeError("setScore(value) called: value must be a number");
        }
    }

    function getScore() {
        return score;
    }

    return {
        start: start,
        scorePoint: scorePoint,
        setScore: setScore,
        getScore: getScore
    };
})();
