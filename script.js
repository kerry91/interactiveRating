const ball = document.querySelectorAll('.ball');

for (let element of ball) {
    element.addEventListener('click', () => {
        element.classList.toggle('ball-placeholder-a')
    })
}


const allNumbers = document.querySelectorAll(".ball")
allNumbers.forEach((ball) => {
  ball.addEventListener('click', () => {
      rateNum.innerHTML = ball.innerHTML;
  })
})

function submit(){
    document.getElementById("start-panel").style.visibility = "hidden";
    document.getElementById("thanks-panel").style.visibility = "visible";

}
