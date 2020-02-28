
/* Define variable that will adjust */
var user_score=0 ;
var robot_score=0;
var userscor_span = document.querySelector("#user_score");
var robotscor_span =document.querySelector("#robot_score");
var scoreBoard =document.querySelector(".score-board");
var resultBoard = document.querySelector(".result");
var rock=document.querySelector("#rock");
var paper=document.querySelector("#paper");
var scissors=document.querySelector("#scissors");

/*function get random input from Robot*/
function robot(){
  choices=["rock", "paper", "scissors"];
  var randomchoice = Math.floor(Math.random()*3);
  robot_choice =choices[randomchoice];
  return robot_choice;
}

/* Function action when user win */
function win(user, robot){
  user_choice_result=
  resultBoard.innerText = "You choose " + user +" And Robot choose "+ robot+" You Win";
  user_score++;
  userscor_span.innerText=user_score;
}
/* Function action when user lose */

function lose(user, robot){
  resultBoard.innerText =  "You choose " + user +" And Robot choose "+ robot+" Roboy Win";
  robot_score++;
  robotscor_span.innerText =robot_score;
}
/* Function action when its draw */
function draw(user, robot){
  resultBoard.innerText =  "You choose " + user +" And Robot choose "+ robot+" It's draw";

}

/* Function compare user to robot option */
function usercomparetorobot(user_choice){
  var fromrobot=robot();
  switch(user_choice+fromrobot){
    case"paperrock":
    case"rockscissors":
    case"scissorspaper":
    win(user_choice, fromrobot);
     break;
     case"rockpaper":
     case"scissorsrock":
     case"paperscissor":
    lose(user_choice, fromrobot);
     break;
     case"rockrock":
     case"paperpaper":
     case"scissorscissor":
     draw(user_choice, fromrobot);
    return user_choice;
  }
}

/*function get input from user by user click  and all the operation is happened here */
function maingame(){
rock.addEventListener("click", function(){
   usercomparetorobot("rock");
    });
paper.addEventListener("click", function(){
  usercomparetorobot("paper");
});

scissors.addEventListener("click", function(){
   usercomparetorobot("scissors");
    });

}
 /*call function */
maingame();
