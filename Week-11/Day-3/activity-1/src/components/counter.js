import {connect} from 'react-redux'
import * as actionTypes from '../actions/actionTypes.js'


function Counter(props) {
	
	/*const taskItems = props.tasks.map((task) => {
		return <li>{task}</li>
	})*/
	
	return (
		<div>
			<button onClick = {props.onIncrement}>Increment</button>
			<h1>{props.counter}</h1>
			<button onClick = {props.onDecrement}>Decrement</button>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		counter: state.counterRED.counter,
		//tasks: state.tasks
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
		onDecrement: () => dispatch({type: actionTypes.DECREMENT})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)