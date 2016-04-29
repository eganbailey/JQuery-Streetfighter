$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
    })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
            $('.ryu-throwing').hide();
            $('.ryu-cool').hide();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').show();
            $('.ryu-cool').hide();
            $('.hadouken').finish().show()
                .animate({
                        'left': '1020px'
                    },
                    500,
                    function() {
                        $(this).hide();
                        $(this).css('left', '520px');
                    }
            );
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-cool').hide();
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
    if ($('.ryu:hover').length === 0) {
    $('body').keydown(function(e) {
        if (e.which == 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
            $('.hadouken').hide();
        }
    })

    $('body').keyup(function(e) {
        if (e.which == 88) {
            $('.ryu-still').show();
            $('.ryu-ready').hide();
            $('.ryu-cool').hide();
            $('.hadouken').hide();
        }
    });
}
    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
});