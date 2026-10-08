/* =========================================
   ODDITY REALM
   Main interaction
   ========================================= */


/* =========================================
   ELEMENTS
   ========================================= */

const curiousButton =
    document.getElementById("curiousButton");

const enterHint =
    document.getElementById("enterHint");

const realmMark =
    document.getElementById("realmMark");

const realmMarkWrap =
    document.querySelector(".realm-mark-wrap");

const realmReaction =
    document.getElementById("realmReaction");

const landing =
    document.getElementById("landing");

const artworkScreen =
    document.getElementById("artworkScreen");

const firstArtwork =
    document.getElementById("firstArtwork");

const lookAgain =
    document.querySelector(".look-again");

const gardenPortal =
    document.getElementById("gardenPortal");

const gardenScreen =
    document.getElementById("gardenScreen");

const gardenKeyhole =
    document.getElementById("gardenKeyhole");

const gardenBack =
    document.getElementById("gardenBack");

const contactLink =
    document.getElementById("contactLink");

const contactScreen =
    document.getElementById("contactScreen");

const contactBack =
    document.getElementById("contactBack");

const dontPush =
    document.getElementById("dontPush");

const pushMessage =
    document.getElementById("pushMessage");

const pushMessageSecond =
    document.getElementById("pushMessageSecond");


/* =========================================
   ENTER
   ========================================= */

enterHint.addEventListener("click", () => {

    if (
        enterHint.dataset.reacted === "true"
    ) {
        return;
    }


    enterHint.dataset.reacted = "true";

    enterHint.classList.add("waiting");


    setTimeout(() => {

        enterHint.classList.add(
            "hidden-text"
        );


        setTimeout(() => {

            enterHint.textContent =
                "YOU SHOULD BE MORE CURIOUS.";

            enterHint.classList.remove(
                "waiting"
            );

            enterHint.classList.remove(
                "hidden-text"
            );

            enterHint.classList.add(
                "hint"
            );

        }, 350);

    }, 1800);

});


/* =========================================
   ODDITY REALM
   I FELT THAT.
   ========================================= */

realmMark.addEventListener(
    "click",
    () => {

        realmReaction.classList.add(
            "show"
        );

    }
);


realmMarkWrap.addEventListener(
    "mouseleave",
    () => {

        realmReaction.classList.remove(
            "show"
        );

    }
);


/* =========================================
   CURIOUS?
   ========================================= */

curiousButton.addEventListener(
    "click",
    () => {

        if (
            curiousButton.classList.contains(
                "answered"
            )
        ) {
            return;
        }


        curiousButton.textContent =
            "GOOD.";

        curiousButton.classList.add(
            "answered"
        );


        setTimeout(() => {

            landing.classList.add(
                "opening"
            );

        }, 950);


        setTimeout(() => {

            artworkScreen.classList.add(
                "revealed"
            );

        }, 1050);


        setTimeout(() => {

            artworkScreen.classList.add(
                "boom"
            );

        }, 1500);


        setTimeout(() => {

            artworkScreen.classList.add(
                "settled"
            );

        }, 3100);

    }
);


/* =========================================
   LOOK AGAIN.
   ========================================= */

let lookTimer;
let hideLookTimer;


function showLookAgain() {

    clearTimeout(lookTimer);
    clearTimeout(hideLookTimer);


    lookTimer = setTimeout(() => {

        lookAgain.classList.add(
            "show"
        );


        hideLookTimer = setTimeout(() => {

            lookAgain.classList.remove(
                "show"
            );

        }, 1500);

    }, 3000);

}


function hideLookAgain() {

    clearTimeout(lookTimer);
    clearTimeout(hideLookTimer);

    lookAgain.classList.remove(
        "show"
    );

}


/* Desktop */

firstArtwork.addEventListener(
    "mouseenter",
    showLookAgain
);


firstArtwork.addEventListener(
    "mouseleave",
    hideLookAgain
);


/* Mobile */

firstArtwork.addEventListener(
    "click",
    () => {

        if (
            lookAgain.classList.contains(
                "show"
            )
        ) {

            hideLookAgain();

            return;

        }


        showLookAgain();

    }
);


/* =========================================
   ENTER THE GARDEN
   ========================================= */

function enterGarden() {

    if (
        !artworkScreen.classList.contains(
            "settled"
        )
    ) {
        return;
    }


    gardenScreen.classList.add(
        "open"
    );

}


gardenPortal.addEventListener(
    "click",
    enterGarden
);


/* =========================================
   GARDEN KEYHOLE
   ========================================= */

gardenKeyhole.addEventListener(
    "click",
    () => {

        gardenScreen.classList.add(
            "key-opening"
        );


        setTimeout(() => {

            gardenScreen.classList.add(
                "portal"
            );

        }, 350);


        setTimeout(() => {

            gardenScreen.classList.remove(
                "portal"
            );

            gardenScreen.classList.remove(
                "key-opening"
            );

        }, 1900);

    }
);


/* =========================================
   GARDEN BACK
   ========================================= */

gardenBack.addEventListener(
    "click",
    () => {

        gardenScreen.classList.remove(
            "open"
        );

    }
);


/* =========================================
   CONTACT
   ========================================= */

contactLink.addEventListener(
    "click",
    () => {

        contactScreen.classList.add(
            "open"
        );

    }
);


contactBack.addEventListener(
    "click",
    () => {

        contactScreen.classList.remove(
            "open"
        );

    }
);


/* =========================================
   DON'T PUSH
   ========================================= */

dontPush.addEventListener(
    "click",
    () => {

        if (
            dontPush.dataset.pushed ===
            "true"
        ) {
            return;
        }


        dontPush.dataset.pushed =
            "true";


        dontPush.textContent =
            "I KNEW YOU'D PUSH.";


        setTimeout(() => {

            pushMessage.classList.add(
                "show"
            );

        }, 500);


        setTimeout(() => {

            pushMessageSecond.classList.add(
                "show"
            );

        }, 1500);

    }
);
