const express = require('express')
const app = express()
var session = require('express-session')
// initializing pg promise 
// importing bcryptjs 
var bcrypt = require('bcryptjs');

const mustacheExpress = require('mustache-express')
// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
// the pages are located in views directory
app.set('views', './views')
// extension will be .mustache
app.set('view engine', 'mustache')

app.use(express.urlencoded())

// initialize a session 
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

app.post('/encrypt', (req, res) => {
	
	const secret = req.body.secret;
	bcrypt.genSalt(10, function(error, salt) {
		if(!error) {
			bcrypt.hash(secret, salt, function(error, hash) {
				if(!error) {
					res.send(hash)
				} else {
					res.send('Error occurred!')
				}
			})
		}
	})
})

app.listen(80, () => {
	console.log('Server is running...')
})