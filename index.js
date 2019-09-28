var gamePattern = [];
var userPattern = [];
var buttonColors = ["green","red","yellow","blue"];
var level = 0;
var counter = 0;


$(document).keypress(function(){
  if($("h1").text() == "Press A Key to Start" || $("h1").text() == "Game Over Press Any Key to try again"){
    nextColor();
  }
});
$(".btnn").click(function(){
  $(document).keypress();
});

$(".btn").click(function(){
  var userChosenColor = this.id;
  userPattern.push(userChosenColor);
  var sounds = userChosenColor+".mp3";
  playSound(sounds);
  animatePress(userChosenColor);
  checkAnswer(userPattern.length);
});

function checkAnswer(currentLevel){
  if(userPattern[currentLevel-1] == gamePattern[currentLevel-1]){
    if(currentLevel == gamePattern.length){
      userPattern = [];
      setTimeout(nextColor,1000);
    }
  }
 else{
   var wr = "wrong.mp3";
   playSound(wr);
   $("body").addClass("game-over");
   setTimeout(function(){
  $("body").removeClass("game-over");
      }, 500);
   level = 0;
   userPattern = [];
   gamePattern = [];
   $("h1").text("Game Over Press Any Key to try again");
 }
}

function nextColor(){
  var i = nextSequence();
  gamePattern.push(buttonColors[i]);
  var color = "#"+buttonColors[i];
  var sound = buttonColors[i]+".mp3";
  $(color).fadeOut(100).fadeIn(100);
  playSound(sound);
}

function nextSequence(){
  var randomNumber = Math.round(Math.random()*3);
  level++;
  $("h1").text("Level "+level);
  return randomNumber;
}

 function playSound(name){
   var audio = new Audio("sounds/"+name);
   audio.play();
 }

function animatePress(name){
  var x = name;
  switch (x) {
    case "green":
      $(".green").addClass("pressed");
      setTimeout(function(){
        $(".green").removeClass("pressed");
      },100);
      break;
    case "red":
      $(".red").addClass("pressed");
      setTimeout(function(){
        $(".red").removeClass("pressed");
      },100);
    break;
    case "blue":
      $(".blue").addClass("pressed");
      setTimeout(function(){
        $(".blue").removeClass("pressed");
      },100);
    break;
    case "yellow":
      $(".yellow").addClass("pressed");
      setTimeout(function(){
        $(".yellow").removeClass("pressed");
      },100);
    break;
    default:

  }

}
//if(number == gamePattern.length){
//  number++;
//  setTimeout(nextColor,1000);
//}
