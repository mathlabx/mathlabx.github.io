/*
Clock Reading and Calendar Reading

Description:
This function generates clock reading problems and calendar reading problems. For clock reading, it generates a question in English, asking for the time indicated by the clock's hour and minute hands. If the parameter includeSeconds is set to true, it also includes the second hand. For calendar reading, it generates a question asking for the date one week from the given date.

Inputs:
- includeSeconds (boolean): A boolean value indicating whether to include the second hand in the clock reading problem.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const clockResult = Reading_clocks(true);
console.log(clockResult); // Output: ['If the hour hand is pointing to 2 and the minute hand is pointing to 30 and the second hand is pointing to 15, what time is it?', '2:30:15'] // The time is 2:30:15.

const calendarResult = Reading_calendars();
console.log(calendarResult); // Output: ['If today is 2023-10-26, what is the date in a week?', '2023-11-2'] // The date one week from 2023-10-26 is 2023-11-2.

*/

$X.math.Elementary_Mathematics.Time.Reading_clocks = function (includeSeconds) {
    const hour = Math.floor(Math.random() * 12) + 1;
    const minute = Math.floor(Math.random() * 60);
    let question = '';
    let answer = '';

    if (includeSeconds) {
        const second = Math.floor(Math.random() * 60);
        question = `If the hour hand is pointing to ${hour} and the minute hand is pointing to ${minute} and the second hand is pointing to ${second}, what time is it?`;
        answer = `${hour}:${minute}:${second}`;
    } else {
        question = `If the hour hand is pointing to ${hour} and the minute hand is pointing to ${minute}, what time is it?`;
        answer = `${hour}:${minute}`;
    }

    return [question, answer];
}

$X.math.Elementary_Mathematics.Time.Reading_calendars = function () {
    const year = Math.floor(Math.random() * 100) + 2000;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 31) + 1;
    const question = `If today is ${year}-${month}-${day}, what is the date in a week?`;
    const dateInAWeek = new Date(year, month - 1, day + 7);
    const answer = `${dateInAWeek.getFullYear()}-${dateInAWeek.getMonth() + 1}-${dateInAWeek.getDate()}`;

    return [question, answer];
}
