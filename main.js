
$(document).ready(function() {
    $('.slider-wrapper').each(function() {
        const wrapper = $(this);
        const slider = wrapper.find('.splide-slider');
        const prevBtn = wrapper.find('.slider-prev')[0];
        const nextBtn = wrapper.find('.slider-next')[0]; 

        const options = {
            type: 'loop',
            autoplay: true,
        };

        let extraOptions = {};

        if (slider.hasClass('image-slider')) {
            extraOptions = {
                focus: 2,
                interval: 4000,
                pagination: false,
                arrows: false,
                perPage: 5,
                grid       : {
                    dimensions: [ [ 2, 1 ], [ 2, 1 ], [ 1, 1 ], [ 2, 1 ], [ 1, 1], [ 1, 1 ] ],
                },
                breakpoints: {
                    576: {
                      perPage: 1,
                      grid   : {
                        dimensions: [ [ 1]],
                      },
                    },
                  },
            };
        } else if (slider.hasClass('image-slider-mobile')){
            extraOptions = {
                perPage: 2.3,
                gap: '20px',
                pagination: false,
                arrows: false,
                breakpoints: {
                    768: {
                      perPage: 1,
                    },
                  },
            };
        }
        const finalOptions = {...options, ...extraOptions };
        const splide = new Splide(slider[0], finalOptions);

        if (prevBtn) prevBtn.addEventListener('click', () => splide.go('-1'));
        if (nextBtn) nextBtn.addEventListener('click', () => splide.go('+1'));

        splide.mount(window.splide.Extensions);
    });
    AOS.init({
        duration: 800,
    });
});