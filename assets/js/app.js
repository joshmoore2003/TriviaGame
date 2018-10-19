// Create variables for scores

var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var timeLeft = 10;
var questionSet = 0
// Create arrays for questions, answers optoins and answers,

var questions = {
    question1: "What is Indiana Jones First Name?",
    question2: "Upon coming back from the First World War, Indiana Jones was an understudy to Abner Ravenwood. Which university was he studying in?",
    question3: 'In "Raiders Of the Lost Ark" what two weapons did Indy carry with him at all times?',
    question4: 'In "Indiana Jones and the Temple Of Doom", which Hindu God did the cult worship?',
    question5: "In which language did Indy have to count to twenty in before his father would listen to him?",
    question6: 'In "Raiders of the Lost Ark" when the Ark of the Covenant was opened, what was found inside?',
    question7: "What does Indiana Jones have a fear of?",
    question8: 'In "The Last Crusade" where did Indiana find the clues that could safely take them through the three challenges?',
    question9: 'Lao Che was a villain from the "Indiana Jones" movies who survived an encounter with Indy.',
    question10: 'In "The Last Crusade" who drove to his death in the tank that Indy forced over the cliff?',
    question11: 'The price of immortality means the Grail can not pass beyond what marker?'
};

var answersOptoins = {
    question1: [],
    question2: [],
    question3: [],
    question4: [],
    question5: [],
    question6: [],
    question7: [],
    question8: [],
    question9: [],
    question10: [],
    question11: []
}

var answers = {
    question1: "Henry",
    question2: "University of Chicago",
    question3: "A bullwhip and pistol",
    question4: "Kali",
    question5: "Greek",
    question6: "Sand",
    question7: "Snakes",
    question8: "The Chronicles of St. Anselm",
    question9: "True",
    question10: "Colonel Vogel",
    question11: "The Great Seal"
};

// Reset Function
function resetTime() {
    timeLeft = 10;
}

function showQuestions() {
    for (i = 0; i < questions.length; i++){
        document.getElementById("questions").textContent = questions[i];
    }
} 



// Start music when start game button is pressed
var themeSong = new Audio("./assets/Indiana_Jones_Theme.mp3");
document.getElementById("start-btn").addEventListener("click", e => themeSong.play());
document.getElementById("start-music").addEventListener("click", e => themeSong.play());
document.getElementById("stop-music").addEventListener("click", e => themeSong.pause());

// Add click function that adds a class of display onto the main div and removes the display class from the game div
//Note: game div will appear and main div is disappear.


var questionContent = Object.values(questions)[questionSet];
$("questions").text(questionContent);


// document.getElementById("start-btn").onclick = function startBtn() {
//     document.getElementById("game").classList.remove("display");
//     document.getElementById("main").classList.add("display");
//     var downloadTimer = setInterval(function() {
//         timeLeft--;
//         showQuestions()
//         document.getElementById("clockDiv").textContent = timeLeft;
//         if(timeLeft <= 0) {
//             resetTime();
//         }
//     },1000);
// }

// Setup Countdown Clock

