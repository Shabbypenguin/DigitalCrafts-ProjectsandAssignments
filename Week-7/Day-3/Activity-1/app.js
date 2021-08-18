const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')


app.use(express.urlencoded())
app.use(express.static('public'))

app.use('/trips', tripsRouter)


// trips are now available in all router files 
global.trips = [
    { name: "Denver", tripId: 1 },
    { name: "Houston", tripId: 2 },
    { name: "Austin", tripId: 3 }
]

const PORT = 3000

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


app.get('/', (req, res) => {
    res.render('index', {trips: tripsname})
})



app.listen(PORT, () => {
    console.log('Server is running...')
})