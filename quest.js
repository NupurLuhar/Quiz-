const quizData = [{
        question: "What does OS X has?",
        a: "Monolithic kernel with modules",
        b: "Microkernel",
        c: "Monolithic Kernel",
        d: "Hybrid Kernel",
        correct: "d",
    },
    {
        question: "The FCFS algorithm is particularly troublesome for ____________",
        a: "Operating Systems",
        b: "Multiprocessor Systems",
        c: "time sharing systems",
        d: "multiprogramming systems",
        correct: "c",
    },
    {
        question: "The operating system maintains a ______ table that keeps track of how many frames have been allocated, how many are there, and how many are available?",
        a: "Memory",
        b: "Frame",
        c: "Mapping",
        d: "Page",
        correct: "d",
    },
    {
        question: "The _________ presents a uniform device-access interface to the I/O subsystem, much as system calls provide a standard interface between the application and the operating system.",
        a: "Device Drivers",
        b: "I/O systems",
        c: "Devices",
        d: "All of the above",
        correct: "a",
    },
    {
        question: " The priority of a process will ______________ if the scheduler assigns it a static priority.",
        a: "Depends on the operating system",
        b: "Remains unchanged",
        c: "Changes",
        d: "None of the above",
        correct: "c",
    }
];

const quiz = document.getElementById("quiz")
const ans = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

let currentq = 0
let score = 0

load_quiz()

function load_quiz() {
    deselect_answers()
    const currentData = quizData[currentq]
    question.innerHTML = `${currentq+1}. ${currentData.question}`
    a_text.innerHTML = currentData.a
    b_text.innerHTML = currentData.b
    c_text.innerHTML = currentData.c
    d_text.innerHTML = currentData.d
}

function deselect_answers() {
    ans.forEach(ansEle => ansEle.checked = false)
}

function get_selected() {
    let answer
    ans.forEach(ansEle => {
        if (ansEle.checked) {
            answer = ansEle.id
        }
    })
    return answer
}

function next() {
    const answer = get_selected()
    if (answer) {
        if (answer === quizData[currentq].correct)
            score++
            currentq++
    } else {
        window.alert("Please select an option!");
    }
    if (currentq < quizData.length)
        load_quiz()
    else
        quiz.innerHTML = `
        <h3>Your score: ${score}/${quizData.length}</h3>
        <h3>Percentage score: ${(score/quizData.length)*100}%</h3>
        <button onclick="location.reload()">Reload</button>
        `
}