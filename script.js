const rollButton = document.getElementsByTagName("button")[0];
const text = document.getElementById("dice");

rollButton.addEventListener("click", function() {
  //generate a random number between 1 and 6 inclusive
  let result = Math.floor((Math.random()*6)+1);
  
  //check what the number is and change the image of the dice accordingly
  if(result==1) {
    text.style.image = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/557px-Dice-1-b.svg.png)";
  } else if(result==2) {
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dice-2a-b.svg/120px-Dice-2a-b.svg.png)";
  } else if(result==3){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/120px-Dice-3-b.svg.png)";
  } else if(result==4){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1024px-Dice-4-b.svg.png)";
  } else if(result==5){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2048px-Dice-5-b.svg.png)";
  } else if(result==6){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/120px-Dice-6-b.svg.png)";
  }
  
  //set the text of the dice box to the random number
  //text.innerHTML = result;
});
console.log(result);
