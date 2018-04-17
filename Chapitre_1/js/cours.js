$(function () {
    $('li.impair').fadeOut('slow', function () {
        $(this).fadeIn('slow');
    }).css('background','red').css('color','yellow');
    
});
