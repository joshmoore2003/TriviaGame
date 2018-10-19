// Create variables for scores

var rightAnswer = 0;
var wrongAnswer = 0;
var timeLeft = 10;

// Create arrays for questions, answers optoins and answers,

var questions = [
    "What is Indiana Jones First Name?",
    "Upon coming back from the First World War, Indiana Jones was an understudy to Abner Ravenwood. Which university was he studying in?",
    'In "Raiders Of the Lost Ark" what two weapons did Indy carry with him at all times?',
    'In "Indiana Jones and the Temple Of Doom", which Hindu God did the cult worship?',
    "In which language did Indy have to count to twenty in before his father would listen to him?",
    'In "Raiders of the Lost Ark" when the Ark of the Covenant was opened, what was found inside?',
    "What does Indiana Jones have a fear of?",
    'In "The Last Crusade" where did Indiana find the clues that could safely take them through the three challenges?',
    'Lao Che was a villain from the "Indiana Jones" movies who survived an encounter with Indy.',
    'In "The Last Crusade" who drove to his death in the tank that Indy forced over the cliff?',
    'The price of immortality means the Grail can not pass beyond what marker?'
];

var answersOptoins = [
    
];

var answers = [
    "Henry",
    "University of Chicago",
    "A bullwhip and pistol",
    "Kali",
    "Greek",
    "Sand",
    "Snakes",
    "The Chronicles of St. Anselm",
    "True",
    "Colonel Vogel",
    "The Great Seal"
];

// Reset Function
function resetTime() {
    timeLeft = 10;
}

function showQuestions() {
    for (var i = 0, length = questions.length; i < length; i++){
        document.getElementById("questions").textContent = questions;
    }
} 



// Start music when start game button is pressed
var themeSong = new Audio("./assets/Indiana_Jones_Theme.mp3");
document.getElementById("start-btn").addEventListener("click", e => themeSong.play());
document.getElementById("start-music").addEventListener("click", e => themeSong.play());
document.getElementById("stop-music").addEventListener("click", e => themeSong.pause());

// Add click function that adds a class of display onto the main div and removes the display class from the game div
//Note: game div will appear and main div is disappear.
document.getElementById("start-btn").onclick = function startBtn() {
    document.getElementById("game").classList.remove("display");
    document.getElementById("main").classList.add("display");
    var downloadTimer = setInterval(function() {
        timeLeft--;
        showQuestions()
        document.getElementById("clockDiv").textContent = timeLeft;
        if(timeLeft <= 0) {
            resetTime();
        }
    },1000);
}

// Setup Countdown Clock

