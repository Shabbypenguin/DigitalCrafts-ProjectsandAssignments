const initialState = {
	tasks:['Wash car', 'Feed dog']
}

const reducer = (state = initialState, action) => {
	switch(action.type){

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