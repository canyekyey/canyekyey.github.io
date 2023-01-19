    $(function () {
    $('.slider_inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })
    });

    $('.header_btn').click(function () {
        $(this).css('border' , '1px solid purple');
   

});
