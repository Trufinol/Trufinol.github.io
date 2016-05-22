$(document).ready(function () {

    var $contwrap = $(".cont-wrap");

    function profAnim() {
       $contwrap.fadeIn(400);
       TweenMax.fromTo($('h1,h2,.profile > p'),0.5,{x:200},{x:0, ease: Back.easeOut.config(1)});
       TweenMax.fromTo($('.step-light,.step-bold'),0.8,{x:-200},{x:0, ease: Back.easeOut.config(1)},0.3);
       TweenMax.staggerFrom($('.b-info'),0.5,{opacity:0, scale:0} ,0.05);
   };

   profAnim();

//hrefs
$('#profile').click(function (e) {
    e.preventDefault();
    $contwrap.fadeOut(300,function(){

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
    $contwrap.fadeOut(300,function(){
        $.ajax({
            url: "http://localhost:3000/resume.html",
            success: function (html) {

               $contwrap.html(html);
               $contwrap.fadeIn(300);

           }
       });
        $(document).ajaxComplete(function(){

            function barAnimate(id) {

                idVal = id.data('value');
                TweenMax.to(id,1,{width:idVal+'%',ease: Power1.easeIn});

                setInterval(function() {
                    var progr = $('.progress').css('width');
                    var length =  id.css('width'),
                    perc = Math.round((parseInt(length)/parseInt(progr))*100);
                    id.text(perc+'%');
                }, 50);
            }

            barAnimate($('#bar-1'));
            barAnimate($('#bar-2'));
            barAnimate($('#bar-3'));
            barAnimate($('#bar-4'));
        });
    });
});

$('#portfolio').click(function (e) {
    e.preventDefault();
    $.ajax({
        url: "http://localhost:3000/portfolio.html",
        success: function (html) {
            $contwrap.html(html);
            $('html, body')
        }
    });
});
$('#contacts').click(function (e) {
    e.preventDefault();
    $.ajax({
        url: "http://localhost:3000/contacts.html",
        success: function (html) {
            $contwrap.html(html);
            $('html, body')
        }
    });
});

});
