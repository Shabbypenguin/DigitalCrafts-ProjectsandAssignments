import React, {Component } from 'react'

class Stepper extends Component {
	
	constructor(){
		super()
		this.state = {
			counter: 0
		}
	}
	
	subtractCounter = () =>{
		this.setState({
			counter: this.state.counter - 1
		})
	}
	
	addCounter = () =>{
		this.setState({
			counter: this.state.counter + 1
		})
	}
	render() {
		return <div>
		<button onClick = {this.subtractCounter}>-</button>{this.state.counter}<button onClick = {this.addCounter}>+</button>
		</div>
	}
}
export default Stepper