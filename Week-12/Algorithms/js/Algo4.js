//let input = prompt("Please enter a number");

let input = 10

for(let i =1; i<input; i++){
	if ((i % 3 == 0) && (i % 5 == 0)){
		console.log("Fizz buzz")
	}else if (i % 3 == 0) {
		console.log("Fizz")
	}else if (i % 5 == 0) {
		console.log("buzz")
	}else {
		console.log("Not fizzy or buzzy")
	}
}
