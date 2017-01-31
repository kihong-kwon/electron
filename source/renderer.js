// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
exports.createSlick = function() {

    $(".slider").not('.slick-initialized').slick({
        autoplay: true,
        dots: false,
        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

}