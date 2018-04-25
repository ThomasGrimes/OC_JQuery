$(function () {

    // ############### Bouton Reset ##################

    $('#raz').on('click', function () {
        location.reload();
    });

    // ############### Couleur fond ##################

    $('#couleur-fond').on('change', function () {
        $('#contenu').css('background-color', $(this).val());
    });


    // ############### Style <p> ##################

    $('#texte').on('change', function () {

        switch ($(this).val()) {
            case "Normal":
                $('p').css('font-weight', 'normal').css('text-decoration', 'none').css('font-style', 'normal');
                break;
            case "Gras":
                $('p').css('font-weight', 'bold').css('text-decoration', 'none').css('font-style', 'normal');
                break;
            case "Italique":
                $('p').css('font-style', 'italic').css('font-weight', 'normal').css('text-decoration', 'none');
                break;
            case "Souligne":
                $('p').css('text-decoration', 'underline').css('font-style', 'normal').css('font-weight', 'normal');
                break;
        };

    });

    // ############### Font style ##################

    $('#police').on('change', function () {

        $('p').css('font-family', $(this).val());

    });

    // ############### Font style Première phrase ##################

    $('#police-prem-phrase').on('change', function () {
        $('#contenu :first-child').css('font-family', $(this).val());
    });

    // ################### Premier caractère style ###########################


    $('#prem-car-phrases').on('change', function () {
        if ($(this).val() === "Gras") {
            $('p').each(function () {
                var letters = [];
                var ind = $(this).text();
                var change;
                for (var i = 0, c = ind.length; i <= c - 1; i++) {
                    letters.push(ind[i]);
                }
                $.map(letters, function (el, index) {
                    if (el === ".") {
                        change = letters[index + 2];
                        if (change !== undefined) {
                            letters[index + 2] = ("<b>" + change + "</b>");
                        }
                    } else if (index === 0) {
                        change = letters[0];
                        letters[0] = "<b>" + change + "</b>";
                    }
                });
                $(this).replaceWith("<p>" + letters.join('') + "</p>");
            });

        } else if ($(this).val() === "Normal") {
            $('p').each(function () {
                var letters = [];
                var ind = $(this).text();
                var change;
                for (var i = 0, c = ind.length; i <= c - 1; i++) {
                    letters.push(ind[i]);
                }
                $.map(letters, function (el, index) {
                    if (el === ".") {
                        change = letters[index + 2];
                        if (change !== undefined) {
                            letters[index + 2] = (change);
                        }
                    } else if (index === 0) {
                        change = letters[0];
                        letters[0] = change;
                    }
                });
                $(this).replaceWith("<p>" + letters.join('') + "</p>");
            });
        }

    });

    // ################### Mot en rouge ###########################

    $('#couleurMot').on('click', function () {
        var valShearch = $('#mot').val();
        var mots = [];
        var staged = $('p')[0];
        var para = $(staged).text();
        var composition = "";

        for (var i = 0, j = para.length; i <= j - 1; i++) {
            if (para[i] === " ") {
                mots.push(composition);
                composition = "";
            } else {
                composition += para[i];
            }
        }
        var surRouge = mots[valShearch - 1];
        mots[valShearch - 1] = "<span>" + surRouge + "</span>";


        $('#contenu :first').replaceWith("<p>" + mots.join(' ') + "</p>");
        $('span').css('background', 'red');

    });
    
    // ################### Mot en rouge ###########################
    
    $('#bordure-images').on('change', function(){
        if($(this).val() === "Simple"){
            $('#image').css('border-style', 'solid');
        }
        else if ($(this).val() === "Double"){
            $('#image').css('border-style', 'double');
        }
        else if($(this).val() === "Rien"){
            $('#image').css('border-style', 'none');
        }
    });


});
