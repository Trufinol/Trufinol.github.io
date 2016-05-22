$(document).ready(function () {

    $('#btn1').click(function () {
        $.ajax({
            url: "http://localhost:3000/profile.html",
            cache: true,
            success: function (html) {
                $(".cont-wrap").html(html);
            }
        });
    });
    $('#btn2').click(function () {
        $.ajax({
            url: "http://localhost:3000/resume.html",
            cache: true,
            success: function (html) {
                $(".cont-wrap").html(html);
            }
        });
    });
    $('#btn3').click(function () {
        $.ajax({
            url: "http://localhost:3000/portfolio.html",
            cache: true,
            success: function (html) {
                $(".cont-wrap").html(html);
            }
        });
    });
    $('#btn4').click(function () {
        $.ajax({
            url: "http://localhost:3000/contacts.html",
            cache: true,
            success: function (html) {
                $(".cont-wrap").html(html);
            }
        });
    });
});
