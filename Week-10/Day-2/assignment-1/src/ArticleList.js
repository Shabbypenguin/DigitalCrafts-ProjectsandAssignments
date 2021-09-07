import React, {Component } from 'react'

class ReviewsList extends Component {
	
	
    render(){
	
        const allreviews = this.props.articleList.map((review, index) => {
            return <li key = {index}><h2>{review.name}</h2> <h4>{review.body}</h4> Comments: {review.comments} - Likes: {review.likes}</li>
        })
        return (<ul>{allreviews}</ul>)
    }
}

export default ReviewsList