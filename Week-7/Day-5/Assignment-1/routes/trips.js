const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	
	const userid = req.session.userid
	userstrips = trips.filter((trip) => {
		return trip.userid == userid
	})
	res.render('trips', {tripslist: userstrips, username: req.session.username})
})

router.post('/addtrip', (req, res) => {
	let title = req.body.title
	let datereturn = req.body.datereturn
	let dateleave = req.body.dateleave
	let image = req.body.image
	let userid = req.session.userid
	let triplisting = (trips.length+1)
	trip = {title: title, image: image, dateleave: dateleave, datereturn: datereturn, userid: userid, triplisting: triplisting}
	trips.push(trip)
	res.redirect('/trips')
})


router.post('/deletetrip', (req, res) => {
	const triplisting = req.body.triplisting
	let userid = req.session.userid
	trips = trips.filter((trip) => {
		return trip.triplisting != triplisting
	})
	userstrips = trips.filter((trip) => {
		return trip.userid == userid
	})
	res.redirect('/trips')
})


module.exports = router