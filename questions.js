// function startQuiz() {
    
// }

// function askQuestion() {

// }

// function showAnswer()

$(document).ready(function () {
    console.log("Good to go!");
  });
   
  let questions = [
    {
      title: "JavaScript is...",
      choices: ["impossible to learn", "a fundamental programming language", "pointless and used by old people", "used to make pages just look pretty"],
      answer: "a fundamental programming language"
    },
    {
      title: "Every variable can also be refered to as a ______ or a _______.",
      choices: ["number, letter", "let, const", "perty", "name, value", "name, number"],
      answer: "let, const"
    },
    {
      title: "What symbole is used to select in JQuery?",
      choices: ["@", "#", "()", "$"],
      answer: "$"
    },
    {
      title: "What does CSS stand for?",
      choices: ["Cookie Steeling Sucka", "Cascading Style Sheet", "Cool Secret Spys", " Copy Script Sheet"],
      answer: "Cascading Style Sheet"
    },
    {
      title: "The joining of two strings together is called ________.",
      choices: ["conclusion", "confirmation", "addition", "concatenation"],
      answer: "concatenation"
    },
  ];
   
  $("#quiz-container").hide();
  $("#all-done").hide();
  $(".correct").hide();
  $(".incorrect").hide();
   
   
  let currentIndex = 0;
  let correct = 0;
  let incorrect = 0;
   
  $("#start-button").on("click", function () {
    console.log("The button works!");
    $("#startScreen").hide();
    $("#quiz-container").show();
    setNextQuestion();
    // timer
    let timeLeft = 75;
    let downloadTimer = setInterval(function () {
      $("#time").html("Time: " + timeLeft + " seconds remaining");
      timeLeft -= 1;
      if (timeLeft <= 0) {
        clearInterval(downloadTimer);
        $("#time").html("Finished");
        $("#quiz-container").hide();
        allDone();
      }
    }, 1000);
    $(".nextQuestion").on("click", function () {
      if ($(this).text() === questions[currentIndex].answer) {
        correct += 10;
        console.log('number correct', correct);
        $(".correct").show();
        setTimeout(function () {
          $('.correct').fadeOut('fast');
        }, 1000);
      } else {
        incorrect++;
        console.log('number incorrect', incorrect);
        $(".incorrect").show();
        setTimeout(function () {
          $('.incorrect').fadeOut('fast');
        }, 1000);
        timeLeft = timeLeft - 10;
      }
      if (currentIndex < 4) {
        currentIndex++;
        setNextQuestion();
      } else {
        $("#quiz-container").hide();
        allDone();
        clearInterval(downloadTimer);
        $("#time").html("Finished with " + timeLeft + " seconds left!");
      }
    });
  })
   
  function setNextQuestion() {
    $("#askQuestion").text(questions[currentIndex].title);
    $("#option1").text(questions[currentIndex].choices[0]);
    $("#option2").text(questions[currentIndex].choices[1]);
    $("#option3").text(questions[currentIndex].choices[2]);
    $("#option4").text(questions[currentIndex].choices[3]);
    console.log(questions[currentIndex]);
    console.log('currentIndex', currentIndex);
  }
   
  function allDone() {
    $("#all-done").show();
    $("#finalScore").html("Your final score is " + correct + "!");
  }
   
   
  $("#submitInitials").on("click", function () {
    window.location.href = 'highscore.html';

  })
  