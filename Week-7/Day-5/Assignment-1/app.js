const express = require('express')
const app = express()
const session = require('express-session')
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips.js')
const loginRouter = require('./routes/login.js')

app.use(express.urlencoded({extended: true}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('public'))

app.use(session({
	secret: 'secrettunnel', 
	saveUninitialized: false, 
	resave: true 
}))

function checklogin(req, res, next) {
	
	if(req.session){
		if(req.session.username){
			next()
		}else {
			res.render('login', {errorMessage: 'Not currently logged in'})
		}
	}else {
		res.render('login', {errorMessage: 'Not currently logged in'})
	}
}

global.users = []
global.trips = []

app.use('/trips', checklogin, tripsRouter)
app.use('/login', loginRouter)

app.get('/', (req, res) =>{
	res.render('index')
})

app.get('/logout', (req, res) => {
	req.session.destroy(error => {
		res.render('index', {message: "Successfully logged out"})
	})
})

app.listen(80, () => {
	console.log('Server is running...')
})