/* =========================================
   ODDITY REALM
   Main interaction
   ========================================= */

const curiousButton = document.getElementById("curiousButton");
const enterHint = document.getElementById("enterHint");

const realmMark = document.getElementById("realmMark");
const realmMarkWrap = document.querySelector(".realm-mark-wrap");
const realmReaction = document.getElementById("realmReaction");

const landing = document.getElementById("landing");
const artworkScreen = document.getElementById("artworkScreen");


/* =========================================
   ENTER
   A LITTLE WARNING
   ========================================= */

enterHint.addEventListener("click", () => {

    if (enterHint.dataset.reacted === "true") {
        return;
    }

    enterHint.dataset.reacted = "true";

    enterHint.classList.add("waiting");


    setTimeout(() => {

        enterHint.classList.add("hidden-text");


        setTimeout(() => {

            enterHint.textContent =
                "YOU SHOULD BE MORE CURIOUS.";

            enterHint.classList.remove("waiting");
            enterHint.classList.remove("hidden-text");

            enterHint.classList.add("hint");

        }, 350);

    }, 1800);

});


/* =========================================
   ODDITY REALM
   I FELT THAT.
   ========================================= */

realmMark.addEventListener("click", () => {

    realmReaction.classList.add("show");

});


/* =========================================
   LEAVING THE ODDITY REALM MARK
   MAKES THE MESSAGE DISAPPEAR
   ========================================= */

realmMarkWrap.addEventListener("mouseleave", () => {

    realmReaction.classList.remove("show");

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
/* =========================================
   LOOK AGAIN.
   Appears after 3 seconds of hovering
   and disappears after 1.5 seconds
   ========================================= */

const firstArtwork = document.getElementById("firstArtwork");
const lookAgain = document.querySelector(".look-again");

let lookTimer;
let hideLookTimer;

firstArtwork.addEventListener("mouseenter", () => {

    clearTimeout(lookTimer);
    clearTimeout(hideLookTimer);

    lookTimer = setTimeout(() => {

        lookAgain.classList.add("show");

        hideLookTimer = setTimeout(() => {

            lookAgain.classList.remove("show");

        }, 1500);

    }, 3000);

});


firstArtwork.addEventListener("mouseleave", () => {

    clearTimeout(lookTimer);
    clearTimeout(hideLookTimer);

    lookAgain.classList.remove("show");

});
