const rollButton = document.getElementsByTagName("button")[0];
const text = document.getElementById("dice");

rollButton.addEventListener("click", function() {
  //generate a random number between 1 and 6 inclusive
  let result = Math.floor((Math.random()*6)+1);
  
  //check what the number is and change the image of the dice accordingly
  if(result==1) {
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png)";
  } else if(result==2) {
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png)";
  } else if(result==3){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png)";
  } else if(result==4){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png)";
  } else if(result==5){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png)";
  } else if(result==6){
    text.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png)";
  }
  
  //set the text of the dice box to the random number
  text.innerHTML = result;
});
console.log(result);
