// Wait for the page to load
window.addEventListener('load', function () {
    // Add 'loaded' class to the body element
    window_load(true,1500);
});

function window_load(loaded, time) {
    if (loaded) {
        setTimeout(() => {
            document.body.classList.add('loaded');
            document.body.style.overflow = 'auto';
        }, time);
    } else {
        document.body.classList.remove('loaded');
        document.body.style.overflow = '';
    }
}