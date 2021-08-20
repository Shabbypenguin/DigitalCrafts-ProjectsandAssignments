const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
	res.render('login')
})

router.get('/register', (req, res) =>{
	res.render('register')
})

router.post('/', (req, res) => {
	
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

router.post('/register', (req, res) => {
	
	let username = req.body.username
	let password = req.body.password
	let userid = (users.length+1)
	
	user = {username: username, password: password, userid: userid}
	users.push(user)
	res.redirect('/login')
})


module.exports = router