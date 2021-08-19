const express = require('express')
const app = express()
const session = require('express-session')
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded({extended: true}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('public'))

users = [{username: "shabby", password: "test"}]

app.get('login', (req, res) =>{
	res.render('login')
})

app.get('dashboard', (req, res) =>{
	if(req.session.username){
		res.render('dashboard', {user: req.session.username})
	}else {
		console.log("you arent logged in")
	}
})
app.post('login', (req, res) => {
	
	username = req.body.username
	password = req.body.password
		
	const savedUser = users.find(user => {
		return user.username == username && user.password == password
	})
	
	if(savedUser){
		if(req.session){
			req.session.username = username
			res.redirect('dashboard')
		}
	}else {
		res.render('login')
	}
})

app.listen(3001, () => {
	console.log('Server is running...')
})