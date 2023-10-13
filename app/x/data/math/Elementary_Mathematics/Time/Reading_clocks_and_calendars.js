/*
阅读钟表以及日历

生成英文题干，比如长时针指向2针指向3是几点几分，如果参数精确到秒是true则加一个秒针。
生成英文题干，日历就是一些类似问题。

输入：(精确到秒-布尔值)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Time.Reading_clocks = function (includeSeconds) {
    // Generate a random hour between 1 and 12
    const hour = Math.floor(Math.random() * 12) + 1;

    // Generate a random minute between 0 and 59
    const minute = Math.floor(Math.random() * 60);

    let question = '';
    let answer = '';

    if (includeSeconds) {
        // Generate a random second between 0 and 59
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
    // Generate a random date
    const year = Math.floor(Math.random() * 100) + 2000; // Assuming years between 2000 and 2099
    const month = Math.floor(Math.random() * 12) + 1; // Month between 1 and 12
    const day = Math.floor(Math.random() * 31) + 1; // Day between 1 and 31

    // Generate a question
    const question = `If today is ${year}-${month}-${day}, what is the date in a week?`;

    // Calculate the date in a week
    const dateInAWeek = new Date(year, month - 1, day + 7); // Subtract 1 from month because JavaScript months are 0-indexed

    const answer = `${dateInAWeek.getFullYear()}-${dateInAWeek.getMonth() + 1}-${dateInAWeek.getDate()}`;

    return [question, answer];
}
