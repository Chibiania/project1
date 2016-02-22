
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

  var questElement = document.createElement("h2");
  questElement.textContent = insertQuestion.quest;
  document.getElementById("div"+i).appendChild(questElement);

  //put correct answers in
  var ansElement = document.createElement("p");
  ansElement.textContent = insertQuestion.rightAnswer;
  document.getElementById("div"+i).appendChild(ansElement);

  //puts in wrong answer A
  var wrongAElement = document.createElement("p");
  wrongAElement.textContent = insertQuestion.wrongAnswerA;
  document.getElementById("div"+i).appendChild(wrongAElement);

  //puts in wrong answer B
  var wrongBElement = document.createElement("p");
  wrongBElement.textContent = insertQuestion.wrongAnswerB;
  document.getElementById("div"+i).appendChild(wrongBElement);
  i++;

});

//do things to colors based on click action
//when something is clicked, change the color
//.addEventListener("click", someFucntionToChangeColor);

function test() {

    var element = document.createElement("div");
    element.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
    document.getElementById('lc').appendChild(element);

}
