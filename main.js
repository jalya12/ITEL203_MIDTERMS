const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links"); // Corrected selector

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    navLinks.classList.toggle("active"); // Apply active class to nav-links
});
