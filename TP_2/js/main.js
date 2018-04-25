$(function () {

    console.log($('#couleur-fond').val());

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


    });
});
