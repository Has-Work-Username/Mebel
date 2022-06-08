const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav_left');

hamburger.addEventListener( "click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.querySelectorAll('.nav_link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
