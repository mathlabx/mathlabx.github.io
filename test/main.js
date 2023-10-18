function receiveObject() {
    const jsonStr = sessionStorage.getItem('MPCTest'); // 获取存储在 sessionStorage 中的数据

    if (jsonStr) {
        const data = JSON.parse(jsonStr); // 将 JSON 字符串转换为对象
        sessionStorage.removeItem('MPCTest'); // 获取数据后清空 sessionStorage 中的数据
        console.log(data);
        return data;
    } else {
        window.location = "../404.html";
        return {}; // 如果没有有效的数据，返回空对象
    }
}

let GetData = receiveObject();

let Test = {
    Test_Taker: {
        UID: null,
        CID: null
    },
    Questions: [],
    Test_Time: null,
    Used_Time: null,
    Settings: {
        Timing: {
            Time_Limit: null,
            Show_remaining_time: null,
            Automatic_reminder_of_remaining_time: null,
        },
        Full_screen: {
            Force_full_screen: null
        },
        Anti_cheating: {
            End_test_on_exit_from_full_screen: null,
            End_test_when_switching_apps_tabs: null,
            Prevent_copy_paste: null,
            Typing_no_cheating_guarantee_agreement: null
        },
        Tools: {
            Enable_calculator_tool: null,
            Enable_Enable_periodic_table: null,
            Enable_eye_protection_mode: null
        },
        Questions: {
            Each_question_shows_right_or_wrong: null,
            Number_of_submissions_allowed_per_question: null,
            Intelligent_answer_correction: null
        },
        Set_Up: function () {

        }
    },
    Set_Up: function () {

    }
}

/*
0 Timing | Time Limit
1 Timing | Time Limit (min)
2 Timing | Show remaining time
3 Timing | Automatic reminder of remaining time
4 Full screen | Force full screen
5 Anti-cheating | End test on exit from full-screen
6 Anti-cheating | End exam when switching apps/tabs
7 Anti-cheating | Prevent copy-paste
8 Anti-cheating | Typing no cheating guarantee agreement
9 Tools | Enable calculator tool
10 Tools | Enable Enable periodic table
11 Tools | Enable eye protection mode
12 Questions | Each question shows right or wrong
13 Questions | Number of submissions allowed per question
14 Questions | Intelligent answer correction (recommended)
*/

window.addEventListener("load", function () {

});