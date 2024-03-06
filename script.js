document.addEventListener("DOMContentLoaded", function () {
    const changeBlendModeButton = document.getElementById("changeBlendModeButton");
    let isNormalMode = false;

    const luminosityBlendModeClasses = [
        ".frame-item",
        ".frame-child1",
        ".frame-inner",
        ".middlebox-icon",
        ".rectangle-icon",
        ".frame-child2",
        ".frame-child3",
        ".frame-child4",
        ".assassins-creed-1-1"
    ];

    // Function to toggle blend mode and update text content
    function toggleBlendMode() {
        luminosityBlendModeClasses.forEach(function (className) {
            const elementsWithBlendMode = document.querySelectorAll(className);
            elementsWithBlendMode.forEach(function (element) {
                if (isNormalMode) {
                    element.style.mixBlendMode = "normal";
                } else {
                    element.style.mixBlendMode = "luminosity";
                }
            });
        });

        // Toggle the mode
        isNormalMode = !isNormalMode;

        // Change the text content of the button
        changeBlendModeButton.textContent = isNormalMode ? "Don't Click" : "Atha padi";

        // Change the text content of the welcome explore div
        const welcomeExploreText = document.querySelector(".welcome-explore-our");
        welcomeExploreText.textContent = isNormalMode ? "Welcome! Da Venna Odaney SSH potu paranthudatha ithula onnum illa Apurm enda kamikurana chummathaan ithu chuma testing ku thaan" : "Don't Click nu Oruthadava sonna kekamatiya ithu ella enga urupuda pothu seri etho onnu color epadi nalla irukka!! da vennaingala";
    }

    // Add event listener to the button
    changeBlendModeButton.addEventListener("click", toggleBlendMode);

    // Call the function to initialize blend mode and text content
    toggleBlendMode();
});
