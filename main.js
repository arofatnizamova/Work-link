
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
                focus: 1,
                interval: 4000,
                pagination: false,
                arrows: false,
                perPage: 3,
            };
        } 
        const finalOptions = {...options, ...extraOptions };
        const splide = new Splide(slider[0], finalOptions);

        if (prevBtn) prevBtn.addEventListener('click', () => splide.go('-1'));
        if (nextBtn) nextBtn.addEventListener('click', () => splide.go('+1'));

        splide.mount();
    });
    AOS.init({
        duration: 800,
    });
});