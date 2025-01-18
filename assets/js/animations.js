AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true,
    mirror: false
});
        $('#carouselExampleCaptions').on('slid.bs.carousel', function () {
            AOS.refresh(); // Re-refresh AOS to apply animations after slide change
        });
