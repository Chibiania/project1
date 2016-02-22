//
// var questions = [
//   {question: "What color is the sky?", rightAnswer: "Blue", wrongAnswer: "Jose"}
// ]
// questions.forEach(function(question){
//   var element = document.createElement("DIV");
//   element.textContent = question.question;
//   document.body.appendChild(element);
// });

var questions = [
  {
    quest: "Q1",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q2",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q3",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q4",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q5",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q6",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q7",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q8",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q9",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  },
  {
    quest: "Q10",
    rightAnswer: "Correct",
    wrongAnswer: "Wrong"
  }
]

//goes through questions array and prints out each question
questions.forEach(function(insertQuestion){
  var newElement = document.createElement("section");
  newElement.textContent = insertQuestion.quest;
  document.body.appendChild(newElement);
});
