https://opentdb.com/api.php?amount=10&category=15&difficulty=easy
console.log(12);
let questions
let b1 = document.getElementById("button1")
let b2 = document.getElementById("button2")
let b3 = document.getElementById("button3")
let b4 = document.getElementById("button4")
let quest = document.getElementById("question")
let title = document.getElementById("title")
let gamemode = ""
let diffculty = ""
let buttons = [b1, b2, b3, b4]
let questnumb = 0
let db1 = [
    {
        question: "start",
        answers: ["sure", "mabe", "no", "meep"]

    },
    {
        question: "gamemode",
        answers: ["games", "animal", "mythology", "sport"]

    },
    {
        question: "diffculty",
        answers: ["random", "hard", "normal", "easy"]

    },
]


fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy').then(response => response.json()).then(commits => questions = commits.results);
setTimeout(() => {
    console.log(questions);
}, 5000);
newnumb()

for (let i = 0; i < 4; i++) {
    buttons[i].onclick = function () {
        if (questnumb == 0) {
            if (buttons[i].innerHTML == "no") {
                window.close();

            }



        }
        else {
            if (questnumb == 1) {
                gamemode = buttons[i].innerHTML
                console.log(gamemode);


            } else if (questnumb = 2) {
                diffculty = buttons[i].innerHTML
                console.log(diffculty);
            }
        }
        questnumb = questnumb + 1
        newnumb()

    }

}

function newnumb() {
    quest.innerHTML = db1[questnumb].question
    b1.innerHTML = db1[questnumb].answers[0]
    b2.innerHTML = db1[questnumb].answers[1]
    b3.innerHTML = db1[questnumb].answers[2]
    b4.innerHTML = db1[questnumb].answers[3]

}

