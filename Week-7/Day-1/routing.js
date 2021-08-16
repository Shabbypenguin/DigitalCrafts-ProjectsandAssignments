const express = require('express');
const nodesite = express()

nodesite.get('/digital-crafts/cohort/:year', (req, res) =>{
  const year = req.params.year
  res.send(`I studied at DigitalCrafts ${year} Cohort`)
})

nodesite.listen(3000, () =>  {
  console.log("Server is running...")
}) 