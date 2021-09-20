import React, {Component } from 'react'
import Switch from "./switch.js"
import TextBox from "./textbox.js"

class App extends Component {
  
  render() {
    return <div>
    <h1><Switch /></h1>
    <h1><TextBox /></h1>
    </div>
  }
}

export default App