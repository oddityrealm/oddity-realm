/* =========================================
   ODDITY REALM
   Main interaction
   ========================================= */

const curiousButton = document.getElementById("curiousButton");
const enterHint = document.getElementById("enterHint");

const landing = document.getElementById("landing");
const artworkScreen = document.getElementById("artworkScreen");


/* =========================================
   ENTER
   A LITTLE WARNING
   ========================================= */

enterHint.addEventListener("click", () => {

    enterHint.textContent = "YOU SHOULD BE MORE CURIOUS.";

    enterHint.classList.add("hint");

});


/* =========================================
   CURIOUS?
   ========================================= */

curiousButton.addEventListener("click", () => {

    if (curiousButton.classList.contains("answered")) {
        return;
    }


    /* First response */

    curiousButton.textContent = "GOOD.";

    curiousButton.classList.add("answered");


    /* Let the word sit there for a moment */

    setTimeout(() => {

        landing.classList.add("opening");

    }, 950);


    /* Reveal the artwork screen */

    setTimeout(() => {

        artworkScreen.classList.add("revealed");

    }, 1050);


    /* BOOM */

    setTimeout(() => {

        artworkScreen.classList.add("boom");

    }, 1500);


    /* Then slowly settle */

    setTimeout(() => {

        artworkScreen.classList.add("settled");

    }, 3100);

});
