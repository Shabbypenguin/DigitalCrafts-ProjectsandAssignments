import React, {Component } from 'react'

class FriendsList extends Component {
	
	
    render(){
	
        const friends = this.props.friendsList.map((friend, index) => {
            return <li key = {index}>{friend.name}</li>
        })
        return (<ul>{friends}</ul>)
    }
}

export default FriendsList