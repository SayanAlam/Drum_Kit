
// Detecting button pressed

for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInerHTML = this.innerHTML;
   makeSound(buttonInerHTML);
   buttonAnimation(buttonInerHTML);
  });
}

// Detecting keyword presed

document.addEventListener("keydown",function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
    var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
      break;
    case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;
    case "d":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
      break;
    case "j":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
      break;
    case "k":
    var crash=new Audio("sounds/crash.mp3");
   crash.play();
      break;
    case "l":
    var kick=new Audio("sounds/kick-bass.mp3");
     kick.play();
      break;

    default:

  }
}

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}


// document.querySelectorAll(".drum")[0].addEventListener("click",function (){
//   var tom1=new Audio("sounds/tom-1.mp3");
//   tom1.play();
// });
// document.querySelector(".w").addEventListener("click",function (){
//   var tom1=new Audio("sounds/tom-1.mp3");
//   tom1.play();
// });
// document.querySelectorAll(".a").addEventListener("click",function (){
//   var tom2=new Audio("sounds/tom-2.mp3");
//   tom2.play();
// });
// document.querySelector(".s").addEventListener("click",function (){
//   var tom3=new Audio("sounds/tom-3.mp3");
//   tom3.play();
// });
// document.querySelector(".d").addEventListener("click",function (){
//   var tom4=new Audio("sounds/tom-4.mp3");
//   tom4.play();
// });
// document.querySelector(".j").addEventListener("click",function (){
//   var snare=new Audio("sounds/snare.mp3");
//   snare.play();
// });
// document.querySelector(".k").addEventListener("click",function (){
//   var crash=new Audio("sounds/crash.mp3");
//   crash.play();
// });
// document.querySelector(".l").addEventListener("click",function (){
//   var kick=new Audio("sounds/kick-bass.mp3");
//   kick.play();
// });


// document.addEventListener("keydown", function() {
//   alert("key presed");
// });
