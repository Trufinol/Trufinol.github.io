$(document).ready(function () {

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
//hrefs
$('#profile').click(function () {
    $.ajax({
        url: "http://localhost:3000/profile.html",
        success: function (html) {
            $(".cont-wrap").html(html);
        }
    });
});
$('#resume').click(function () {
    $.ajax({
        url: "http://localhost:3000/resume.html",
        success: function (html) {
            $(".cont-wrap").html(html);
            $('html, body').animate({
            scrollTop: 0
        }, 500);
        }
    });
});
$('#portfolio').click(function () {
    $.ajax({
        url: "http://localhost:3000/portfolio.html",
        success: function (html) {
            $(".cont-wrap").html(html);
            $('html, body').animate({
            scrollTop: 0
        }, 500);
        }
    });
});
$('#contacts').click(function () {
    $.ajax({
        url: "http://localhost:3000/contacts.html",
        success: function (html) {
            $(".cont-wrap").html(html);
            $('html, body').animate({
            scrollTop: 0
        }, 500);
        }
    });
});

//bars

// var bar1 = $('#bar-1').data('value');
// TweenMax.to($('#bar-1'),1,{width:bar1+'%',ease: Circ.easeIn});
// function perc() {
//     var progr = $('.progress').css('width');
//     var length =  $('#bar-1').css('width'),
//     perc = Math.round((parseInt(length)/parseInt(progr))*100);
//     $('#bar-1').text(perc+'%');
// }
// perc();
// setInterval(perc, 50);
// });


});
