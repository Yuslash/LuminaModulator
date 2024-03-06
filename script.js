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

    changeBlendModeButton.addEventListener("click", function () {
        luminosityBlendModeClasses.forEach(function (className) {
            const elementsWithBlendMode = document.querySelectorAll(className);
            elementsWithBlendMode.forEach(function (element) {
                if (isNormalMode) {
                    element.style.mixBlendMode = "luminosity";
                } else {
                    element.style.mixBlendMode = "normal";
                }
            });
        });

        isNormalMode = !isNormalMode; // Toggle the mode
    });
});
