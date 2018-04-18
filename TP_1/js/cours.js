$(function () {

    $('div.question').css('background', 'AquaMarine').css('border', '3px solid black').css('margin-bottom', '10px').width('60%').height('200');

    $('.reponse').hide();

    $('img').each(function () {

        if (this.id === 'img1') {
            var icone = $(this).offset();
            icone.left = 600;
            icone.top = 100;
            $(this).offset(icone);
        } else if (this.id === 'img2') {
            var icone = $(this).offset();
            icone.left = 600;
            icone.top = 320;
            $(this).offset(icone);
        } else if (this.id === 'img3') {
            var icone = $(this).offset();
            icone.left = 600;
            icone.top = 530;
            $(this).offset(icone);
        }
    });
    
    


});
