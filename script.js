document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const originalColor = navbar.style.backgroundColor;
    
    window.onscroll = function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#4551";
            navbar.classList.add("scrolled");
        } else {
            navbar.style.backgroundColor = originalColor;
            navbar.classList.remove("scrolled");
        }
    };
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    const navLinks = document.querySelector('.nav-links');
    const menuIcons = document.querySelector('.menu-icons');

    if (hamburger && cross && navLinks && menuIcons) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuIcons.classList.toggle('active');
        });

        cross.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuIcons.classList.toggle('active');
        });
    } else {
        console.error("One or more elements could not be found in the DOM.");
    }
});

