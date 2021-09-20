import React, {Component } from 'react'
import Stepper from "./stepper.js"

class App extends Component {
  
  render() {
    return <div>
    <h1><Stepper /></h1>
    
    {Stepper.state}

    </div>
  }
}

export default App