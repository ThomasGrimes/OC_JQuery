$(function () {

    // Définition variables

    var itemX; // Défintition abscisse item
    var i = 0; // Incrémentation avant aug de la difficultée
    var scpX; // Abscisse soucoupe
    var scpY; // Ordonnées soucoupe
    var badX; // Abscisse bad
    var badY; // Ordonnées bad
    var goodX; // Abscisse good
    var goodY; // Ordonnées good
    var ok = 1;

    // Définition function

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var choice = getRandomInt(11); // Init du random du choix d'item

    function itemAppear(item) {

        $(item).animate({
            top: '+=600',
        }, 2000, 'linear', function () {

            itemX = Math.floor(Math.random() * 540) + 10;
            $(item).css('left', itemX).css('top', -120);
            ok = 1;
            run();
        });
    };


    function run() {

        choice = getRandomInt(11);
        i++;

        if (i > 10) {
            if (choice <= 7) {
                itemAppear('#bon');
                itemAppear('#mauvais');
            } else {
                itemAppear('#mauvais');
                itemAppear('#bon');
            }

        } else {

            if (choice <= 7) {
                itemAppear('#bon');
            } else {
                itemAppear('#mauvais');
            }
        }
    }

    // Lancement du jeu

    run();

    // Contrôle de la soucoupe 

    $(document).on('keydown', function (e) {

        scpX = parseInt($('#scp').css('left'));
        scpY = parseInt($('#scp').css('top'));

        switch (e.which) {
            // droite
            case 102:
                if (scpX < 486) {
                    $('#scp').css('left', scpX + 15);
                }
                break;
                // gauche
            case 100:
                if (scpX > 18) {
                    $('#scp').css('left', scpX - 15);
                }
                break;
                // bas
            case 98:
                if (scpY < 330) {
                    $('#scp').css('top', scpY + 15);
                }
                break;
                // haut
            case 104:
                if (scpY > 10) {
                    $('#scp').css('top', scpY - 15);
                }
                break;
                // Diag haut gauche
            case 103:
                if (scpY > 10 && scpX > 18) {
                    $('#scp').css('top', scpY - 15).css('left', scpX - 15);
                }

                break;
                // Diag haut droite
            case 105:
                if (scpY > 10 && scpX < 486) {
                    $('#scp').css('top', scpY - 15).css('left', scpX + 15);
                }

                break;
                //Diag bas gauche
            case 97:
                if (scpY < 330 && scpX > 18) {
                    $('#scp').css('top', scpY + 15).css('left', scpX - 15);
                }

                break;
                // Diag bas droite
            case 99:
                if (scpY < 330 && scpX < 486) {
                    $('#scp').css('top', scpY + 15).css('left', scpX + 15);
                }

                break;
        }

    });

    // Collision

    function contact() {

        goodX = parseInt($('#bon').css('left'));
        badX = parseInt($('#mauvais').css('left'));
        scpX = parseInt($('#scp').css('left'));
        goodY = parseInt($('#bon').css('top'));
        badY = parseInt($('#mauvais').css('top'));
        scpY = parseInt($('#scp').css('top'));


        if (((goodX > scpX) && (goodX < (scpX + 125)) && ((goodY + 116) > scpY) && (goodY < (scpY + 177)) && (ok === 1)) || ((scpX > goodX) && (scpX < (goodX + 50)) && ((goodY + 116) > scpY) && (goodY < (scpY + 177)) && (ok === 1))) {

            var toucheBon = parseInt($('#infBon').text()) + 1;
            var score = parseInt($('#score').text()) + 5;
            $('#infBon').text(toucheBon);
            $('#score').text(score);
            $('#son')[0].play();
            ok = 0;
            
        } else if (((badX > scpX) && (badX < (scpX + 125)) && ((badY + 113) > scpY) && (badY < (scpY + 177)) && (ok === 1)) || ((scpX > badX) && (scpX < (badX + 56)) && ((badY + 113) > scpY) && (badY < (scpY + 177)) && (ok === 1))) {

            var toucheBad = parseInt($('#infBad').text()) + 1;
            var score = parseInt($('#score').text()) - 5;
            $('#infBad').text(toucheBad);
            $('#score').text(score);
            $('#son')[0].play();
            ok = 0;

        }
    }

    setInterval(contact, 20);
    // Fin de fonction du DOM
});
