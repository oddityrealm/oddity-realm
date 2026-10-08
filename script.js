/* =========================================
   ODDITY REALM
   WORLD INTERACTION
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

const contactWhisper =
    document.getElementById("contactWhisper");

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

const growthScreen =
    document.getElementById("growthScreen");

const growthArtwork =
    document.getElementById("growthArtwork");

const growthPortal =
    document.getElementById("growthPortal");

const careScreen =
    document.getElementById("careScreen");

const careArtwork =
    document.getElementById("careArtwork");



/* =========================================
   CONTACT LINK
   ========================================= */

function showContactLink() {

    if (!contactLink) {
        return;
    }

    contactLink.classList.add(
        "is-visible"
    );

}


function hideContactLink() {

    if (!contactLink) {
        return;
    }

    contactLink.classList.remove(
        "is-visible"
    );

}



/* =========================================
   ENTER
   ========================================= */

enterHint.addEventListener(
    "click",
    () => {

        if (
            enterHint.dataset.reacted ===
            "true"
        ) {
            return;
        }


        enterHint.dataset.reacted =
            "true";


        enterHint.classList.add(
            "waiting"
        );


        setTimeout(
            () => {

                enterHint.classList.add(
                    "hidden-text"
                );


                setTimeout(
                    () => {

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

                    },
                    350
                );

            },
            1800
        );

    }
);



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


        hideContactLink();


        setTimeout(
            () => {

                landing.classList.add(
                    "opening"
                );

            },
            950
        );


        setTimeout(
            () => {

                artworkScreen.classList.add(
                    "revealed"
                );

            },
            1050
        );


        setTimeout(
            () => {

                artworkScreen.classList.add(
                    "boom"
                );

            },
            1500
        );


        setTimeout(
            () => {

                artworkScreen.classList.add(
                    "settled"
                );


                showContactLink();

            },
            3100
        );

    }
);



/* =========================================
   LOOK AGAIN
   ========================================= */

let lookTimer;
let hideLookTimer;


function showLookAgain() {

    clearTimeout(
        lookTimer
    );

    clearTimeout(
        hideLookTimer
    );


    lookTimer =
        setTimeout(
            () => {

                lookAgain.classList.add(
                    "show"
                );


                hideLookTimer =
                    setTimeout(
                        () => {

                            lookAgain.classList.remove(
                                "show"
                            );

                        },
                        1500
                    );

            },
            3000
        );

}


function hideLookAgain() {

    clearTimeout(
        lookTimer
    );

    clearTimeout(
        hideLookTimer
    );


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



/* Touch */

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


    hideContactLink();


    gardenScreen.classList.remove(
        "title-in",
        "title-up",
        "art-in",
        "ready",
        "portal"
    );


    gardenScreen.classList.add(
        "open"
    );


    /* Stage 1: title in centre */

    setTimeout(
        () => {

            gardenScreen.classList.add(
                "title-in"
            );

        },
        150
    );


    /* Stage 2: title travels upward */

    setTimeout(
        () => {

            gardenScreen.classList.add(
                "title-up"
            );

        },
        1200
    );


    /* Stage 3: artwork rises from below */

    setTimeout(
        () => {

            gardenScreen.classList.add(
                "art-in"
            );

        },
        1500
    );


    /* Stage 4: Garden becomes interactive */

    setTimeout(
        () => {

            gardenScreen.classList.add(
                "ready"
            );

        },
        3000
    );

}


gardenPortal.addEventListener(
    "click",
    enterGarden
);



/* =========================================
   GARDEN KEYHOLE
   GARDEN → GROWTH
   ========================================= */

gardenKeyhole.addEventListener(
    "click",
    () => {

        if (
            !gardenScreen.classList.contains(
                "ready"
            )
        ) {
            return;
        }


        gardenScreen.classList.add(
            "portal"
        );


        /*
           Spiral transition.
        */

        setTimeout(
            () => {

                growthScreen.classList.add(
                    "open"
                );

            },
            1100
        );


        /*
           The first thing begins
           growing from nothing.
        */

        setTimeout(
            () => {

                growthScreen.classList.add(
                    "growing"
                );

            },
            1250
        );


        /*
           Title appears only after
           the artwork has grown.
        */

        setTimeout(
            () => {

                growthScreen.classList.add(
                    "ready"
                );

            },
            3050
        );


        /*
           Garden disappears completely.
        */

        setTimeout(
            () => {

                gardenScreen.classList.remove(
                    "open",
                    "title-in",
                    "title-up",
                    "art-in",
                    "ready",
                    "portal"
                );

            },
            1900
        );

    }
);



/* =========================================
   GARDEN BACK
   ========================================= */

gardenBack.addEventListener(
    "click",
    () => {

        gardenScreen.classList.remove(
            "open",
            "title-in",
            "title-up",
            "art-in",
            "ready",
            "portal"
        );


        showContactLink();

    }
);



/* =========================================
   GROWTH → HANDLE WITH CARE
   ========================================= */

growthPortal.addEventListener(
    "click",
    () => {

        growthScreen.classList.remove(
            "ready"
        );


        growthScreen.classList.add(
            "leaving"
        );


        /*
           Open the fifth world.
        */

        setTimeout(
            () => {

                careScreen.classList.add(
                    "open"
                );

            },
            500
        );


        /*
           Let the fifth painting
           grow from the centre.
        */

        setTimeout(
            () => {

                careScreen.classList.add(
                    "growing"
                );

            },
            650
        );


        /*
           Reveal title after growth.
        */

        setTimeout(
            () => {

                careScreen.classList.add(
                    "ready"
                );

            },
            2700
        );


        /*
           Then whisper:
           please.
        */

        setTimeout(
            () => {

                careScreen.classList.add(
                    "message"
                );

            },
            3800
        );


        /*
           Remove previous room.
        */

        setTimeout(
            () => {

                growthScreen.classList.remove(
                    "open",
                    "growing",
                    "ready",
                    "leaving"
                );

            },
            1200
        );

    }
);



/* =========================================
   CONTACT
   ========================================= */

contactLink.addEventListener(
    "click",
    () => {

        hideContactLink();


        contactWhisper.classList.add(
            "show"
        );


        /*
           I can't stop thinking
           about you either.
        */

        setTimeout(
            () => {

                contactWhisper.classList.remove(
                    "show"
                );


                contactScreen.classList.add(
                    "open"
                );

            },
            2100
        );

    }
);



/* =========================================
   CONTACT BACK
   ========================================= */

contactBack.addEventListener(
    "click",
    () => {

        resetContactRoom();


        contactScreen.classList.remove(
            "open"
        );


        setTimeout(
            () => {

                showContactLink();

            },
            700
        );

    }
);



/* =========================================
   DON'T PUSH
   ========================================= */

function resetContactRoom() {

    dontPush.classList.remove(
        "gone"
    );


    dontPush.dataset.pushed =
        "false";


    pushMessage.classList.remove(
        "show"
    );


    pushMessageSecond.classList.remove(
        "show"
    );

}


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


        /*
           Button disappears completely.
        */

        dontPush.classList.add(
            "gone"
        );


        /*
           First sentence.
        */

        setTimeout(
            () => {

                pushMessage.classList.add(
                    "show"
                );

            },
            450
        );


        /*
           First sentence disappears.
           Second one appears.
        */

        setTimeout(
            () => {

                pushMessage.classList.remove(
                    "show"
                );


                pushMessageSecond.classList.add(
                    "show"
                );

            },
            1900
        );


        /*
           Return to THE WAY IN.
        */

        setTimeout(
            () => {

                pushMessageSecond.classList.remove(
                    "show"
                );


                contactScreen.classList.remove(
                    "open"
                );


                resetContactRoom();


                setTimeout(
                    () => {

                        showContactLink();

                    },
                    700
                );

            },
            3900
        );

    }
);
