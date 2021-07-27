const submitURL = document.getElementById("submit")
submitURL.addEventListener("click", addImage)
const urlString = document.getElementById("imageURL")
const namesUL = document.getElementById("namesUL")

function addImage() {
	
	const listItem = document.createElement("li")
	const imageSpot = document.createElement("img")
	imageSpot.src = urlString.value
	listItem.appendChild(imageSpot)
	
	document.querySelector('ul').appendChild(listItem)
}
