const express = require('express')
const app = express()
const session = require('express-session')
const mustacheExpress = require('mustache-express')
const sequelize = require("sequelize")
var bcrypt = require('bcryptjs')
global.models = require('./models/')
require('dotenv').config()


const loginRouter = require('./routes/login.js')
const postsRouter = require('./routes/posts.js')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

// initialize a session 
app.use(session({
	secret: process.env.DB_SECRET,
	resave: true,
	saveUninitialized: true
}))

function checklogin(req, res, next) {
	
	if(req.session){
		if(req.session.userId){
			next()
		}else {
			res.render('login', {errorMessage: 'Not currently logged in'})
		}
	}else {
		res.render('login', {errorMessage: 'Not currently logged in'})
	}
}

app.use('/login', loginRouter)
app.use('/posts', checklogin, postsRouter)

app.get('/', (req, res) =>{
	res.render('index')
})
app.get('/logout', (req, res) => {
	req.session.destroy(error => {
		res.render('index', {message: "Successfully logged out"})
	})
})

app.listen(process.env.PORT, () => {
	console.log('Server is running...')
})
