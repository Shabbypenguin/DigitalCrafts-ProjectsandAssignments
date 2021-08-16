const express = require('express');
const nodesite = express()

nodesite.get('/name', (req, res) =>{
  let name = {"firstname": "John", "lastname": "Doe"}
  res.json(name)
})

nodesite.listen(3000, () =>  {
  console.log("Server is running...")
}) 