const submitName = document.getElementById("submitFullName")
submitName.addEventListener("click", submitNameClicked)

function submitNameClicked() {
	let fName = document.getElementById("firstName").value
	let lName = document.getElementById("lastName").value
	document.getElementById("headerName").innerHTML= `${lName}, ${fName}`
}