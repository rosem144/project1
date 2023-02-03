const rollButton = document.getElementsByTagName("button")[0];
let result = Math.floor((Math.random()*6)+1);
rollButton.addEventListener("click", function() {
  document.getElementById("dice").innerHTML = result;
});
console.log(result);
