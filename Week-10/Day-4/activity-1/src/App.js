import React, {useEffect} from 'react'
import Stepper from "./Stepper.js"

function App() {
  
  useEffect(() =>{
    console.log("test")
  })
  
  return (
    <div>
    <Stepper />
    </div>
  )
}

export default App;
  