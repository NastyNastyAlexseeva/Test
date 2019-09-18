$(function(){

    $('.button--burger-icon').on('click', function() {
        setTimeout ("$('.menu').show('drop');",60000)
        $(".menu").toggleClass("open").fadeIn('slow')
        $(this).toggleClass("button--burger-close")
        $(".burger").toggleClass("open")
    });

});