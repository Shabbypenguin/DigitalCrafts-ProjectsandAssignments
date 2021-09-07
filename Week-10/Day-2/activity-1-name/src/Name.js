import React, {Component } from 'react'
import './Name.css'

class Name extends Component {
	render(){
		return <h1>Hello <span className = 'name'>{this.props.lastName}</span>, {this.props.firstName}</h1>
	}
}

export default Name