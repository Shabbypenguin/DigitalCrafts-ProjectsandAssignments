import * as actionTypes from '../actions/actionTypes.js'

export const saveTask = (task) => {
	return {
		type: actionTypes.TASK_ADD,
		payload: task
	}
}

export const saveImage = (images) => {
	return {
		type: actionTypes.IMAGE_ADD,
		payload: images
	}
}