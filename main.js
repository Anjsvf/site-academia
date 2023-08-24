function toggleMenu() {
    let menu = document.getElementById("main-menu");
    let heardInfo = document.querySelector(".header-content");
    if (menu.style.display === "block") {
        menu.style.display = "none"

        heardInfo.style.display = "block"
    } else {
        menu.style.display = "block"
        heardInfo.style.display = "none"
    }


}


//função referente ao carrossel 

$(document).ready(function () {
    $(".workout-carousel").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
