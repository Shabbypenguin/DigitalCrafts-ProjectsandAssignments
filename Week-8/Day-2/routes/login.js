const express = require('express')
const router = express.Router()
var bcrypt = require('bcryptjs')
const pgp = require("pg-promise")()


const dbuser = pgp("no");


router.get('/', (req, res) =>{
	res.render('login')
})

router.get('/register', (req, res) =>{
	res.render('register')
})

router.post('/', (req, res) => {
	
	const username = req.body.username;
	const password = req.body.password;
	
	dbuser.one('SELECT user_id, username, password FROM users WHERE username = $1',[username])
	.then((user) => {
		bcrypt.compare(password, user.password, function(error, result) {
			if(result) {
				if(req.session) {
					req.session.userId = user.user_id 
					res.redirect('/posts')
				}
			} else {
				res.render('login', {errorMessage: 'Not currently logged in'})
			}
		})
		
	}).catch((error) => {
		res.render('login', {errorMessage: 'User not found'})
	})
	
})

router.post('/register', (req, res) => {
	
	const username = req.body.username 
	const password = req.body.password 
	
	bcrypt.genSalt(10, function(error, salt) {
		if(!error) {
			bcrypt.hash(password, salt, function(error, hash) {
				if(!error) {
					dbuser.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hash])
					.then(() => {
						res.render('login')
					})
				} else {
					res.send('Error occurred!')
				}
			})
		} else {
			res.send('Error occurred!')
		}
	})
})


module.exports = router