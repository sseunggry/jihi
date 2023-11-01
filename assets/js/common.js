/* common */
$(function(){
    // accordionFn();
});

function accordionFn(){
    $('.questions .quest-btn').on('click', function() {

        $('.questions .quest-btn').removeClass('active');
        $('.questions .txt-box').hide();

        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings('.txt-box').stop().show();
        } else {
            $(this).removeClass('active');
            $(this).siblings('.txt-box').stop().hide();
        }
    });
}