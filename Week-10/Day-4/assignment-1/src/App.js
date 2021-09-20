import React, {useEffect, useState} from 'react'
import UsersList from "./UsersList.js"

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [users, setUsers] = useState([])
  
  
  
  useEffect(() =>{
    getAllUsers()
  },[count])
  
  const getAllUsers =()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(users => {
      console.log(users)
      setUsers(users)
    })
  }
  
  const handleIncrement =() => {
    setCount(count+1)
  }
  const handleSubtract =() => {
    setCount(count-1)
  }
  
  return(
    <div>
    <h1>
    <button onClick = {handleSubtract}><h1> -</h1></button>
    {count}
    <button onClick = {handleIncrement}><h1> +</h1></button>
    </h1>
    <UsersList />
    </div>
  )
}

export default App;
  