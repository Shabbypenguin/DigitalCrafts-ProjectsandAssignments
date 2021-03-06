
import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
	counter: 0,
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
		default:
			return state
	}
}

export default reducer