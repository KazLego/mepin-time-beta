https://opentdb.com/api.php?amount=10&category=15&difficulty=easy
console.log(12);
let questions
let b1 = document.getElementById("button1")
let b2 = document.getElementById("button2")
let b3 = document.getElementById("button3")
let b4 = document.getElementById("button4")
let quest = document.getElementById("question")
let title = document.getElementById("title")
let questnumb = 0
let db1 = [
{
question:"start",
answers:["sure","mabe","no","meep"]

},
{
    question:"gamemode",
    answers:["games","animal","mythology","sport"]
    
    },
    {
        question:"gamemode",
        answers:["random","hard","normal","easy"]
        
        },
]


fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy').then(response =>response.json()).then(commits => questions = commits.results);
setTimeout(() => {
    console.log(questions);
}, 5000);
quest.innerHTML= db1[questnumb].question
b1.innerHTML= db1[questnumb].answers[0]
b2.innerHTML= db1[questnumb].answers[1]
b3.innerHTML= db1[questnumb].answers[2]
b4.innerHTML= db1[questnumb].answers[3]