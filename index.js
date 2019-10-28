document.querySelector(".start").addEventListener("click", function(){
var random1=Math.floor(Math.random()*6 +1);
var image1="images/dice"+random1+".png";
var random2=Math.floor(Math.random()*6 +1);
var image2="images/dice"+random2+".png";
if(random1>random2){
  document.getElementById("heading").innerHTML="Player 1 Wins!";
}else if(random1<random2){
  document.getElementById("heading").innerHTML="Player 2 Wins!";
}else{
    document.getElementById("heading").innerHTML="It's a Draw!";
}
document.getElementById("img1").src=image1;
document.getElementById("img2").src=image2;
document.querySelector(".start").innerHTML="Play Again";
});
