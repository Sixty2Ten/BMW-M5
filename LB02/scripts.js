document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("menu-active");
    });
});
