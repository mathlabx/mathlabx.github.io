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
    Test_Time: 0.00,
    Used_Time: 0.00,
    Test_Star_Time: null,
    Test_End_Time: null,
    Settings: {
        Timing: {
            Time_Limit: false,
            Show_remaining_time: false,
            Automatic_reminder_of_remaining_time: false,
        },
        Full_screen: {
            Force_full_screen: false
        },
        Anti_cheating: {
            End_test_on_exit_from_full_screen: false,
            End_test_when_switching_apps_tabs: false,
            Prevent_copy_paste: false,
            Typing_no_cheating_guarantee_agreement: false
        },
        Tools: {
            Enable_calculator_tool: false,
            Enable_periodic_table: false,
            Enable_eye_protection_mode: false
        },
        Questions: {
            Each_question_shows_right_or_wrong: false,
            Number_of_submissions_allowed_per_question: false,
            Intelligent_answer_correction: false
        },
        Set_Up: function () {
            if (GetData.settings[0]) {
                this.Timing.Time_Limit = GetData.settings[1];
            }
            if (GetData.settings[2]) this.Timing.Show_remaining_time = true;
            if (GetData.settings[3]) this.Timing.Automatic_reminder_of_remaining_time = true;
            if (GetData.settings[4]) this.Full_screen.Force_full_screen = true;
            if (GetData.settings[5]) this.Anti_cheating.End_test_on_exit_from_full_screen = true;
            if (GetData.settings[6]) this.Anti_cheating.End_test_when_switching_apps_tabs = true;
            if (GetData.settings[7]) this.Anti_cheating.Prevent_copy_paste = true;
            if (GetData.settings[8]) this.Anti_cheating.Typing_no_cheating_guarantee_agreement = true;
            if (GetData.settings[9]) this.Tools.Enable_calculator_tool = true;
            if (GetData.settings[10]) this.Tools.Enable_periodic_table = true;
            if (GetData.settings[11]) this.Tools.Enable_eye_protection_mode = true;
            if (GetData.settings[12]) this.Questions.Each_question_shows_right_or_wrong = true;
            if (GetData.settings[13] >= 1) this.Number_of_submissions_allowed_per_question = GetData.settings[13];
            if (GetData.settings[14]) this.Questions.Intelligent_answer_correction = true;
        }
    },
    Set_Up: function () {
        Test.Settings.Set_Up();
        Test.Test_Taker.UID = APP.account.UID;
        Test.Test_Taker.CID = GetData.Class_ID;
        Test.Questions = GetData.questions;

        let pre_test = document.getElementById("pre_test");
        let new_title = document.createElement("h1");
        new_title.innerHTML = "MPC Test";
        pre_test.append(new_title);
        let new_no = document.createElement("h2");
        let test_length = Test.Questions.length;
        new_no.innerHTML = "<b>" + test_length + "</b> Questions";
        pre_test.append(new_no);
        let next_botton = document.createElement("button");
        next_botton.innerHTML = "Next";
        next_botton.addEventListener("click", () => {
            pre_test.innerHTML = "";
            let information_title = document.createElement("h1");
            information_title.innerHTML = "Test Iformations";
            pre_test.append(information_title);
            let new_p = document.createElement("p");
            new_p.innerHTML = `
            Time Limit: <b>${Test.Settings.Timing.Time_Limit}</b></br>
            Show Remaining Time: <b>${Test.Settings.Timing.Show_remaining_time}</b></br>
            Automatic Reminder of Remaining Time: <b>${Test.Settings.Timing.Automatic_reminder_of_remaining_time}</b></br>
            Force full Screen: <b>${Test.Settings.Full_screen.Force_full_screen}</b></br>
            End Test on exit from Full-screen: <b>${Test.Settings.Anti_cheating.End_test_on_exit_from_full_screen}</b></br>
            End exam When Switching Apps/Tabs: <b>${Test.Settings.Anti_cheating.End_test_when_switching_apps_tabs}</b></br>
            Prevent copy-paste: <b>${Test.Settings.Anti_cheating.Prevent_copy_paste}</b></br>
            Typing no cheating guarantee agreement: <b>${Test.Settings.Anti_cheating.Typing_no_cheating_guarantee_agreement}</b></br>
            Enable calculator tool: <b>${Test.Settings.Tools.Enable_calculator_tool}</b></br>
            Enable periodic table: <b>${Test.Settings.Tools.Enable_periodic_table}</b></br>
            Eye protection mode: <b>${Test.Settings.Tools.Enable_eye_protection_mode}</b></br>
            Each question shows right or wrong: <b>${Test.Settings.Questions.Each_question_shows_right_or_wrong}</b></br>
            Number of submissions allowed per question: <b>${Test.Settings.Questions.Number_of_submissions_allowed_per_question}</b></br>
            Intelligent answer correction: <b>${Test.Settings.Questions.Intelligent_answer_correction}
            `;
            pre_test.append(new_p);
            let start_button = document.createElement("button");
            start_button.innerHTML = "Start Test";
            start_button.addEventListener("click", () => {
                Test.Start();
            });
            pre_test.append(start_button);
        });
        pre_test.append(next_botton);
    },
    Start: function () {
        Test_Star_Time = new Date().getTime();

    },
    End: function () {

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
10 Tools | Enable periodic table
11 Tools | Enable eye protection mode
12 Questions | Each question shows right or wrong
13 Questions | Number of submissions allowed per question
14 Questions | Intelligent answer correction (recommended)
*/

window.addEventListener("load", function () {
    Test.Set_Up();
});