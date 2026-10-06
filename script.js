const curiousButton = document.getElementById("curiousButton");
const landing = document.querySelector(".landing");
const artworkScreen = document.querySelector(".artwork-screen");

curiousButton.addEventListener("click", () => {

    curiousButton.textContent = "GOOD.";
    curiousButton.classList.add("answered");

    setTimeout(() => {
        landing.classList.add("opening");
    }, 1000);

    setTimeout(() => {
        artworkScreen.classList.add("revealed");
        artworkScreen.classList.add("visible");
    }, 1800);

    setTimeout(() => {
        artworkScreen.classList.add("settled");
    }, 4000);

    setTimeout(() => {
        curiousButton.style.opacity = "0";
    }, 1300);

});
