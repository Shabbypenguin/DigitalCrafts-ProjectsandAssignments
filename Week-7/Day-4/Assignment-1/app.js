const express = require('express')
const app = express()
const session = require('express-session')
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded({extended: true}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('public'))

app.use(session({
	secret: 'secrettunnel', 
	saveUninitialized: true, 
	resave: true 
}))

global.users = []
global.trips = [{title: "1111", image: 1, dateleave: "1", datereturn: 1, userid: 1, triplisting: 0}, {title: "111ass1", image: 1, dateleave: "1", datereturn: 1, userid: 0, triplisting: 1}, {title: "000", image: 1, dateleave: "1", datereturn: 1, userid: 1, triplisting: 2}]

app.get('/login', (req, res) =>{
	res.render('login')
})
app.get('/register', (req, res) =>{
	res.render('register')
})

app.post('/login', (req, res) => {
	
	let username = req.body.username
	let password = req.body.password

	const savedUser = users.find(user => {
		return user.username == username && user.password == password 
	})
	
	if(savedUser) { 
		if(req.session) {
			req.session.username = savedUser.username
			req.session.userid = savedUser.userid
		}
		res.redirect('/trips')
		
	} else {
		res.render('login', {errorMessage: 'Username or password is incorrect'})
	}
})

app.post('/register', (req, res) => {
	
	let username = req.body.username
	let password = req.body.password
	let userid = (users.length+1)
	
	user = {username: username, password: password, userid: userid}
	users.push(user)
	res.redirect('/login')
})

app.get('/trips', (req, res) => {
	
	const userid = req.session.userid
	userstrips = trips.filter((trip) => {
		return trip.userid == userid
	})
	res.render('trips', {tripslist: userstrips, username: req.session.username})
})

app.post('/addtrip', (req, res) => {
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

app.post('/deletetrip', (req, res) => {
	const triplisting = req.body.triplisting
	let userid = req.session.userid
	trips = trips.filter((trip) => {
		return trip.triplisting != triplisting
	})
	userstrips = trips.filter((trip) => {
		return trip.userid == userid
	})
	res.render('trips', {tripslist: userstrips})
})

app.get('/', (req, res) =>{
	res.render('index')
})

app.get('/logout', (req, res) => {
	req.session.username = ""
	req.session.userid = null
	res.render('index')
})


app.listen(80, () => {
	console.log('Server is running...')
})