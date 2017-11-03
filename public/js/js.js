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

<<<<<<< HEAD
$(".js-btn-search-attractions-section").click(function() {
    document.getElementById("attractions-search-h2").style.display = "none";   
    var button = document.getElementById("attractions-search-btn-attractions");
    button.style.background= "#06D8FF";
    button.style.margin= "5px 0 0 0";
    button.style.height = '120px';
    button.style.borderRadius = '7px 7px 0 0';
    document.getElementById("attractions-filtering-div").style.display = "inline";
    document.getElementById("attractions-filtering-attractions-list").style.display = "inline";
});

$(".js-attractions-filter-button").click(function() {
    var x, i, j, k, counter = 0;
    var filters = [];
    var checkboxes = document.getElementsByClassName("filtering-checkbox");
    x = document.getElementsByClassName("filterDiv");
    for (i = 0 ; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            filters.push(checkboxes[i].className.split(' ')[1]);
            } 
    }
    for (i = 0; i < x.length; i++){
            for(k = 0; k < filters.length; k++){
                if (x[i].classList.contains(filters[k])) counter++;
            }
            if (counter == 0) x[i].style.display = "none";
            else  x[i].style.display = "inline";
            counter = 0;
        
    }
});
=======

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
>>>>>>> 55ab73d282a4759057fad8b7a0641b6e5f254f23
