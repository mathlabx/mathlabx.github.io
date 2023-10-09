window.addEventListener("load", function () {
    let new_ad_API = document.createElement("script");
    new_ad_API.async = true;
    new_ad_API.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3037105534785562";
    crossorigin = "anonymous";
    document.head.append(new_ad_API);
});

APP.Ads = {
    /*
    none
    few
    medium
    more
    */
    amount = "few"
}