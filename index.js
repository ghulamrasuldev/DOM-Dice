var randOne = Math.random()
randOne = (randOne*6) + 1
randOne = Math.floor(randOne)

var randTwo = Math.random()
randTwo = (randTwo*6) + 1
randTwo = Math.floor(randTwo)
document.querySelector(".img1").setAttribute("src", "/images/dice"+randOne+".png");
document.querySelector(".img2").setAttribute("src", "/images/dice"+randTwo+".png");


if (randOne>randTwo){
  document.querySelector("#winner-dice-right").style.visibility = "hidden";
  document.querySelector("#winner").innerHTML = "Player 1 Won!"
}else{
  document.querySelector("#winner-dice-left").style.visibility = "hidden";
  document.querySelector("#winner").innerHTML = "Player 2 Won!"
}
