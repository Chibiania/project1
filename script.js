//displaying the answer

//need to cycle through the questions, determine which is the question being worked on, and display answers appropriately

//for Q1
//is there a way to cycle through sections with switch or is if the best solution?
var quest = document.querySelector("section:nth-child(1)");
var ans = document.querySelector(".answer");
var wron = document.querySelector("section:nth-child(1)").querySelectorAll(".wrong");
var allWron = document.querySelectorAll(".wrong")[1];
var justWron = document.querySelector(".wrong");

if(allWron.addEventListener("click", displayAnswer)){
  //wrongAnswer();
  // console.log("msbjafbj");
  // wrongAnswerB();
}
else if (justWron.addEventListener("click", displayAnswer)){
  // wrongAnswer();
}
//allWron.addEventListener("click", displayAnswer) || justWron.addEventListener("click", displayAnswer);


//points to last answer
function wrongAnswerB(){
  var newP = document.createElement("p");
  var someText = document.createTextNode("^^^^^^^^You choose this answer");
  newP.appendChild(someText);

 allWron.parentNode.insertBefore(newP, allWron.nextSibling);

  //document.section.insertBefore(newP, allWron);

}

function displayAnswer(){
  //incorrect answers
  /*wron isn't an array but a html collection that is array like
  //   [] is needed to gain access to forEach; .call changes this from [] to wron*/
  // [].forEach.call(wron, function(wron){
    wron.style.color = "red";
  // })
  //correct answers
  ans.style.color = "green"; //change to hex color

  //wrongAnswerB();
}

//make a play again function
