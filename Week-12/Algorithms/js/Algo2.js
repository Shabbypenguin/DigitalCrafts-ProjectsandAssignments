let numbers = [6,3,5,2,10]
sortednumbers = numbers.slice()


function sortNumbers(numbers, sortednumbers) {
	let count = 0
	let i = 0
	while (count == 0){
		if (i >-1){
			//Lets check if the value of numbers at location i is lower than its next spot in the array
			if (numbers[i] > numbers[i+1]){
				//We need to save the higher value
				let tempNumber = numbers[i+1]
				//this moves the lower value back on up
				numbers[i+1] = numbers[i]
				//Now we need to set the higher value back to the original spot
				numbers[i] = tempNumber
				i++
			}else{
				//the next number  isnt any bigger, lets move on 
				i++
			}
			if (i==numbers.length){
				let test = 0
				// Check if all items exist and are in the same order
				for (var n = 0; numbers.length > n; n++) {
					if (numbers[n] == sortednumbers[n]) {
						test++
					}
					if (test == numbers.length){
						count++
						console.log(`Finishing out at ${numbers}`)
					}
					
				}
				i=0
			}
		}
	}
}
console.log(`Starting out at ${numbers}`)
sortNumbers(numbers, sortednumbers.sort(function(a, b){return a-b}))