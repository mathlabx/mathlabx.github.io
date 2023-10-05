// Wait for the page to load
window.addEventListener('load', function () {
    // Add 'loaded' class to the body element
    window_load(true);
});

function window_load(lodaed) {
    if (loaded) {
        setTimeout(() => {
            document.body.classList.add('loaded');
            document.body.style.overflow = 'auto';
        }, 1500);
    } else {
        setTimeout(() => {
            document.body.classList.remove('loaded');
            document.body.style.overflow = '';
        }, 1500);
    }
}