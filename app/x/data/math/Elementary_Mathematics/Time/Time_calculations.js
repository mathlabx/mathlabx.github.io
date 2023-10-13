/*
计算钟表以及日历

生成英文题干，比如7:46AM to 4:56PM 多长时间
文字版：生成英文题干，比如7:46AM去打球...4:56PM 多长时间。 丰富一点，随机生成场景
生成英文题干，日历就是一些类似问题。

输入：(精确到秒-布尔值)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Time.Calculations_clocks = function (includeSeconds) {
    const startTime = getRandomTime(includeSeconds);
    const endTime = getRandomTime(includeSeconds);
    const question = `From ${formatTime(startTime)} to ${formatTime(endTime)}, how much time has passed?`;
    const answer = calculateTimeDifference(startTime, endTime);
    return [question, answer];
}

$X.math.Elementary_Mathematics.Time.Calculations_clocks_w = function (includeSeconds) {
    const activity = getRandomActivity();
    const startTime = getRandomTime(includeSeconds);
    const endTime = getRandomTime(includeSeconds);
    const question = `If you started ${activity} at ${formatTime(startTime)} and finished at ${formatTime(endTime)}, how much time did you spend on ${activity}?`;
    const answer = calculateTimeDifference(startTime, endTime);
    return [question, answer];
}

$X.math.Elementary_Mathematics.Time.Calculations_calendars = function () {
    const randomScenario = getRandomCalendarScenario();
    const startDate = getRandomDate();
    const endDate = calculateEndDate(startDate, 7);
    const question = `If today is ${formatDate(startDate)}, what will be the date ${randomScenario}?`;
    const answer = formatDate(endDate);
    return [question, answer];
}

$X.math.Elementary_Mathematics.Time.Calculations_calendars_w = function () {
    const task = getRandomTask();
    const startDate = getRandomDate();
    const endDate = calculateEndDate(startDate, 7);
    const question = `If today is ${formatDate(startDate)}, what will be the date when you need to ${task}?`;
    const answer = formatDate(endDate);
    return [question, answer];
}


function getRandomActivity() {
    const activities = ["playing sports", "going for a run", "studying", "working"];
    return activities[Math.floor(Math.random() * activities.length)];
}


function getRandomCalendarScenario() {
    const scenarios = ["in one week", "in two weeks", "in a month"];
    return scenarios[Math.floor(Math.random() * scenarios.length)];
}

let gl_includeSeconds;
function getRandomTime(includeSeconds) {
    gl_includeSeconds = includeSeconds;
    const hours = Math.floor(Math.random() * 12);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = includeSeconds ? Math.floor(Math.random() * 60) : 0;
    const amOrPm = hours < 6 ? "AM" : "PM";

    return {
        hours,
        minutes,
        seconds,
        amOrPm
    };
}


function formatTime(time) {
    return `${time.hours}:${String(time.minutes).padStart(2, '0')}${gl_includeSeconds ? `:${String(time.seconds).padStart(2, '0')}` : ''} ${time.amOrPm}`;
}

function calculateTimeDifference(startTime, endTime) {
    const startMinutes = startTime.hours * 60 + startTime.minutes + startTime.seconds / 60;
    const endMinutes = endTime.hours * 60 + endTime.minutes + endTime.seconds / 60;
    const timeDifference = endMinutes - startMinutes;

    const hours = Math.floor(timeDifference / 60);
    const minutes = Math.round(timeDifference % 60);

    return `${hours} hours and ${minutes} minutes`;
}

function getRandomDate() {
    const today = new Date();
    const randomOffset = Math.floor(Math.random() * 365); // Random offset in days
    const randomDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + randomOffset);
    return randomDate;
}

function calculateEndDate(startDate, daysToAdd) {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + daysToAdd);
    return endDate;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}