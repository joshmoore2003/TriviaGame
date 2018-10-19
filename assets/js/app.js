// Create variables for scores

var rightAnswer = 0;
var wrongAnswer = 0;
var outOfTime = 0;

// Create arrays for questions, answers optoins and answers,

var questions = [
    "What is Indiana Jones First Name", 
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






































































{
    ques: "When was the first Air Jordan 1's released to the public?",
    ans: ["2000", "1987", "1995", "1985"],
    name: "jordan",
    correct: "1985",
    divClass: ".jordan"
},
{
    ques: "Nike's first sneaker design goes under what name today?",
    ans: ["Air Max 1", " Cortez", "Structure Triax", "Air Force 1"],
    name: "firstDesign",
    correct: "Cortez",
    divClass: ".firstDesign"
},
{
    ques: "Which state was Nike's first retail space was opened in?",
    ans: ["Oregon", "New York", "California", "Florida"],
    name: "retailStore",
    correct: "California",
    divClass: ".retailStore"
},
{
    ques: "Nike was originally a distribution company for which brand?",
    ans: ["Adidas", "New Balance", "Saucony", "Onitsuka Tiger"],
    name: "distribution",
    correct: "Onitsuka Tiger",
    divClass: ".distribution"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz