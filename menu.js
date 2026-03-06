const burger = document.querySelector(".burger-nav");
const sideMenu = document.querySelector(".sideMenu");
const sideMenuLinks = document.querySelectorAll(".sideMenuLink");

burger.addEventListener("click", function() {
    sideMenu.classList.toggle("active");
});

sideMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !burger.contains(e.target)) {
        sideMenu.classList.remove("active");
    }
});

