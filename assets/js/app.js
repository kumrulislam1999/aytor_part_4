$(function () {
    $(".bannar_sliding_box").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: true,
        appendArrows:$('.arrow_box'),
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
        appendDots: $(".dot_items"),
    })

    $('.arriavl_sliding_box').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    })


    $('.deals_offer_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: false,
        dots: true,
        
    })

    $('.latest_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: true,
        dots: true,
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    })


    $('.leadership_slide_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        arrows: true,
        dots: false,
        prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
        nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    })



    $('.aytor_instagram_sliding').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        arrows: false,
        dots: true,
    })
})