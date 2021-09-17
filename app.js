const menuIcon = document.querySelector('#mobile-menu'); /* we select the hamburger menu + the rotations */
const menuLinks = document.querySelector('.navbar__menu'); /* select our UL to display from top:-1000px */

// Display Mobile Menu

const mobileMenu = () => {
    menuIcon.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menuIcon.addEventListener('click',mobileMenu);