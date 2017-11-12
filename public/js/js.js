var vouchers = ["ILOVEICP", "BONUS", "idonthaveanymoney"];

var totalPrice = 0;

var tcktsNumberOfAdults = 0;
var tcktsNumberOfKids = 0;
var lunchNumberOfAdults = 0;
var lunchNumberOfKids = 0;
var photosNumberOf = 0;
var giftNumberOfAdults = 0;
var giftNumberOfKids = 0;
var guideNumberOf = 0;

var startDate = false;
var endDate = false;

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


$(".js-btn-search-attractions-section").click(function () {
    document.getElementById("attractions-search-h2").style.display = "none";
    var button = document.getElementById("attractions-search-btn-attractions");
    button.style.background = "#06D8FF";
    button.style.margin = "5px 0 0 0";
    button.style.height = '120px';
    button.style.borderRadius = '7px 7px 0 0';
    document.getElementById("attractions-filtering-div").style.display = "inline";
    document.getElementById("attractions-filtering-attractions-list").style.display = "inline";
});

$(".js-attractions-filter-button").click(function () {
    var x, i, j, k, counter = 0;
    var filters = [];
    var checkboxes = document.getElementsByClassName("filtering-checkbox");
    x = document.getElementsByClassName("filterDiv");
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            filters.push(checkboxes[i].className.split(' ')[1]);
        }
    }
    for (i = 0; i < x.length; i++) {
        for (k = 0; k < filters.length; k++) {
            if (x[i].classList.contains(filters[k])) counter++;
        }
        if (counter == 0) x[i].style.display = "none";
        else x[i].style.display = "inline";
        counter = 0;

    }
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

// galeria
$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });
});

// tickets
$(".js-btn-adults-plus-tickets").click(function () {
    tcktsNumberOfAdults++;
    $(".js-adults-number-tickets").val(tcktsNumberOfAdults);
    updateTotalPrice();
});

$(".js-btn-adults-minus-tickets").click(function () {
    tcktsNumberOfAdults--;
    if (tcktsNumberOfAdults < 0) {
        tcktsNumberOfAdults = 0;
    }
    $(".js-adults-number-tickets").val(tcktsNumberOfAdults);
    updateTotalPrice();
});

$(".js-btn-kids-plus-tickets").click(function () {
    tcktsNumberOfKids++;
    $(".js-kids-number-tickets").val(tcktsNumberOfKids);
    updateTotalPrice();
});

$(".js-btn-kids-minus-tickets").click(function () {
    tcktsNumberOfKids--;
    if (tcktsNumberOfKids < 0) {
        tcktsNumberOfKids = 0;
    }
    $(".js-kids-number-tickets").val(tcktsNumberOfKids);
    updateTotalPrice();
});

$(".js-btn-adults-plus-lunch").click(function () {
    lunchNumberOfAdults++;
    $(".js-adults-number-lunch").val(lunchNumberOfAdults);
    updateTotalPrice();
});

$(".js-btn-adults-minus-lunch").click(function () {
    lunchNumberOfAdults--;
    if (lunchNumberOfAdults < 0) {
        lunchNumberOfAdults = 0;
    }
    $(".js-adults-number-lunch").val(lunchNumberOfAdults);
    updateTotalPrice();
});

$(".js-btn-kids-plus-lunch").click(function () {
    lunchNumberOfKids++;
    $(".js-kids-number-lunch").val(lunchNumberOfKids);
    updateTotalPrice();
});

$(".js-btn-kids-minus-lunch").click(function () {
    lunchNumberOfKids--;
    if (lunchNumberOfKids < 0) {
        lunchNumberOfKids = 0;
    }
    $(".js-kids-number-lunch").val(lunchNumberOfKids);
    updateTotalPrice();
});

$(".js-btn-plus-photos").click(function () {
    photosNumberOf++;
    $(".js-number-photos").val(photosNumberOf);
    updateTotalPrice();
});

$(".js-btn-minus-photos").click(function () {
    photosNumberOf--;
    if (photosNumberOf < 0) {
        photosNumberOf = 0;
    }
    $(".js-number-photos").val(photosNumberOf);
    updateTotalPrice();
});

$(".js-btn-adults-plus-gift").click(function () {
    giftNumberOfAdults++;
    $(".js-adults-number-gift").val(giftNumberOfAdults);
    updateTotalPrice();
});

$(".js-btn-adults-minus-gift").click(function () {
    giftNumberOfAdults--;
    if (giftNumberOfAdults < 0) {
        giftNumberOfAdults = 0;
    }
    $(".js-adults-number-gift").val(giftNumberOfAdults);
    updateTotalPrice();
});

$(".js-btn-kids-plus-gift").click(function () {
    giftNumberOfKids++;
    $(".js-kids-number-gift").val(giftNumberOfKids);
    updateTotalPrice();
});

$(".js-btn-kids-minus-gift").click(function () {
    giftNumberOfKids--;
    if (giftNumberOfKids < 0) {
        giftNumberOfKids = 0;
    }
    $(".js-kids-number-gift").val(giftNumberOfKids);
    updateTotalPrice();
});

$(".js-btn-plus-guide").click(function () {
    guideNumberOf++;
    $(".js-number-guide").val(guideNumberOf);
    updateTotalPrice();
});

$(".js-btn-minus-guide").click(function () {
    guideNumberOf--;
    if (guideNumberOf < 0) {
        guideNumberOf = 0;
    }
    $(".js-number-guide").val(guideNumberOf);
    updateTotalPrice();
});

$(".voucher-apply").click(function () {
    if (vouchers.indexOf($(".voucher-input").val()) > -1) {
        $(".total-tickets-price").html("Price: " + (updateTotalPrice() / 2) + "€");
        showPopup("Voucher applied", "Congratulations! You activated 50% voucher.", "Accept");
    }
});

function updateTotalPrice() {
    var priceTotal = 0;
    priceTotal += tcktsNumberOfAdults * 9;
    priceTotal += tcktsNumberOfKids * 4.5;
    priceTotal += lunchNumberOfAdults * 4;
    priceTotal += lunchNumberOfKids * 3;
    priceTotal += photosNumberOf * 5;
    priceTotal += giftNumberOfAdults * 5;
    priceTotal += giftNumberOfKids * 10;
    priceTotal += guideNumberOf * 30;

    $(".total-tickets-price").html("Price: " + priceTotal + "€");
    return priceTotal;
}

$(".proceed-button").click(function () {
    showPopup("Platba", "Toto tlačidlo by Vás prenieslo na stránku platobnej brány.", "Rozumiem");
});

$(".tickets-start-date").change(function () {
    startDate = true;
    if (endDate == true) {
        $(".date-available").html("This date is available.");
    }
});

$(".tickets-end-date").change(function () {
    endDate = true;
    if (startDate == true) {
        $(".date-available").html("This date is available.");
    }
});