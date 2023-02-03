const rollButton = document.getElementsByTagName("button")[0];
rollButton.addEventListener("click", function() {
  let result = Math.floor((Math.random()*6)+1);
  document.getElementById("dice").innerHTML = result;
});
console.log(result);
