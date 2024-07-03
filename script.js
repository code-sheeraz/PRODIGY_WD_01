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
