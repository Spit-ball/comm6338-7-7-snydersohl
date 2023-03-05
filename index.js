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

var finalScoreEl = document.createElement('p')
var startButton = document.createElement('button')
var quiz = document.getElementById('quiz')
var timer = document.createElement('p')
var question = document.createElement('p')


//Initiating some variables for later use.
let timerEl
let currentQuestion
let finalScore


