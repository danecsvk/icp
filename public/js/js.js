var totalPrice = 0;

function showPopup(nadpis, text, textTlacidla) {
    $(".popup > .popup-nadpis").html(nadpis);
    $(".popup > .popup-text").html(text);
    $(".popup > .popup-ok").html(textTlacidla);
    $(".popup").css("visibility", "visible");
}

$(".js-btn-adults-plus").click(function () {
    var numberOfAdults = $(".js-adults-number").val();
    numberOfAdults++;
    totalPrice += 9;
    $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    $(".js-adults-number").val(numberOfAdults);
});

$(".js-btn-adults-minus").click(function () {
    var numberOfAdults = $(".js-adults-number").val();
    if (numberOfAdults > 0) {
        numberOfAdults--;
        totalPrice -= 9;
        $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    }
    $(".js-adults-number").val(numberOfAdults);
});

$(".js-btn-kids-plus").click(function () {
    var numberOfAdults = $(".js-kids-number").val();
    numberOfAdults++;
    totalPrice += 4.5;
    $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    $(".js-kids-number").val(numberOfAdults);
});

$(".js-btn-kids-minus").click(function () {
    var numberOfAdults = $(".js-kids-number").val();
    if (numberOfAdults > 0) {
        numberOfAdults--;
        totalPrice -= 4.5;
        $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    }
    $(".js-kids-number").val(numberOfAdults);
});


//popup click na tlačitko
$(".popup-ok").click(function () {
    $(".popup").css("visibility", "hidden");
});

// popup click mimo
$(document).mouseup(function (e) {
    var container = $(".popup");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".popup").css("visibility", "hidden");
    }
});

// zmena jazyka
$(".lang-switch").click(function () {
    showPopup("Zmena jazyka", "Toto tlačidlo by vo finálnej verzii preplo na inú jazykovú mutáciu stránky.", "Rozumiem");
})