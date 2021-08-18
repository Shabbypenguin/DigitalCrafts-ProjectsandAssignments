const express = require('express')
const router = express.Router()


// /trips/add-trip GET 
router.get('/add-trip', (req, res) => {
    res.render('add-trip')
})

// trips/34
router.get('/:name', (req, res) => {
    req.params.name
    res.send(name)
})

// trips/add-trip POST
router.post('/add-trip', (req, res) => {

    const name = req.body.tripName 
    let trip = {name: name, tripId: trips.length + 1}
    trips.push(trip)
    res.redirect('/')
})




module.exports = router // now other files can import router 