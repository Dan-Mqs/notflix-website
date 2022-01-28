$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        },
        1600:{
            items:7
        },
    }
})