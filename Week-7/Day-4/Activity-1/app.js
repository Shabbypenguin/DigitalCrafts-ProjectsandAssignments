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
	saveUninitalized: true
}))

app.get('/counter', (req, res) => {
	
	if(req.session){
		req.session.counter = 0
	}
	res.render('index')
})

app.post('/counter', (req, res) => {
	
	if(req.session){
		req.session.counter += 1
	}
	res.render('index', {count: req.session.counter})
})


app.get('/', (req, res) => {
	res.render('index')
})

app.listen(3001, () => {
	console.log('Server is running...')
})