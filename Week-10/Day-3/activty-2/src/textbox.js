import React, {Component } from 'react'

class TextBox extends Component {
	
	constructor(){
		super()
		this.state = {
			fullname: '',
			favoritePlace: ''
			output: ''
		}
	}
	
	handleOnChange = (e) =>{
		console.log(this.state)
		this.setState({
			fullname: e.target.value
		})
	}
	locationOnChange = (e) =>{
		console.log(this.state)
		this.setState({
			favoritePlace: e.target.value
		})
	}
	handleOnClick = (e) =>{
		console.log(this.state)
		this.setState({
			fullname: e.target.value
		})
	}
	
	render() {
		return <div>
		<input type="text" onChange = {this.handleOnChange}/>
		<input type="text" onChange = {this.locationOnChange}/>
		<button onClick = {this.handleOnClick}>Submit</button>
		{this.state.output}
		
		</div>
	}
}
export default TextBox