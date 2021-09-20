import {connect} from 'react-redux'

import * as actionCreators from '../creators/actionCreator.js'


function getRandomImage(props) {
	
	const getImage = () => {
		const randomURL = `https://picsum.photos/200/300`
		
		fetch(randomURL)
		.then(response => {props.onImageAdd(response.url)
		})
	}
	
	const imageItems = props.images.map((image, index) => {
		return (<div><img src={image} alt=""/></div>)
	})

	
	return (
		<div>
		<h1>TodoList</h1>
		<button onClick = {getImage} >Get New Picture</button>
		{imageItems}
		</div>
	)
	


}

const mapDispatchToProps = (dispatch) => {
	return {
		onImageAdd: (imageName) => dispatch(actionCreators.saveImage(imageName))
	}
}

const mapStateToProps = (state) => {
	return {
		images: state.imageRED.images
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(getRandomImage)