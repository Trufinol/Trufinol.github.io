$(function () {
    var $preloader = $('#preloader');
    var $content = $(".content");
    var $contwrap = $('.cont-wrap');

    //$preloader.fadeOut(200);

    function profAnim() {
        $contwrap.css('visibility', 'visible');
        $content.fadeIn(400);
        TweenMax.fromTo($('h1,h2,.profile > p'), 0.8, { x: 200 }, { x: 0, ease: Back.easeOut.config(1) });
        TweenMax.fromTo($('.step-light,.step-bold'), 0.8, { x: -200 }, { x: 0, ease: Back.easeOut.config(1) }, 0.3);
        TweenMax.staggerFrom($('.b-info'), 0.6, { opacity: 0, scale: 0 }, 0.08);

    };
    function barAnimate(id) {

        idVal = id.data('value');
        TweenMax.to(id, 1, { width: idVal + '%', ease: Power1.easeIn });

        setInterval(function () {
            var progr = $('.progress').css('width');
            var length = id.css('width'),
            perc = Math.round((parseInt(length) / parseInt(progr)) * 100);
            id.text(perc + '%');
        }, 50);
    }

    profAnim();
    //hrefs

    $('.menu a').click(function () {
        $('.menu a').removeClass('active');
        $(this).addClass('active');
    });

    $('#profile').click(function (e) {
        e.preventDefault();

        $content.fadeOut(300, function () {

            $.ajax({
                url: "https://Trufinol.github.io/Projects/profile.html",
                success: function (html) {
                    $contwrap.html(html);
                    profAnim();

                }
            });
        });
    });

    $('#resume').click(function (e) {
        e.preventDefault();

        $content.fadeOut(300, function () {
            $.ajax({
                url: "https://Trufinol.github.io/Projects/resume.html",
                success: function (html) {
                    $contwrap.html(html);
                    $content.fadeIn(300);
                },
                complete: function () {
                    if (window.innerHeight < 800) {
                        $(document).bind('scroll', function (e) {
                            var scrollOffset = $(document).scrollTop();
                            var containerOffset = $('#skillbars').offset().top - window.innerHeight;
                            if (scrollOffset > containerOffset) {
                                barAnimate($('#bar-1'));
                                barAnimate($('#bar-2'));
                                barAnimate($('#bar-3'));
                                barAnimate($('#bar-4'));
                                $(document).unbind('scroll');
                            }
                        });
                    } else {
                        barAnimate($('#bar-1'));
                        barAnimate($('#bar-2'));
                        barAnimate($('#bar-3'));
                        barAnimate($('#bar-4'));
                    }

                    function educAnimate(id) {

                        TweenMax.fromTo(id, 0.5, { x: -800 }, { x: 0, ease: Sine.easeOut }, 0.3);

                    }
                    educAnimate($('.topic, h2'));
                }
            });
        });
    });

    $('#portfolio').click(function (e) {
        e.preventDefault();
        $content.fadeOut(300, function () {
            $.ajax({
                url: "https://Trufinol.github.io/Projects/portfolio.html",
                success: function (html) {
                    $contwrap.html(html);
                    $content.fadeIn(300);
                    TweenMax.staggerFrom($('ul.my-portf li'), 0.55, { scale: 0, opacity: 0, ease: Power4.easeInOut }, 0.15);
                }
            });
        });
    });
    $('#contacts').click(function (e) {
        e.preventDefault();
        $content.fadeOut(300, function () {
            $.ajax({
                url: "https://Trufinol.github.io/Projects/contacts.html",
                success: function (html) {
                    $contwrap.html(html);
                    $content.fadeIn(300);
                },
                complete: function() {
                    var myCenter = new google.maps.LatLng(50.400203, 30.378084);
                    var mapProp = {
                        center: new google.maps.LatLng(50.407531, 30.363708),
                        zoom: 13,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        disableDefaultUI: true
                    };
                    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
                    var marker=new google.maps.Marker({
                        icon:'images/marker.png',
                        position:new google.maps.LatLng(50.400047, 30.378187),
                        animation:google.maps.Animation.DROP
                    });
                    marker.setMap(map);
                                   
                                }

                            });
        });
    });
});

