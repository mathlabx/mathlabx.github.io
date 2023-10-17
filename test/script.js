// Add your custom JavaScript for the exam here

// Example Fullscreen API implementation
document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
        // User attempted to exit fullscreen, trigger appropriate action
        console.log("已退出全屏！");
        alert("Exiting full-screen will end the exam.");
        // Add your code to handle exam ending here
    }
});
