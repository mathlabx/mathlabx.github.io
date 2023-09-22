// Wait for the page to load
window.addEventListener('load', function () {
    // Add 'loaded' class to the body element
    setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.style.overflow = 'auto';
    }, 1500);
});