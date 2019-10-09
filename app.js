let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_h2=document.querySelector(".result >h1");
const rock_div=document.getElementById("r");
const scissors_div=document.getElementById("s");
const paper_div =document.getElementById("p");

function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function win(userChoice,ComputerChoice){
  userScore++;

  document.getElementById('u1').innerHTML = userScore;
  document.getElementById('r1').innerHTML= userChoice + " beat " + ComputerChoice + ". You Win!";
}
function lose(userChoice,ComputerChoice){
  computerScore++;
  document.getElementById('u2').innerHTML = computerScore;
  document.getElementById('r1').innerHTML= ComputerChoice + " beat " + userChoice + ". You Lose!";
}
function draw(userChoice,ComputerChoice){
  console.log("U draw");
  document.getElementById('u1').innerHTML = userScore;
  document.getElementById('r1').innerHTML= ". You draw!...Try Again";
}


function game(userChoice){
  const ComputerChoice=getComputerChoice();
  switch (userChoice+ComputerChoice){
    case "rs":
    case "pr":
    case "sp":
     win(userChoice,ComputerChoice);
     break;
   case "rp":
   case "ps":
   case "sr":
     lose(userChoice,ComputerChoice);
     break;
  case "rr":
  case "pp":
  case "ss":
    draw();
    break;
  }

}
function main(){
  rock_div.addEventListener('click',function(){
    game("r");
  })
  paper_div.addEventListener('click',function(){
    game("p");
  })
  scissors_div.addEventListener('click',function(){
    game("s");
  })

}
main()
