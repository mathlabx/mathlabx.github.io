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

function containsKaTeXExpression(inputString) {
    // 关键词数组，用于匹配KaTeX表达式
    const keywords = ["\\frac", "\\sqrt", "\\sum", "\\int", "\\leq", "\\geq", "\\in", "\\mathbb", "^", "_", "|", "\\emptyset"]; // 添加更多关键词以匹配更多表达式

    // 检查输入字符串是否包含关键词
    for (const keyword of keywords) {
        if (inputString.includes(keyword)) {
            return true;
        }
    }

    return false;
}

let Test = {
    startTimer = function (elementId, minutes, callback) {
        var worker = new Worker('countdown.js');

        var totalTimeInSeconds = 0;

        worker.onmessage = function (e) {
            if (e.data === 'timeOver') {
                callback();
            } else if (typeof e.data === 'number') {
                totalTimeInSeconds = e.data;
            } else {
                document.getElementById(elementId).textContent = e.data;
            }
        };

        worker.postMessage(minutes);
    },
    Test_Taker: {
        UID: null,
        CID: null
    },
    Questions: [],
    Answers: [],
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

            function saveSelection() {
                var selection = window.getSelection();
                var range = selection.getRangeAt(0);
                var preSelectionRange = range.cloneRange();
                preSelectionRange.selectNodeContents(document.getElementById("userText"));
                preSelectionRange.setEnd(range.startContainer, range.startOffset);
                var start = preSelectionRange.toString().length;

                return start;
            }

            function restoreSelection(start) {
                var charIndex = 0;
                var range = document.createRange();
                range.setStart(document.getElementById("userText"), 0);
                range.collapse(true);
                var nodeStack = [document.getElementById("userText")], node, foundStart = false, stop = false;

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType == 3) {
                        var nextCharIndex = charIndex + node.length;
                        if (!foundStart && start >= charIndex && start <= nextCharIndex) {
                            range.setStart(node, start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && start <= nextCharIndex) {
                            range.setEnd(node, start - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        var i = node.childNodes.length;
                        while (i--) {
                            nodeStack.push(node.childNodes[i]);
                        }
                    }
                }

                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }

            function handleInput() {
                var providedText = "I promise to abide by the exam rules and complete the exam independently. I understand the consequences of violating the exam rules.";

                var startIndex = saveSelection();
                var result = '';
                var userTextContent = document.getElementById("userText").textContent;

                for (var i = 0; i < userTextContent.length; i++) {
                    if (userTextContent[i].toLowerCase() === providedText[i].toLowerCase()) {
                        result += '<span class="underline">' + userTextContent[i] + '</span>';
                    } else {
                        result += userTextContent[i];
                    }
                }

                document.getElementById("userText").innerHTML = result;
                restoreSelection(startIndex);
            }

            function checkAgreement() {
                var providedText = "I promise to abide by the exam rules and complete the exam independently. I understand the consequences of violating the exam rules.";
                var userTextContent = document.getElementById("userText").textContent.trim();

                var providedWords = providedText.split(/\s+/);
                var userWords = userTextContent.split(/\s+/);

                var isMatch = true;
                if (providedWords.length === userWords.length) {
                    for (var i = 0; i < providedWords.length; i++) {
                        if (providedWords[i].toLowerCase() !== userWords[i].toLowerCase()) {
                            isMatch = false;
                            break;
                        }
                    }
                } else {
                    isMatch = false;
                }

                if (isMatch) {
                    Test.Start();
                } else {
                    // alert("The text you entered does not match the agreement, please re-enter it.");
                }
            }

            pre_test.append(new_p);
            let start_button = document.createElement("button");
            start_button.innerHTML = "Start Test";
            start_button.addEventListener("click", () => {
                pre_test.innerHTML = "";
                if (Test.Settings.Anti_cheating.Typing_no_cheating_guarantee_agreement) {
                    let new_text = document.createElement("h2");
                    new_text.innerHTML = "Please type the agreement below.";
                    let new_typ = document.createElement("p");
                    new_typ.innerHTML = "I promise to abide by the exam rules and complete the exam independently. I understand the consequences of violating the exam rules.";
                    let new_user_typ = document.createElement("div");
                    new_user_typ.id = "userText";
                    new_user_typ.style.width = "90%";
                    new_user_typ.style.backgroundColor = "#ffffff1a";
                    new_user_typ.style.borderRadius = "15px";
                    new_user_typ.style.marginLeft = "5%";
                    new_user_typ.style.height = "150px";
                    new_user_typ.style.margin = "20px";
                    new_user_typ.contentEditable = "true";
                    new_user_typ.addEventListener("keyup", () => {
                        handleInput();
                        checkAgreement();
                    });
                    pre_test.append(new_text);
                    pre_test.append(new_typ);
                    pre_test.append(new_user_typ);
                } else {
                    Test.Start();
                }
            });
            pre_test.append(start_button);
        });
        pre_test.append(next_botton);
    },
    Start: function () {
        let test_div = document.getElementById("test");
        Test_Star_Time = new Date().getTime();
        function full(ele) {
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen();
            }
        }
        document.getElementById("pre_test").remove();
        test_div.style.display = "block";
        test_div.style.position = "flexed";
        full(test_div);
        test_div.style.backgroundColor = "white";
        Test.Answers = new Array(Test.Questions.length).fill("/");
        Test.startTimer("test-time", Test.Settings.Timing.Time_Limit, () => {
            Test.End();
        });
        let quesON = 0;
        let test_div_con = document.getElementById("test-qustions");
        let new_input = document.getElementById("test-input");
        let quesON_El = document.getElementById("test-on");
        window.next_ques = function () {
            new_input.value = "";
            quesON_El.innerHTML = `${quesON + 1} of ${Test.Questions.length}`;
            test_div_con.innerHTML = "";

            let length = Array.isArray(Test.Questions[quesON][0]) ? Test.Questions[quesON][0].length : (typeof Test.Questions[quesON][0] === 'string' ? 1 : 0);

            for (let i = 0; i < length; i++) {
                let new_p = document.createElement("p");
                if (containsKaTeXExpression(Test.Questions[quesON][0][i])) {
                    if (length >= 2) katex.render(Test.Questions[quesON][0][i], new_p, { displayMode: true });
                    else katex.render(Test.Questions[quesON][0], new_p, { displayMode: true });
                } else {
                    if (length >= 2) new_p.innerHTML = Test.Questions[quesON][0][i];
                    else new_p.innerHTML = Test.Questions[quesON][0];
                }
                test_div_con.append(new_p);
            }

            let next_button = document.getElementById("next_button");
            next_button.addEventListener("click", handleNextButtonClick);
        }

        function handleNextButtonClick() {
            let next_button = document.getElementById("next_button");
            console.log(quesON);
            next_button.style.display = "none";
            Test.Answers[quesON] = new_input.value;
            test_div_con.innerHTML = "";

            if (quesON - 1 == Test.Questions.length) {
                Test.End();
            } else {
                quesON += 1;
                next_ques();
            }

            setTimeout(() => {
                next_button.style.display = "";
            }, 1000);
        }

        // Initial call to start the questions
        next_ques();

    },
    End: function () {
        window_load(false, 0);
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