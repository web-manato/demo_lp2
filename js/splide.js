document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type: 'loop',
        perPage: 5,
        gap: '1rem',
        perMove: 1,
        autoplay: true,
        interval: 3000,
        arrows: false,
        pagination: false,

        breakpoints: {
            1080:{
                perPage: 3,
            }
        }
    });
    splide.mount();
} );