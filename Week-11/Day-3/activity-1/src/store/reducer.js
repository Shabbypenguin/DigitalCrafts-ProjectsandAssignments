//useless file now
import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
	counter: 0,
	tasks:['Wash car', 'Feed dog']
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.INCREMENT:
			return{
				...state,
				counter: state.counter + 1
			}
		case actionTypes.DECREMENT:
			return{
				...state,
				counter: state.counter - 1
			}
		case 'TASK_ADD':
			return{
				...state,
				tasks: state.tasks.concat(action.payload)
			}
		default:
			return state
	}
}

export default reducer