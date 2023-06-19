var randomNumber1=Math.floor(Math.random()*6+1); // generate random number 1 to 6 for Player1
var randomDiceImage1="images/dice"+randomNumber1+".png"; // code the corresponding image for that random number
document.querySelector(".img1").setAttribute("src", randomDiceImage1); //change the image1 depending on the random number

var randomNumber2=Math.floor(Math.random()*6+1); // generate random number 1 to 6 for Player1
var randomDiceImage2="images/dice"+randomNumber2+".png"; // code the corresponding image for that random number
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); //change the image1 depending on the random number. Just a different way to code with "querySelectorAll"

// this part will give the feedback, who wins:
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}