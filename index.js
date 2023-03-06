var questionsArr = [
    {
        question: 'What is the name of Ben 10\'s alien alter ego that has fire-based powers?',
        answer: 'Heatblast',
        options: [
            'Heatblast',
            'XLR8',
            'Diamondhead',
            'Four Arms',
        ]
    },
    {
        question: 'What is the name of Ben 10\'s intelligent, grey-skinned alien?',
        answer: 'Grey Matter',
        options: [
            'Max Tennyson',
            'Gwen Tennyson',
            'Kevin Levin',
            'Grey Matter',
        ]
    },
    {
        question: 'What is the name of the main antagonist of the Ben 10 series, who seeks to steal the Omnitrix?',
        answer: 'Vilgax',
        options: [
            'Vilgax',
            'Zs\'Skayr',
            'Charmcaster',
            'Hex',
        ]
    },
    {
        question: 'What is the name of Ben 10\'s speedy, black-and-blue alien form?',
        answer: 'XLR8',
        options: [
            'Upgrade',
            'Wildvine',
            'XLR8',
            'Stinkfly',
        ]
    },
    {
        question: 'What is the name of the powerful, red-and-white alien form that Ben 10 gains access to later in the series?',
        answer: 'Way Big',
        options: [
            'Swampfire',
            'Way Big',
            'Cannonbolt',
            'Big Chill',
        ]
    }
]

//Accessing/Creating Dom Elements

var finalScoreEl = document.createElement('p');
var startButton = document.createElement('button');
var quiz = document.getElementById('quiz');
var timer = document.createElement('p');
var question = document.createElement('p');


//Initiating some variables for later use.
let timerDisplay
let displayedQuestion
let finalScore


function beginQuiz() {
    score = 0;
    displayedQuestion = 0;
    quiz.innerHTML = '';
    let finalScore = localStorage.getItem('previous-score');
    if (finalScore) {
        finalScoreEl.textContent = 'Previous Score: ' + finalScore;
        quiz.appendChild(finalScoreEl);
    }

    startButton.id = 'start-quiz';
    startButton.textContent = "Start Quiz";
    quiz.appendChild(startButton);
}
// simple 30s timer.
function startTimer() {
    timerDisplay = setInterval(function () {
        timeRemaining--;
        if (timeRemaining > 0) {
            timer.textContent = timeRemaining;
        } else {
            clearInterval(timerDisplay);
            displayedQuestion++;
            if (displayedQuestion < questionsArr.length) {
                displayQuestion();
            } else {
                quitQuiz();
            }
        }
    }, 1000)
}

// Displaying the question to the user with timer. Appending divs to HTML, and creating option buttons.
function displayQuestion() {
    timeRemaining = 30;
    quiz.innerHTML = "";
    var questionAsked = questionsArr[displayedQuestion];
    question.textContent = questionAsked.question;
    quiz.appendChild(question);
    var options = document.createElement('div');
    options.id = 'options';
    quiz.appendChild(options);
    questionAsked.options.forEach(function (option) {
        var choiceButton = document.createElement('button');
        choiceButton.textContent = option;
        options.appendChild(choiceButton);
    })
    timer.textContent = timeRemaining;
    quiz.appendChild(timer);
    startTimer();
}

// event listener for ids applied and button click. Clears timer when question index is raised.
quiz.addEventListener('click', function (e) {
    if (e.target.id === 'start-quiz') {
        displayQuestion();
    } else if (e.target.parentElement.id === 'options' && e.target.tagName === 'BUTTON') {
        if (e.target.textContent === questionsArr[displayedQuestion].answer) {
            score++
        }
        clearInterval(timerDisplay);
        displayedQuestion++;
        if (displayedQuestion < questionsArr.length) {
            displayQuestion();
        } else {
            quitQuiz();
        }
    }
})

// end quiz and calc percentage same as last assignment, trigger begin quiz func.
function quitQuiz() {
    var percentage = Math.round(score / questionsArr.length * 100) + '%'
    localStorage.setItem('previous-score', percentage)
    beginQuiz()
}

beginQuiz()