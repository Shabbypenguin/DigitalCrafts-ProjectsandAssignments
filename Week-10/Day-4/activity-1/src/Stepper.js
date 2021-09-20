import React, {useState } from 'react'

function Stepper() {
	
	const bookItems = prop.books.map(book){
		return <li>{book}</li>
	}
	
	
	const [count, setCount] = useState(0)
	
	const handleIncrement =() => {
		setCount(count+1)
	}
	const handleSubtract =() => {
		setCount(count-1)
	}
	
	return(
		<div>
		<h1>
		<button onClick = {handleSubtract}><h1> -</h1></button>
		{count}
		<button onClick = {handleIncrement}><h1> +</h1></button>
		</h1>
		<UsersList
		</div>
	)
}

export default Stepper