import React, {Component } from 'react'

class Stepper extends Component {
	
	constructor(){
		super()
		this.state = {
			isOn: false
		}
	}
	
	toggleSwitch = () =>{
		this.setState({
			isOn: !this.state.isOn
			
			
		})
	}
	

	render() {
		return <div>
		<button onClick = {this.toggleSwitch}>{this.state.isOn ? "ON" : "OFF"}</button>
		</div>
	}
}
export default Stepper