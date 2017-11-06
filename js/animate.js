
$(document).ready(function () {
    let text = $('.js-animate-load');
    setTimeout(function () {
        text.addClass('animate');

    },350);
    setTimeout(function () {
        text.addClass('animate-hover')
    },450);



    let map = $('.js-show-map');
    map.on('mouseenter', function () {
        let $this = $(this);
        $this.find('.b-second__loop').hide();
        $this.find('.b-second__map-background').addClass('b-second__map-background--marker');
        $this.addClass('animate');
    });
    map.on('mouseleave', function () {
        let $this = $(this);
        $this.find('.b-second__loop').show();
        $this.find('.b-second__map-background').removeClass('b-second__map-background--marker');
        $this.removeClass('animate');
    });
});

var skrollr = require('skrollr');


$(".js-scroll-down").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

$(".js-play-video").click(function(ev){
    let $this = $(this),
        parent = $this.closest('.b-third__video-inner');
    parent.addClass('active');
    $this.addClass('active');

    $(".b-third__video-inner > iframe")[0].src += "&autoplay=1";
    ev.preventDefault();
});
//function
function skrollrInit() {

    //initialize skrollr
    skrollr.init({
        smoothScrolling: false,
        render: function(data) {
            //Log Skrollr position
            $('#info').text(data.curTop);
        }
    });

    // disable skrollr if using handheld device
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        skrollr.init().destroy();
    }

}

//execute function
skrollrInit();

var s = skrollr.init({});

$(window).on('resize', function () {
    s.refresh();
});
$(document).ready(function () {
    s.refresh();
});










s




