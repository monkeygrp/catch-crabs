'use strict';

/* View module for updating items on the screen. */

const View = (function() {
    // main game screen elements.
    const gameScreen = document.querySelector("#game-screen");
    const region1 = document.querySelector("#region1");
    const region2 = document.querySelector("#region2");
    let crabHere = document.querySelector(".crab-here"); // The div with the crab
    let crabNotHere = document.querySelector(".crab-not-here"); // The div without the crab
    const scoreLabel = document.querySelector("#score-label");
    // game over screen elements.
    const gameOverScreen = document.querySelector("#game-over-screen");
    const gameOverMsg = document.querySelector("#game-over-msg");
    const playAgainBtn = document.querySelector("#play-again-btn");

    function render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }

    function hide(elt) {
        elt.classList.remove("visible");
        elt.classList.add("hidden");
    }

    function show(elt) {
        elt.classList.remove("hidden");
        elt.classList.add("visible");
    }

    function crabSwap() {
        View.crabHere.classList.replace("crab-here", "crab-not-here");
        View.crabNotHere.classList.replace("crab-not-here", "crab-here");
        // swap the pointers.
        [View.crabHere, View.crabNotHere] = [View.crabNotHere, View.crabHere];
    }

    function resetCrab() {
        region1.classList.replace("crab-not-here", "crab-here");
        region2.classList.replace("crab-here", "crab-not-here");
        View.crabHere = document.querySelector(".crab-here");
        View.crabNotHere = document.querySelector(".crab-not-here");
    }

    return {
        // main screen elements
        gameScreen: gameScreen,
        region1: region1,
        region2: region2,
        crabHere: crabHere,
        crabNotHere: crabNotHere,
        scoreLabel: scoreLabel,
        // game over screen elements
        gameOverScreen: gameOverScreen,
        gameOverMsg: gameOverMsg,
        playAgainBtn: playAgainBtn,
        // View methods
        render: render,
        hide: hide,
        show: show,
        crabSwap: crabSwap,
        resetCrab: resetCrab
    };
})();
