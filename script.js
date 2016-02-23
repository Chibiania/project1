//all the questions
var questions = [
  {
    quest: "Q1",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q2",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q3",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q4",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q5",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q6",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q7",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q8",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q9",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  },
  {
    quest: "Q10",
    rightAnswer: "Correct",
    wrongAnswerA: "Wrong",
    wrongAnswerB: "Wrong"
  }
]
var i=1;

//goes through questions array and prints out each question
questions.forEach(function(insertQuestion){
  var element = document.createElement("div");
  document.body.appendChild(element);
  element.setAttribute("id", "div"+i);
  $(element).one("click", colorChange);
  var questElement = document.createElement("h2");
  questElement.textContent = insertQuestion.quest;
  document.getElementById("div"+i).appendChild(questElement);

  //button div
  var buttonDiv = document.createElement("div");
  document.body.appendChild(buttonDiv);
  buttonDiv.setAttribute("id", "buttons");
  $(buttonDiv).one("click", right);

  //right button = correct answer
  var ansElement = document.createElement("button");
  ansElement.textContent = insertQuestion.rightAnswer;
  ansElement.setAttribute("class", "correct");
  document.getElementById("div"+i).appendChild(ansElement);

  //wrong button A = wrong answer A
  var wrongAElement = document.createElement("button");
  wrongAElement.textContent = insertQuestion.wrongAnswerA;
  wrongAElement.setAttribute("class", "wrongA");
  wrongAElement.setAttribute("type", "radio");
  document.getElementById("div"+i).appendChild(wrongAElement);

  //wrong button B = wrong answer B
  var wrongBElement = document.createElement("button");
  wrongBElement.textContent = insertQuestion.wrongAnswerB;
  wrongBElement.setAttribute("class", "wrongB");
  wrongBElement.setAttribute("type", "radio");
  document.getElementById("div"+i).appendChild(wrongBElement);
  i++;
});

//display one question div at a time (help from stackoverflow)
var totalQuestions = $("div").length;
var currentQuestion = 0;
$questions = $("div");

//hiding all the divs
$questions.hide();
$($questions.get(currentQuestion)).fadeIn();

//when next is clicked, the current question fades out and the next one fades in
$("#next").click(function () {
  $($questions.get(currentQuestion)).fadeOut(function () {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion == totalQuestions) {

      //displaying the score
      var element = document.createElement("div");
      document.body.appendChild(element);
      element.setAttribute("id", "score");

      var result = document.createElement("h2");
      result.textContent = "Score";
      document.getElementById("score").appendChild(result);


      //replay option should be put HERE | clickable replay symbol?
    }
    else {
      $($questions.get(currentQuestion)).fadeIn();
    }
  });
});

//do things to colors based on click action
//when something is clicked, change the color
function colorChange(){
  //$("").one("click", right);
  this.querySelector(".correct").style.backgroundColor = "green";
  this.querySelector(".wrongA").style.backgroundColor = "red";
  this.querySelector(".wrongB").style.backgroundColor = "red";


  //use innerText or innerHtml to compare clicked values
}


//questions should be displayed randomly

//make a play again function
