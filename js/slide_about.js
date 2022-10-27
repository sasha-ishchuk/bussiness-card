let index = 1;

function displaySlide(n) {
    let i;
    let about_me_slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > about_me_slides.length) {
        index = 1
    }
    if (n < 1) {
        index = about_me_slides.length
    }
    for (i = 0; i < about_me_slides.length; i++) {
        about_me_slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_slide", "");
    }
    about_me_slides[index-1].style.display = "block";
    dots[index-1].className += " active_slide";
}

displaySlide(index);

function getCurrentSlide(n) {
    displaySlide(index = n);
}

function getNextSlide(n) {
    displaySlide(index += n);
}
