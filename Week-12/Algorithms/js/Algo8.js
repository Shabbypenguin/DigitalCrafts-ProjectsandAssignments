function reduceAddition(input) {
	console.log(input)
	let output=input
	let i=input-1
	while (i>0) {
		console.log(`${output} + ${i} = `)
		output+=i
		i--
		console.log(output)
	}
	console.log(output)
}

reduceAddition(7)