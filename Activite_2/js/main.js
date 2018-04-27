$(function () {

    // ############ Déclaration Variables ############

    var val;
    // ###############################################    

    // ############ Déclaration function ############

    var masquer = function (el) {
        $(el).hide();
    }

    var visible = function (el) {
        $(el).fadeIn();
    }

    var disparition = function (el) {
        $(el).fadeOut();
    }

    var disable = function (el) {

        $(el).attr('disable', true).removeClass('ombrage').css('opacity', 0.5);
    }

    var active = function (el) {

        $(el).removeAttr('disable').addClass('ombrage').css('opacity', 1);
    }


    // ############################################### 



    $('button[id="label"]').click(function () {

        if ($(this).attr('disable') === 'true') {} else {
            visible('#infoLabel');
            visible('#ok');
            visible('#annuler');
            disable('#label');
            disable('#zoneTxt');
            disable('#bouton');
        }

    });

    $('button[id="zoneTxt"]').click(function () {

        if ($(this).attr('disable') === 'true') {} else {
            visible('#infoId');
            visible('#ok');
            visible('#annuler');
            disable('#label');
            disable('#zoneTxt');
            disable('#bouton');
        }

    });

    $('button[id="bouton"]').click(function () {

        if ($(this).attr('disable') === 'true') {} else {
            visible('#infoButton');
            visible('#ok');
            visible('#annuler');
            disable('#label');
            disable('#zoneTxt');
            disable('#bouton');
        }

    });

    $('#ok').click(function () {

        if ($('#inputInfoLabel').val() !== "") {

            val = $('#inputInfoLabel').val();
            $('#gauche').append('<span>' + val + '</span>');
            $('#gauche > span').css('margin', '15px');
            $('#inputInfoLabel').val("");
            disparition('#infoLabel');
            disparition('#ok');
            disparition('#annuler');
            active('#label');
            active('#zoneTxt');
            active('#bouton');

        } else if ($('#inputInfoId').val() !== "") {

            val = $('#inputInfoId').val();
            $('#gauche').append('<input id="' + val + '" type="text" /><br/>');
            $('#' + val).css('margin', '15px');
            $('#inputInfoId').val("");
            disparition('#infoId');
            disparition('#ok');
            disparition('#annuler');
            active('#label');
            active('#zoneTxt');
            active('#bouton');


        } else if ($('#inputInfoButton').val() !== "") {

            val = $('#inputInfoButton').val();
            $('#gauche').append('<button>' + val + '</button>');
            $('#gauche > button').css('margin', '15px');
            $('#inputInfoButton').val("");
            disparition('#infoButton');
            disparition('#ok');
            disparition('#annuler');
            active('#label');
            active('#zoneTxt');
            active('#bouton');

        }

    });

    $('#annuler').on('click', function () {

        if ($('#infoLabel').css('display') === "block") {

            $('#inputInfoLabel').val("");
            disparition('#infoLabel');
            disparition('#ok');
            disparition('#annuler');

        } else if ($('#infoId').css('display') === "block") {

            $('#inputInfoId').val("");
            disparition('#infoId');
            disparition('#ok');
            disparition('#annuler');

        } else if ($('#infoButton').css('display') === "block") {

            $('#inputInfoButton').val("");
            disparition('#infoButton');
            disparition('#ok');
            disparition('#annuler');
        }

        active('#label');
        active('#zoneTxt');
        active('#bouton');

    });



});
