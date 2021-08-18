const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded({extended: true}))
app.use('/', express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// everything inside the public folder is available at the root level 
// localhost:3000/css/styles.css


app.get('/', (req, res) => {
	res.render("index", {name: "James Dean", street: "123 Main", city: "New york"})
})

app.listen(3000, () => {
	console.log('Server is running...')
})