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
  element.addEventListener("click", colorChange)

  var questElement = document.createElement("h2");
  questElement.textContent = insertQuestion.quest;
  document.getElementById("div"+i).appendChild(questElement);

  //right button = corrct answer
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

//do things to colors based on click action
//when something is clicked, change the color

//colorChange
function colorChange(){
  this.querySelector(".correct").style.backgroundColor = "green";
  this.querySelector(".wrongA").style.backgroundColor = "red";
  this.querySelector(".wrongB").style.backgroundColor = "red";
}
