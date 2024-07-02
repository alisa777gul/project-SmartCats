document.addEventListener("DOMContentLoaded", function() {
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu-btn");
    const mobMenu = document.querySelector(".mob-menu");

    openMenuBtn.addEventListener("click", function() {
        mobMenu.classList.add("is-open");
    });

    closeMenuBtn.addEventListener("click", function() {
        mobMenu.classList.remove("is-open");
    });
});