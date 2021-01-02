var size = 7;
for (var i = 0; i < size; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var text = this.innerText;
    makeSound(text);
    buttonAnimation(text);
  });
}

function makeSound(text) {
  switch (text) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      break;
  }
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(text) {
  var button = document.querySelector("." + text);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
