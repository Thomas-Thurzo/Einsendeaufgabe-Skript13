$(function () {

    // Aufgabe 1 Text Ein- und Ausgabe
    $("#submit").on("click", function () {
        $("#ausgabe").text($("#name").val());
    });

    // Aufgabe 2 Absätze ein- und ausblenden lassen
    $(".erklaerung").hide();
    $("h3").on("click", function(){
        $(this).next().toggle();
    });

});