require("magnific-popup");

$(document).ready(function () {
    $('.js-popup').magnificPopup({
        type:'inline',
        showCloseBtn: false,
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.popup-close').on( "click", function() {
        $.magnificPopup.close();
    });
});
