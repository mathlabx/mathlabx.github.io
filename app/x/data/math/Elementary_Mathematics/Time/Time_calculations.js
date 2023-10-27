/*
Clock and Calendar Calculations

Description:
This function generates clock and calendar calculation problems in English. For clock calculations, it generates a question that asks for the duration between two random times. If the parameter includeSeconds is set to true, it includes the seconds in the time. For calendar calculations, it generates questions that involve adding days to a given date.

Inputs:
- includeSeconds (boolean): A boolean value indicating whether to include the second hand in the clock reading problem.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const clockResult = Calculations_clocks(true);
console.log(clockResult); // Output: ['From 7:46AM to 4:56PM, how much time has passed?', '9 hours and 10 minutes'] // The duration between the two times is 9 hours and 10 minutes.

const calendarResult = Calculations_calendars();
console.log(calendarResult); // Output: ['If today is 2023-10-26, what will be the date in one week?', '2023-11-2'] // The date one week from 2023-10-26 is 2023-11-2.

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

function getRandomTask() {
    const tasks = ["complete a project", "attend a meeting", "finish a report", "submit an assignment"];
    return tasks[Math.floor(Math.random() * tasks.length)];
}
