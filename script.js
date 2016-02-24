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
    wrongAnswerA: "Minerva McGonagall: cat (Tabby), Albus Dumbledore: phoenix (Firetail), Rufus Scrimgeour:(!)(), and Alastor Moody: ferret (!)",
    wrongAnswerB: "Lucius Malfoy: snake (!), Bartemius Crouch, Jr.: fox (Sly), Severus Snape: doe (!), and Regulus Black: (!) (!)"
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
var i=1;

//goes through questions array and prints out each question
questions.forEach(function(insertQuestion){

  //empty div
  var element = document.createElement("div");
  document.body.appendChild(element);
  element.setAttribute("id", "div"+i);
  //element.addEventListener("click", colorChange);

  //questions
  var questElement = document.createElement("h2");
  questElement.innerHTML = insertQuestion.quest;
  document.getElementById("div"+i).appendChild(questElement);

  //button section
  var buttonSection = document.createElement("section");
  document.body.appendChild(buttonSection);
  buttonSection.setAttribute("id", "buttons"+i);
  document.getElementById("div"+i).appendChild(buttonSection);
  $(buttonSection).one("click", colorChange);

  //right button = correct answer
  var ansElement = document.createElement("button");
  ansElement.textContent = insertQuestion.rightAnswer;
  ansElement.setAttribute("class", "correct");
  ansElement.setAttribute("data-right", "correct");
  document.getElementById("buttons"+i).appendChild(ansElement);

  //wrong button A = wrong answer A
  var wrongAElement = document.createElement("button");
  wrongAElement.textContent = insertQuestion.wrongAnswerA;
  wrongAElement.setAttribute("class", "wrongA");
  wrongAElement.setAttribute("data-wrong", "incorrect");
  wrongAElement.setAttribute("type", "radio");
  document.getElementById("buttons"+i).appendChild(wrongAElement);

  //wrong button B = wrong answer B
  var wrongBElement = document.createElement("button");
  wrongBElement.textContent = insertQuestion.wrongAnswerB;
  wrongBElement.setAttribute("class", "wrongB");
  wrongBElement.setAttribute("data-wrong", "incorrect");
  wrongBElement.setAttribute("type", "radio");
  document.getElementById("buttons"+i).appendChild(wrongBElement);
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

      //link yes to score somehow

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

  //make it so that whatever answer is picked, THAT is the one that changes color
  this.querySelector(".correct").style.backgroundColor = "rgba(0, 128, 0, .65)";
  this.querySelector(".wrongA").style.backgroundColor = "rgba(255, 0, 0, .65)";
  this.querySelector(".wrongB").style.backgroundColor = "rgba(255, 0, 0, .65)";

  if((this.querySelector(".correct").dataset.right)=="correct"){

    yes++;
    console.log("Yes: " + yes);

  }else if((this.querySelector(".wrongA").dataset.wrong)=="incorrect"){
    console.log("I'm the wrongA answer!");
    
  }else if((this.querySelector(".wrongB").dataset.wrong)=="incorrect"){
    console.log("I'm the wrongB answer!");
  }
  //idk if this can get the increments right or not

  //   $(this.querySelector(".correct")).click(function(){
  //   if($(this).prop("class") == "correct"){
  //    right();
  //   }
  //   else {
  //     console.log("nah b");
  //   }
  //  });

  //use innerText or innerHtml to compare clicked values
}

var yes = 0;
function right(){

  //if .correct is chosen, increment yes
  //if(document.querySelector(".correct").innerText==questions[0].rightAnswer){

  if((document.querySelector(".correct").dataset.correct)=="correct"){


    yes++;
    console.log("Yes: " + yes);
  }
  //return yes;
  //}
}

//questions should be displayed randomly

//make a play again function
