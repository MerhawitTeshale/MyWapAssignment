$(function () {

    $('.guess-box').hover(
        function () {
            $(this).addClass('my_hover');
        },
        function (){
            $(this).removeClass('my_hover');
        });
        $('.guess-box').click('checkForCode');

    function getRandom(num) {
        var my_num = Math.floor(Math.random() * 4);
        return my_num;


    }

    var hidecode = function () {
        var num = getRandom(4);
        $('.guess-box').each(function (index, value) {
            if (num == index) {
                $(this).append("<span id='has_disc'></span>");
                return false;// break out of the loop
            }
        })
    }

    hidecode();
    function checkForCode() {
        var discount;
        if ($.contains(this, document.getElementById("has_discount"))) {
            var my_num = getRandom(100);
            discount = "<p>Your Code: CODE" + my_num + "</p>";
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }
        $(".guess_box").each(function () {
            if ($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass("discount");
            } else {
                $(this).addClass("no_discount");
            }
            $(this).unbind();
        });
        $("#result").append(discount);
    }
});
