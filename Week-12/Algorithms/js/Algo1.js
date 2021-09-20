let numbers = [2, 3, 4, 5, 6, 10, 15, 20, 30, 18, 20]

function findMean(numbers) {
	let sum = 0
	for (let i =0; i<numbers.length; i++){
		sum += numbers[i]
	}
	let mean = sum/numbers.length
	console.log(`The mean is ${mean}`)
}

function findMedian(numbers) {
	let middle = numbers.length/2
	let median = 0
	if (middle &1){
		console.log(numbers)
		median = (numbers[Math.round(middle)] + numbers[Math.round(middle)-1])/2
	}else {
		median = numbers[Math.round(middle)-1]
	}
	
	
	console.log(`The median is ${median}`)
}

function findMode(numbers) {
	let count = 0
	let mode = 0
	for (let i =0; i<numbers.length; i++){
		//no clue
	}
	console.log(`The mean is ${mode}`)
}


findMean(numbers)
findMedian(numbers.sort(function(a, b){return a-b}))