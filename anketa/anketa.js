/**
 * Created by megadozz on 18.08.13.
 */
var SLIDE_TIME=100;

$(document).ready(function(){

    $("#about_phone").inputmask("+7(999)999-99-99");

    $('.cutter').click(function(){
        var cut_block = $(this);
        var cut = cut_block.siblings('.cut');

        if (cut_block.parent('.cut_block').hasClass('cutted')) {
            cut.slideDown(SLIDE_TIME);
            cut.find('.answer_text').focus();
        } else {
            cut.slideUp(SLIDE_TIME);
        }

        setTimeout(function(){
            cut_block.parent('.cut_block').toggleClass('cutted');
        },SLIDE_TIME + 5);
    });

    $('.cutter').click();
});

function checkForm(form){
//    for
}

function isValid(input, type) {
    input = $(input);
    var val = input.val();

    if ((val=="") || (1)) return false;

    switch (type) {
        case "phone":

        break;

        case "email":

        break;

        case "text":

        break;
    }
}