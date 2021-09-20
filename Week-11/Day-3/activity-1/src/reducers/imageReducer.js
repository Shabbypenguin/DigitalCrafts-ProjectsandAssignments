const initialState = {
	images:[]
}

const reducer = (state = initialState, action) => {
	switch(action.type){

		case 'IMAGE_ADD':
			return{
				...state,
				images: state.images.concat(action.payload)
			}
		default:
			return state
	}
}

export default reducer