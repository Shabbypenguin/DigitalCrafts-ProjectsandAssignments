const submitName = document.getElementById("submitFullName")
submitName.addEventListener("click", submitNameClicked)
const clearText = document.getElementById("firstName")
clearText.addEventListener("click", clearTextBox)
const clearText2 = document.getElementById("lastName")
clearText2.addEventListener("click", clearTextBox2)

function submitNameClicked() {
	let fName = document.getElementById("firstName").value
	let lName = document.getElementById("lastName").value
	document.getElementById("headerName").innerHTML = fName + " " + lName
}

function clearTextBox() {
	if (clearText.value == "First Name") {
		document.getElementById("firstName").value = ""
	}
}
function clearTextBox2() {
	if (clearText2.value == "Last Name") {
	document.getElementById("lastName").value = ""
	}
}