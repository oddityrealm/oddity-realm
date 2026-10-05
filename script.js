const curiousButton = document.getElementById("curiousButton");
const landing = document.querySelector(".landing");

curiousButton.addEventListener("click", () => {

    // First response
    curiousButton.textContent = "GOOD.";
    curiousButton.classList.add("answered");

    // Give the answer a moment to breathe
    setTimeout(() => {
        landing.classList.add("opening");
    }, 1000);

    // Hide the button
    setTimeout(() => {
        curiousButton.style.opacity = "0";
    }, 1400);

});
