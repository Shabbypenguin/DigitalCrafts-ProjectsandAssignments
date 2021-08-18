const express = require('express')
const router = express.Router()

router.get('/movies', (req, res) =>{
	res.render('index', {movieslist: movies})
})

router.post('/create', (req, res) =>{
	const title = req.body.title
	const description = req.body.description
	const genre = req.body.genre.toLowerCase()
	const posterURL = req.body.posterURL
	const movie = {title: title, description: description, genre: genre, posterURL: posterURL, movieListing: (movies.length +1)}
	movies.push(movie)
	res.redirect('/movies')
})

router.post('/delete', (req, res) =>{
	const movieListing = req.body.movieListing
	movies = movies.filter((movie) => {
		return movie.movieListing != movieListing
	})
	res.redirect('/movies')
})

router.post('/filter', (req, res) =>{
	const genre = req.body.genre
	moviesFiltered = movies.filter((movie) => {
		return movie.genre == genre
	})
	res.render('index', {movieslist: moviesFiltered})
})

router.post('/nofilter', (req, res) =>{
	res.render('index', {movieslist: movies})
})

router.get('/details/:title', (req, res) =>{
	const title = req.params.title
	moviesdetail = movies.find((movie) => {
		return movie.title == title
	})
	console.log(moviesdetail)
	res.render('details', moviesdetail)
})


module.exports = router