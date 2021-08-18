const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded({extended: true}))
customers =[]

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/customers/:name', (req, res) => {
    let name = req.params.name
    res.render('customers', {username: name})
})

app.get('/add-customer', (req, res) => {
    res.render('add-customer', {customerlist: customers})
})

app.post('/add-customer', (req, res) =>{
    const name = req.body.name
    const age = req.body.age
    const customer = {name: name, age: age}
    customers.push(customer)
    console.log(customers)
    res.render('add-customer', {customerlist: customers})
})

app.listen(3000, () => {
    console.log('Server is running...')
})