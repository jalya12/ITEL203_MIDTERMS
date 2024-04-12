// Corrected selector to target the ".nav-links" element
const navLinks = document.querySelector(".nav-links");

// Toggle visibility of navigation links
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
});
