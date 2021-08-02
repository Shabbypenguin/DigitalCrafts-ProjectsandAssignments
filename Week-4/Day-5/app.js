const slideshowImages = ["images/poster1.png", "images/poster2.png", "images/poster3.png", "images/poster4.png", "images/poster5.png", ]
let i = 0

window.setInterval(function () {
	let newPoster = document.getElementById("posterHome")
	newPoster.src = slideshowImages[i]
	i++
	if (i==4){
		i=0
	}
}, 2000)

window.setInterval(function () {
	window.alert("Hello!")
}, 4000)