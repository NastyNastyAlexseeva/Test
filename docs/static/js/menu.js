$(function(){

    $('.burger__icon').on('click', function() {
        setTimeout ("$('.menu').show('drop');",60000)
        $(".menu").toggleClass("open").fadeIn('slow')
        $(this).toggleClass("burger__close")
        $(".burger").toggleClass("open")
    });

});