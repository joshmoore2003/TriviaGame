$(document).ready(function() {

  
  // Creating an object to hold our questions.
  let questions = [{
    question: "What is Indiana Jones' First Name?",
    answers: ["Jason", "Henry", "Scott", "Dave"],
    correctAnswer: "Henry"
  },
  {
    question: "Upon coming back from the First World War, Indiana Jones was an understudy to Abner Ravenwood. Which university was he studying in?",
    answers: ["Princeton University", "Harvard University", "University of Cairo", "University of Chicago"],
    correctAnswer: "University of Chicago"
  },
  {
    question: 'In "Raiders Of the Lost Ark" what two weapons did Indy carry with him at all times?',
    answers: ["A bullwhip and a knife", "A machete and a bullwhip", "A knife and pistol", "A bullwhip and pistol"],
    correctAnswer: "A bullwhip and pistol"
  },
  {
    question: 'In "Indiana Jones and the Temple Of Doom", which Hindu God did the cult worship?',
    answers: ["Ravi", "Shakti", "Vashnu", "Kali"],
    correctAnswer: "Kali"
  },
  {
    question: "In which language did Indy have to count to twenty in before his father would listen to him?",
    answers: ["Italian", "English", "Latin", "Greek"],
    correctAnswer: "Greek"
  },
  {
    question: 'In "Raiders of the Lost Ark" when the Ark of the Covenant was opened, what was found inside?',
    answers: ["The Holy Grail", "The Ten Commmandments", "Sand", "Moses' Bones"],
    correctAnswer: "Sand"
  },
  {
    question: 'What does Indiana Jones have a fear of?',
    answers: ["Rabits", "Snakes", "Babies", "Tigers", "Dying"],
    correctAnswer: "Snakes"
  },
  {
    question: 'In "The Last Crusade" where did Henry find the clues that could safely take them through the three challenges?',
    answers: ["The Annals of Peter", "The Chronicles of St. Anselm", "The Diary of St. Anthony", "The Bible itself"],
    correctAnswer: "The Chronicles of St. Anselm"
  },
  {
    question: 'Lao Che was a villain from the "Indiana Jones" movies who survived an encounter with Indy.',
    answers: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: 'In "The Last Crusade" who drove to his death in the tank that Indy forced over the cliff?',
    answers: ["An anonymous German soldier", "Colonel Luger", "The entire tank crew", "Colonel Vogel"],
    correctAnswer: "Colonel Vogel"
  },
  {
    question: 'The price of immortality means the Grail can not pass beyond what marker?',
    answers: ["The Great Seal", "The Bridge of Faith", "The Golden Door", "The Holy See"],
    correctAnswer: "The Great Seal"
  }

];

  // variables to set interval and counter
  let timer;
  let countStartNum = 20;

  var viewPort = $("#question");

  // creating the game object to hold the functions and variables to the game
  document.getElementById("start").onclick = function startBtn() {
    document.getElementById("game").classList.remove("display");
    document.getElementById("main").classList.add("display");


  var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNum,
    correct: 0,
    incorrect: 0,

  // Timer countdown function
    countdown: function() {
      game.counter--;
      $("#counterNum").text(game.counter);
      if (game.counter === 0) {
        console.log("TIME UP");
        game.timeUp();
      }
    },

    // Display counter in h2 tag
    loadQuestion: function() {
      timer = setInterval(game.countdown, 1000);

      viewPort.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

      for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
        viewPort.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
        + "'>" + questions[this.currentQuestion].answers[i] + "</button><br>");
      }
    },

    nextQuestion: function() {
      game.counter = countStartNum;
      $("#counterNum").text(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
    },

    timeUp: function() {

      clearInterval(timer);

      $("#counterNum").html(game.counter);

      viewPort.html("<h2>Out of Time!</h2>");
      viewPort.append("<h2>The Correct Answer Was: " + questions[this.currentQuestion].correctAnswer + "</h2>");

      if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 3 * 1000);
      }
      else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    // Show results after game is complete
    results: function() {

      clearInterval(timer);

      viewPort.html("<h2>Quiz Complete, here is how you did!</h2>");

      $("#counterNum").text(game.counter);

      viewPort.append("<h2>Correct Answers: " + game.correct + "</h2>");
      viewPort.append("<h2>Incorrect Answers: " + game.incorrect + "</h2>");
      viewPort.append("<h2>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h2>");
      viewPort.append("<br><button id='start-over'>Start Over?</button>");
    },

    clicked: function(e) {
      clearInterval(timer);
      if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
        this.answeredCorrectly();
      }
      else {
        this.answeredIncorrectly();
      }
    },

    answeredIncorrectly: function() {

      game.incorrect++;

      clearInterval(timer);

      viewPort.html("<h2 style='color:red'>WRONG!</h2>");
      viewPort.append("<h2>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h2>");

      if (game.currentQuestion === questions.length -1) {
        setTimeout(game.results, 3 * 1000);
      }
      else {
        setTimeout(game.nextQuestion, 3 * 1000)
      }
    },

    answeredCorrectly: function() {

      clearInterval(timer);

      game.correct++;

      viewPort.html("<h2 style='color:green'>Correct!</h2>");

      if (game.currentQuestion === questions.length -1) {
        setTimeout(game.results, 3 * 1000);
      }
      else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    reset: function() {
      this.currentQuestion = 0;
      this.counter = countStartNum;
      this.correct = 0;
      this.incorrect = 0;
      this.loadQuestion();
    }
  };

  // click events

  $(document).on("click", "#start-over", function() {
    game.reset();
  });

  $(document).on('click', ".answer-button", function(e) {
    game.clicked(e);
  });

  $(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counterNum'>20</span> Seconds</h2>");
    game.loadQuestion();
  });
}
});

// Start music when "start game" button is pressed
var themeSong = new Audio("./assets/Indiana_Jones_Theme.mp3");
// Allows song to loop
themeSong.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
  alert("ACHIEVMENT UNLOCKED: You Must Love This Song. Let's play it again!!");
}, false);

//Play button and Pause button. Incase someone doesn't like this song. But that's impossible. No one would ever pause this song.
document.getElementById("start").addEventListener("click", e => themeSong.play());
document.getElementById("start-music").addEventListener("click", e => themeSong.play());
document.getElementById("stop-music").addEventListener("click", e => themeSong.pause());

