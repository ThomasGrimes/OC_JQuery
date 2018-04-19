$(function () {

    // ############ Déclaration Variables ############

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
    
    console.log();

    // ############################################### 

    masquer('#infoLabel');
    masquer('#infoId');
    masquer('#infoButton');
    masquer('#infoValid');

    $('button[id="label"]').click(function () {
        visible('#infoLabel');
        visible('#infoValid');
        masquer('#infoId');
        masquer('#infoButton');
    });

    $('button[id="zoneTxt"]').click(function () {
        visible('#infoId');
        visible('#infoValid');
        masquer('#infoLabel');
        masquer('#infoButton');
    });

    $('button[id="bouton"]').click(function () {
        visible('#infoButton');
        visible('#infoValid');
        masquer('#infoLabel');
        masquer('#infoId');
    });



});
