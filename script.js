let menuButton = document.querySelector(".mobile-menu-bar")
let navMenu = document.querySelector(".mobile-menus")

menuButton.addEventListener("click", navToggle)

function navToggle () {
    navMenu.classList.toggle("active")
}