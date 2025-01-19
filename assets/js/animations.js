AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true,
    mirror: false
});
        $('#carouselExampleCaptions').on('slid.bs.carousel', function () {
            AOS.refresh(); // Re-refresh AOS to apply animations after slide change
        });

AOS.init({
            duration: 900, // Animation duration in milliseconds
            once: true, // Only animate once when it scrolls into view
        });
