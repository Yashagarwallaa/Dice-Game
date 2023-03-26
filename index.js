var randomNumber1 =  Math.random(randomNumber1); 
randomNumber1 = randomNumber1*5 + 1;
randomNumber1 =  Math.round(randomNumber1);

var s = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", s );
 
var randomNumber2 =  Math.random(randomNumber2); 
randomNumber2 = randomNumber2*5 + 1;
randomNumber2 =  Math.round(randomNumber2);
var t = "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", t);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 WINS";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 WINS";
}
else {
    document.querySelector("h1").innerHTML = "DRAW!";
}
