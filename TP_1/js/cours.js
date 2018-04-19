$(function () {

    $('div.question').css('background', 'AquaMarine').css('border', '3px solid black').css('margin-bottom', '10px').css('padding', '10px').width('60%').height('220');
    
    $('.texte').css('float', 'left').width('80%');

    $('img').css('float', 'right').css('margin-top', '10%');

    $('.reponse').hide();

    // ####### Zone de test ######


    //############################

    // ############# Déclaration variables ##############
    var bon = "../img/bon.png";
    var mauvais = "../img/mauvais.png";
    var quest = "../img/question.png";

    // #################################################

    // ############ Déclaration Fonction ##########

    var repOk = function (rep, img) {
        $(rep).css('color', 'green');
        $(img).attr('src', bon);
    }

    var repBad = function (rep, img) {
        $(rep).css('color', 'red');
        $(img).attr('src', mauvais);

    }

    // ############################################


    $('a').hover(
        function () {
            // survolé

            $('.reponse').show();

            // Vérification Question 1
            if ($('#r1:checked').val() === "on") {
                repOk('#reponse1', '#img1');
            } else {
                repBad('#reponse1', '#img1');
            }

            // Vérification Question 2
            if ($('#r4:checked').val() === "on") {
                repOk('#reponse2', '#img2');
            } else {
                repBad('#reponse2', '#img2');
            }

            // Vérification Question 3
            if ($('#r8:checked').val() === "on") {
                repOk('#reponse3', '#img3');
            } else {
                repBad('#reponse3', '#img3');
            }

        },
        function () {
            // non survolé
            $('.reponse').hide();

            $('img').attr('src', quest);

        }
    );


});
