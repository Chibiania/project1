//displaying the answer
var ans = document.querySelector(".answer");
var wron = document.querySelectorAll("p");

ans.addEventListener("click", displayAnswer);



function displayAnswer(){
  //incorrect answers
  /*wron isn't an array but a html collection that is array like
    [] is needed to gain access to forEach; .call changes this from [] to wron*/
  [].forEach.call(wron, function(wron){
    wron.style.color = "red";
  })
  //correct answers
  ans.style.color = "green"; //change to hex color
}

//make a play again function
