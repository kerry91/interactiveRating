// enables the submit button once a ball rating has been selected
var iv = 1;
function ballStyle(iv) {
  var ballRate = document.querySelectorAll(".ball-container .ball");

  for (var i = 0; i < ballRate.length; i++) {
      ballRate[i].classList.remove("ballActive");

  }
  ballRate[iv-1].classList.add("ballActive");

  var remove = document.querySelector(".submitBtn").removeAttribute("disabled");
console.log(remove);
}

//Takes the ball rating and adds it to the thank you page span text
const allNumbers = document.querySelectorAll(".ball");
allNumbers.forEach((ball) => {
  ball.addEventListener('click', () => {
      rateNum.innerHTML = ball.innerHTML;
  })
})

//hides the start-panel and then shows the thanks-panel
function submitGo(){
  document.getElementById("start-panel").style.visibility = "hidden";
  document.getElementById("thanks-panel").style.visibility = "visible";
}
