// document.querySelector(".img1").setAttribute("src","./images/dice6.png");
// document.querySelector(".img2").setAttribute("src","./images/dice6.png");

var randomNumber1=Math.floor(Math.random()*6)+1;
// return randomNumber1;
var randomDice1="images/dice"+randomNumber1+".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src",randomDice1);

var randomNumber2=Math.floor(Math.random()*6)+1;
// return randomNumber1;
var randomDice2="images/dice"+randomNumber2+".png";
var image2=document.querySelector(".img2");
image2.setAttribute("src",randomDice2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="player2 wins";
}
else
{
    document.querySelector("h1").innerHTML="draw";
}
function reloadPage() {
    location.reload();
}