// countdown.js

// get time
var startTimestamp = performance.now();

// timing function
function startCountdown(minutes) {
    var totalTimeInSeconds = minutes * 60;

    // time every sec.
    var interval = setInterval(function () {
        var currentTimestamp = performance.now();
        var elapsedTimeInSeconds = (currentTimestamp - startTimestamp) / 1000;
        var remainingTime = totalTimeInSeconds - elapsedTimeInSeconds;

        if (remainingTime <= 0) {
            clearInterval(interval);
            postMessage("00:00");
            postMessage("timeOver"); // send time is up
            postMessage(elapsedTimeInSeconds); // send time used
        } else {
            var minutes = Math.floor(remainingTime / 60);
            var seconds = Math.floor(remainingTime % 60);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            postMessage(minutes + ":" + seconds);
        }
    }, 1000);
}

// get data
onmessage = function (e) {
    var minutes = e.data;
    startCountdown(minutes);
};
