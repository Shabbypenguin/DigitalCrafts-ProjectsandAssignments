const express = require('express')
const cors = require('cors')
const nodesite = express()

//nodesite.use(cors)
nodesite.use(express.json())

nodesite.get("/name", (req, res) => {
  res.send("it worked")
})

nodesite.post('/name', (req, res) =>{
  const fname = req.body.firstname
  const lname = req.body.lastname
  const fullname = {fullname: fname+", "+ lname}
  console.log(fullname)
  res.send(fullname.fullname)
})

nodesite.listen(3000, () =>  {
  console.log("Server is running...")
}) 