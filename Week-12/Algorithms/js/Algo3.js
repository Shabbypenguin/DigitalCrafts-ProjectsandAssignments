let input = prompt("Please enter a number");

if ((input % 3 == 0) && (input % 5 == 0)){
	console.log("Fizz buzz")
}else if (input % 3 == 0) {
	console.log("Fizz")
}else if (input % 5 == 0) {
	console.log("buzz")
}else {
	console.log("Not fizzy or buzzy")
}