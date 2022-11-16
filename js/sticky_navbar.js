let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;
let header = document.getElementById("head")

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
        navbar.classList.add('sticky');
        header.classList.add('navbarOffsetMargin');
    }
    else {
        navbar.classList.remove('sticky');
        header.classList.remove('navbarOffsetMargin');
    }
});
