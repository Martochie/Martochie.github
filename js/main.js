var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".nav-menu ul");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
});
