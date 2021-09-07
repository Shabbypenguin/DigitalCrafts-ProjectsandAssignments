import React, {Component } from 'react'
import Friends from './FriendsList.js'

class App extends Component {
  render() {
    
    const friends = [
      {name: 'Josh'},
      {name: 'Taylor'},
      {name: 'James'}
    ]
    return <div>
    <Friends friendsList = {friends}/>
    </div>
  }
}

export default App