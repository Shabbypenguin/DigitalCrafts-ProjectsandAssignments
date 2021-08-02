const dogUL = document.getElementById("doglist")
const factButton = document.getElementById("facts")

window.addEventListener('load', function (e) {
	let factChecker = new XMLHttpRequest()
	
	factChecker.open('GET', 'https://island-bramble.glitch.me/dog-facts')
	
	console.log(factChecker)
	factChecker.addEventListener('load', function () {
		let results = JSON.parse(factChecker.responseText)
		const dogfacts = results.map(function(dog){

			const Item = `<li>${dog.fact}</li>`
			return Item
		})
		dogUL.innerHTML = dogfacts.join("")
	})
	factChecker.send()
})