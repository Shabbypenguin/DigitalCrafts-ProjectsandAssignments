const stocksUL = document.getElementById("stockList")
const stockbutton = document.getElementById("getprices")

function getStockList(stockprices) {
	let getnewstocks = new XMLHttpRequest()
	getnewstocks.open('GET', "https://endurable-bead-polo.glitch.me/stocks")
	getnewstocks.send()
	
	getnewstocks.addEventListener('load', function () {
		let response = JSON.parse(this.responseText)
		let stockresults = response.data
		console.log(stockresults)
		stockprices(stockresults)
	})
	
}

function displaystocks(stockresults) {
	const stocks = stockresults.map(function () {
		return `<li>${stock.title} </li>`
	})
	stocksUL.innerHTML =  stockresults.join("")
}


getStockList(function(stockresults) {
	displaystocks(stockresults)
})

//stockbutton.addEventListener('click', function (e) {
//	getStockList()
//})