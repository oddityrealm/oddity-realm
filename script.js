const curiousButton = document.getElementById("curiousButton");

curiousButton.addEventListener("click", () => {
    curiousButton.textContent = "GOOD.";

    curiousButton.style.pointerEvents = "none";

    setTimeout(() => {
        curiousButton.style.opacity = "0";
        curiousButton.style.transform = "translateX(-50%) translateY(8px)";
    }, 700);
});
