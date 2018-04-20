$(function () {

    // ############ Déclaration Variables ############

    var val;
    // ###############################################    

    // ############ Déclaration function ############

    var masquer = function (el) {
        $(el).hide();
    }

    var visible = function (el) {
        $(el).show();
    }

    // ############################################### 

    // ############ Zone de test ############



    // ############################################### 

    masquer('#infoLabel');
    masquer('#infoId');
    masquer('#infoButton');
    masquer('#ok');

    $('button[id="label"]').click(function () {
        visible('#infoLabel');
        visible('#ok');
        masquer('#infoId');
        masquer('#infoButton');
    });

    $('button[id="zoneTxt"]').click(function () {
        visible('#infoId');
        visible('#ok');
        masquer('#infoLabel');
        masquer('#infoButton');
    });

    $('button[id="bouton"]').click(function () {
        visible('#infoButton');
        visible('#ok');
        masquer('#infoLabel');
        masquer('#infoId');
    });

    $('#ok').click(function () {

            if ($('#inputInfoLabel').val() !== "") {
                val = $('#inputInfoLabel').val();
                $('#gauche').append ('<span>'+val+'</span>');
                $('#gauche > span').css('margin', '15px');
                $('#inputInfoLabel').val("");
                masquer('#infoLabel');
                masquer('#ok');
            }
            
            else if ($('#inputInfoId').val() !== "") {
                val = $('#inputInfoId').val();
                $('#gauche').append('<input id="'+val+'" type="text" /><br/>');
                $('#'+val).css('margin', '15px');
                $('#inputInfoId').val("");
                masquer('#infoId');
                masquer('#ok');
            }
            
            else if ($('#inputInfoButton').val() !== "") {
                val = $('#inputInfoButton').val();
                $('#gauche').append('<button>'+val+'</button>');
                $('#gauche > button').css('margin', '15px');
                $('#inputInfoButton').val("");
                masquer('#infoButton');
                masquer('#ok');
            }
        
    });



});
