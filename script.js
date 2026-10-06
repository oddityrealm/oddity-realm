const curiousButton = document.getElementById("curiousButton");
const landing = document.querySelector(".landing");
const artworkScreen = document.querySelector(".artwork-screen");


curiousButton.addEventListener("click", () => {

    /* =========================================
       1. CURIOUS? → GOOD.
       ========================================= */

    curiousButton.textContent = "GOOD.";
    curiousButton.classList.add("answered");


    /* =========================================
       2. THE LANDING SCREEN LEAVES
       ========================================= */

    setTimeout(() => {

        landing.classList.add("opening");

    }, 1200);


    /* =========================================
       3. THE ARTWORK ENTERS
       ========================================= */

    setTimeout(() => {

        artworkScreen.classList.add("revealed");

        requestAnimationFrame(() => {
            artworkScreen.classList.add("visible");
        });

    }, 1800);


    /* =========================================
       4. THE IMAGE SETTLES
       ========================================= */

    setTimeout(() => {

        artworkScreen.classList.add("settled");

    }, 4200);


    /* =========================================
       5. HIDE CURIOUS / GOOD
       ========================================= */

    setTimeout(() => {

        curiousButton.style.opacity = "0";

    }, 1500);

});
