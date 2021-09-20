import {useState} from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../creators/actionCreator.js'

function TodoList(props) {
	
	const [taskName, setTaskName] = useState('')
	
	const handleTaskNameChange = (e) => {
		setTaskName(e.target.value)
	}
	
	const handleSave = () => {
		props.onTaskAdd(taskName)
	}
	
	const taskItems = props.tasks.map((task, index) => {
	return <li key= {index}>{task}</li>
	})
	
	return (
		<div>
			<h1>TodoList</h1>
			<input type = "text" placeholder= "Task name" onChange = {handleTaskNameChange} />
			<button onClick = {handleSave} >Save</button>
			{taskItems}
		</div>
	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		onTaskAdd: (taskName) => dispatch(actionCreators.saveTask(taskName))
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.taskRED.tasks
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)