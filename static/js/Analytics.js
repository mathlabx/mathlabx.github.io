//Google tag (gtag.js)
let New_Analytics = document.createElement("script");
New_Analytics.async = true;
New_Analytics.src = "https://www.googletagmanager.com/gtag/js?id=G-J8HMB7NHEE";
document.head.append(New_Analytics);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-J8HMB7NHEE');