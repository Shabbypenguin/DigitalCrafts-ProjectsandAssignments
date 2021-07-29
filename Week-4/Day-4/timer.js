const startTimer = document.getElementById("start")
startTimer.addEventListener("click", countdown)

function countdown() {
	let timeAmount = document.getElementById("timerCount").value * 1000
	timeRemaining = timeAmount/1000
	setInterval(function () {
		if tim
		setTimeout(function(){ alert("Timer finished!"); }, timeAmount);
		timeRemaining--
		document.getElementById("countdown").innerHTML = timeRemaining
	}, timeAmount)
	
	console.log(timeAmount)
}