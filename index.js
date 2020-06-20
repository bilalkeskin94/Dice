let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImg1 = "dice" + randomNumber1 + ".png";
let randomImg2 = "dice" + randomNumber2 + ".png";
let imgSrc1 = "images/" + randomImg1;
let imgSrc2 = "images/" + randomImg2;
document.querySelector(".img1").setAttribute("src", imgSrc1);
document.querySelector(".img2").setAttribute("src", imgSrc2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It Is A Draw!";
}
