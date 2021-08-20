const express = require('express')
const app = express()
const session = require('express-session')
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips.js')
const loginRouter = require('./routes/login.js')

app.use(express.urlencoded({extended: true}))

const http = require('http').Server(app)
// initialize socket.io object 
const io = require('socket.io')(http)

app.use('/js',express.static('js'))

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
global.channelName = "Houston"

app.use('/trips', checklogin, tripsRouter)
app.use('/login', loginRouter)

app.get('/', (req, res) =>{
	res.render('index')
})

app.get('/chat', (req, res)=>{
	res.sendFile(__dirname + '/chat.html')
})

io.on('connection', (socket) => {
	console.log("User connected")
	
	socket.on(channelName, (chat)=> {
		console.log(chat)
		io.emit(channelName, chat)
	})
})

app.get('/logout', (req, res) => {
	req.session.destroy(error => {
		res.render('index', {message: "Successfully logged out"})
	})
})

http.listen(80, () => {
	console.log('Server is running...')
})