const htmlSection = document.querySelectorAll("section");
const navbarSection = document.querySelectorAll(".navbar-menu > li > a");

let btn = document.getElementById("btn");

window.onscroll = () => {
    let currentElement = "";

    htmlSection.forEach((section) => {
        const offsetTop = section.offsetTop;
        if (pageYOffset >= offsetTop) {
            if(section.hasAttribute("id")){
                currentElement = section.getAttribute("id");
            }
        }
    });

    navbarSection.forEach((element) => {
        element.classList.remove("active");
        if (element.classList.contains(currentElement)) {
            element.classList.add("active");
        }
    });

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
