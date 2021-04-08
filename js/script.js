$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__menu, .header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});