document.addEventListener("DOMContentLoaded", function () {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 5000,

        speed: 500,
        fade: true,
        cssEase: 'linear',

        dots: true,
        infinite: true,

        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="assets/img/prev-arrow.png"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="assets/img/next-arrow.png"></button>',
        
    });
});



function hamburgerToggleInit() {
    const hamburger = document.getElementById("hamburger-menu");
    hamburger.addEventListener("click", (event) => {
        console.log(event);
        console.log(this);
        hamburger.classList.toggle("open");
    });
}
