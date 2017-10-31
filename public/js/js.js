var totalPrice = 0;

$(".js-btn-adults-plus").click(function() {
    var numberOfAdults = $(".js-adults-number").val();
    numberOfAdults++;
    totalPrice += 9;
    $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    $(".js-adults-number").val(numberOfAdults);
});

$(".js-btn-adults-minus").click(function() {
    var numberOfAdults = $(".js-adults-number").val();
    if (numberOfAdults > 0) {
        numberOfAdults--;
        totalPrice -= 9;
        $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    }
    $(".js-adults-number").val(numberOfAdults);
});

$(".js-btn-kids-plus").click(function() {
    var numberOfAdults = $(".js-kids-number").val();
    numberOfAdults++;
    totalPrice += 4.5;
    $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    $(".js-kids-number").val(numberOfAdults);
});

$(".js-btn-kids-minus").click(function() {
    var numberOfAdults = $(".js-kids-number").val();
    if (numberOfAdults > 0) {
        numberOfAdults--;
        totalPrice -= 4.5;
        $(".js-price-quick-buy").html("Price: " + totalPrice + "€");
    }
    $(".js-kids-number").val(numberOfAdults);
});