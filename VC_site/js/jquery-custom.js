$(function () {

    var $content = $(".content");
    var $contwrap = $('.cont-wrap');
    $contwrap.css('visibility', 'visible');
    function profAnim() {
        $content.fadeIn(400);
        TweenMax.fromTo($('h1,h2,.profile > p'), 0.8, { x: 200 }, { x: 0, ease: Back.easeOut.config(1) });
        TweenMax.fromTo($('.step-light,.step-bold'), 0.8, { x: -200 }, { x: 0, ease: Back.easeOut.config(1) }, 0.3);
        TweenMax.staggerFrom($('.b-info'), 0.6, { opacity: 0, scale: 0 }, 0.08);
    };

    profAnim();

    //hrefs
    $('#profile').click(function (e) {
        e.preventDefault();

        $content.fadeOut(300, function () {

            $.ajax({
                url: "http://localhost:3000/profile.html",
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
                url: "http://localhost:3000/resume.html",
                success: function (html) {
                    $contwrap.html(html);
                    $content.fadeIn(300);

                }
            });
            $(document).ajaxComplete(function () {

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
            });
        });
    });

    $('#portfolio').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "http://localhost:3000/portfolio.html",
            success: function (html) {
                $contwrap.html(html);

            }
        });
    });
    $('#contacts').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "http://localhost:3000/contacts.html",
            success: function (html) {
                $contwrap.html(html);

            }
        });
    });

});
