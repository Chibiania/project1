//all the questions
var questions = [
  {
    quest: "Year 1: What does the Mirror of Erised's inscription mean?" +"<br />"+ "\"Erised stra ehru oyt ube cafru oyt on wohsi.\"",
    rightAnswer: "I show not your face but your heart's desire",
    wrongAnswerA: "Come, I will show you all the things you wish for",
    wrongAnswerB: "This is not a mirror for viewing one's self, but to bestow relevation"
  },
  {
    quest: "Year 2: Who is the heir of Slytherin?",
    rightAnswer: "Tom Morvolo Riddle",
    wrongAnswerA: "Harry Potter",
    wrongAnswerB: "Draco Malfoy"
  },
  {
    quest: "Year 3: Who are the Marauders and what are their animagus (or animal) form?",
    rightAnswer: "Sirius Black: dog (Padfoot), James Potter: stag (Prongs), Peter Pettigrew: rat (Wormtail), and Remus Lupin: werewolf (Moony)",
    wrongAnswerA: "Minerva McGonagall: cat (Tabby), Albus Dumbledore: phoenix (Firetail), Rufus Scrimgeour: beetle (Big Man), and Alastor Moody: ferret (Red Eye)",
    wrongAnswerB: "Lucius Malfoy: snake (Silver), Bartemius Crouch, Jr.: fox (Sly), Severus Snape: doe (Whitetail), and Regulus Black: crow (Black)"
  },
  {
    quest: "Year 4: Who taught Defense Against the Dark Arts?",
    rightAnswer: "Bartemius Crouch, Jr.",
    wrongAnswerA: "Alastor Moody",
    wrongAnswerB: "Severus Snape"
  },
  {
    //
    quest: "Year 5: Who does this apply to?" + "<br />"+ "<br />"+ "\"The one with the power to vanquish the Dark Lord approaches... born to those who have thrice defied him, born as the seventh month dies... and the Dark Lord will mark him as his equal, but he will have power the Dark Lord knows not... and either must die at the hand of the other for neither can live while the other survives... the one with the power to vanquish the Dark Lord will be born as the seventh month dies....\"" +"<br />"+ "—Sybill Trelawney's prophecy made to Albus Dumbledore",
    rightAnswer: "Harry Potter and Neville Longbottom",
    wrongAnswerA: "Harry Potter",
    wrongAnswerB: "Neville Longbottom"
  },
  {
    quest: "Year 6: How did Draco Malfoy go about completing his task?",
    rightAnswer: "Cursed necklace, poisoned chocolate, and at wand point",
    wrongAnswerA: "Skipping class, bullying Griffindors, and crashing Horace Slughorn's Christmas party",
    wrongAnswerB: "Quitting quidditch, skipping meals, and crying to Moaning Myrtle"
  },
  {
    quest: "Year 7 (Part 1): What was the name of the pirate radio program that opposed Lord Voldemort?",
    rightAnswer: "Potterwatch",
    wrongAnswerA: "Wizarding Wireless Network",
    wrongAnswerB: "The Order of the Phoenix"
  },
  {
    quest: "Year 7 (Part 2): How did the Golden Trio infilterate Hogwarts under Death Eater rule?",
    rightAnswer: "A tunnel from Aberforth Dumbledore's Hogs Head Inn leads to the Room of Requirement",
    wrongAnswerA: "They apparated into Hogsmeade and walked up to the castle",
    wrongAnswerB: "They were captured by Death Eater and taken to the castle, but they escaped imprisonment"
  },
  {
    quest: "Bonus: Name the Weasley family",
    rightAnswer: "Arthur, Molly, William, Charlie, Percy, Fred, George, Ron, and Ginerva",
    wrongAnswerA: "Arthur, Molly, Ron, Ginerva, Harry, and Hermoine",
    wrongAnswerB: "Arthur, Molly, Percy, Fred, George, Ron, and Ginerva"
  },
  {
    quest: "Bonus: Name the horcruxes",
    rightAnswer: "Hufflepuff's cup, Slytherin's locket, Ravenclaw's lost diadem, Morvolo Gaunt's riing, Tom Riddle's Diary, Nagini, and Harry Potter",
    wrongAnswerA: "Godric Griffindor's sword, Slytherin's locket, Fawkes, Hermoine's time turner, Albus Dumbledore's pensieve, Triwizard Trophy, and the Kinght Bus",
    wrongAnswerB: "Dobby, Kreacher, Winky, Hokey, Hooky, Manker, and Wockey"
  }
];
/* This would be a great thing to have in a separate JSON file.
You'd need to use jQuery's `$.getJSON` to load it.
That would be with AJAX, with is a little strange, and we'll get to later.
But it may be a fun challenge for now!
*/
var i=1;

//welcome screen
var first = document.createElement("div");
document.body.appendChild(first);
first.setAttribute("id", "numberOne");

var welcome1 = document.createElement("h2");
welcome1.textContent = "Harry Potter Trivia Quiz";
document.getElementById("numberOne").appendChild(welcome1);

var welcome2 = document.createElement("p");
welcome2.innerHTML = "Test out your Harry Potter knowledge! <br> Click the next button to begin.";
document.getElementById("numberOne").appendChild(welcome2);


//goes through questions array and prints out each question
questions.forEach(function(insertQuestion){

  //empty div
  var element = document.createElement("div");
  document.body.appendChild(element);
  element.setAttribute("id", "div"+i);

  //questions
  var questElement = document.createElement("h2");
  questElement.innerHTML = insertQuestion.quest;
  document.getElementById("div"+i).appendChild(questElement);

  //button section
  var buttonSection = document.createElement("section");
  document.body.appendChild(buttonSection);
  buttonSection.setAttribute("id", "buttons"+i);
  document.getElementById("div"+i).appendChild(buttonSection);

  //right button = correct answer
  var ansElement = document.createElement("button");
  ansElement.textContent = insertQuestion.rightAnswer;
  ansElement.setAttribute("class", "correct");
  ansElement.setAttribute("data-right", "correct");
  document.getElementById("buttons"+i).appendChild(ansElement);
  $(ansElement).one("click", colorChange);

  //wrong button A = wrong answer A
  var wrongAElement = document.createElement("button");
  wrongAElement.textContent = insertQuestion.wrongAnswerA;
  wrongAElement.setAttribute("class", "wrongA");
  wrongAElement.setAttribute("data-notA", "incorrect");
  wrongAElement.setAttribute("type", "radio");
  document.getElementById("buttons"+i).appendChild(wrongAElement);
  $(wrongAElement).one("click", colorChange);

  //wrong button B = wrong answer B
  var wrongBElement = document.createElement("button");
  wrongBElement.textContent = insertQuestion.wrongAnswerB;
  wrongBElement.setAttribute("class", "wrongB");
  wrongBElement.setAttribute("data-notB", "incorrect");
  wrongBElement.setAttribute("type", "radio");
  document.getElementById("buttons"+i).appendChild(wrongBElement);
  $(wrongBElement).one("click", colorChange);

  i++;
});
/* Instead of basically writing a bunch of HTML in your Javascript file,
what if you could get the inner HTML of a "template" div and use that instead?
*/

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

      var scores = document.createElement("h2");
      scores.textContent = "Score";
      document.getElementById("score").appendChild(scores);

      var results = document.createElement("p");
      results.textContent = "Your score is: " + yes;
      results.setAttribute("id", "result");
      document.getElementById("score").appendChild(results);

      //replay option
      var reloading = document.createElement("button");
      reloading.textContent = "Click here to play again";
      reloading.setAttribute("id", "again");
      document.getElementById("score").appendChild(reloading);
      reloading.onclick = function(){
        window.location.reload();
      };
    }
    else {
      var questionElement = $($questions.get(currentQuestion))

      var buttonSwitch = document.querySelector("section#buttons" + currentQuestion);
      for (var i = buttonSwitch.children.length; i >= 0; i--) {
        buttonSwitch.appendChild(buttonSwitch.children[Math.random() * i | 0]);
      }
      questionElement.fadeIn();

      clicks = 0;
    }
  });
});

var clicks = 0;
var yes = 0;

//do things to colors based on click action
//when something is clicked, change the color
function colorChange(){

  if(clicks < 1){
    if((this.getAttribute("data-right")=="correct")){
      this.style.backgroundColor = "rgba(0, 128, 0, .65)";
      yes++;
      clicks++;
      //if clicks equals one then stop
      event.stopPropagation();
    }
    else if(((this.getAttribute("data-notA"))=="incorrect")||((this.getAttribute("data-notB"))=="incorrect")){
      this.style.backgroundColor = "rgba(255, 0, 0, .65)";

      clicks++;
      event.stopPropagation();
    }
  }
}
