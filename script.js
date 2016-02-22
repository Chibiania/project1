
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

//goes through questions array and prints out each question
questions.forEach(function(insertQuestion){
  var questElement = document.createElement("h2");
  questElement.textContent = insertQuestion.quest;
  document.body.appendChild(questElement);


  //put correct answers in
  var ansElement = document.createElement("p");
  ansElement.textContent = insertQuestion.rightAnswer;
  document.body.appendChild(ansElement);

  //puts in wrong answer A
  var wrongAElement = document.createElement("p");
  wrongAElement.textContent = insertQuestion.wrongAnswerA;
  document.body.appendChild(wrongAElement);

  //puts in wrong answer B
  var wrongBElement = document.createElement("p");
  wrongBElement.textContent = insertQuestion.wrongAnswerB;
  document.body.appendChild(wrongBElement);
});


//display answers
