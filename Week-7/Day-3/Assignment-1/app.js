const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')
const apiRouter = require('./routes/api')

global.movies= []

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/', moviesRouter)
app.use('/', apiRouter)



app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(3000, () => {
	console.log('Server is running...')
})