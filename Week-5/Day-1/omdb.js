const movielist = document.getElementById("movielist")
const movielink = document.getElementsByClassName("movielinks")
const moviebox = document.getElementById("moviebox")
const movieinfocenter = document.getElementById("movieinfocenter")


function changemovie(imdb) {
	let moviesInfo = getmoviedata(imdb, function(moviedetails) {
		console.log(moviedetails)
		let expandedmovie = `
		<div class="expandedmovie">
			<div><h1>${moviedetails.Title}</h1>
			<img src="${moviedetails.Poster} width=500px height=720px"><br><div>
			<div id="moviedata">
				<ul id="moviedatalist">
					<li class="movieinfo">Director: ${moviedetails.Director}
					</li>
					<li>Release date: ${moviedetails.Released}
					</li>
					<li>Rating: ${moviedetails.Rated}
					</li>
					<li>Release year: ${moviedetails.Year}
					</li>
				<ul>
			
		</div>`
		movieinfocenter.innerHTML = expandedmovie
	})

}

function getmoviedata(imdb, movieInfoAcquired) {
	let getMovieinfo = new XMLHttpRequest()
	
	getMovieinfo.open('GET', 'http://www.omdbapi.com/?i='+imdb+'&apikey=d972adaa')
	let search = getMovieinfo.addEventListener('load', function () {
		let movieresults = JSON.parse(getMovieinfo.responseText)
		movieInfoAcquired(movieresults)
	})
	getMovieinfo.send()
}


window.addEventListener('load', function (e) {
	let getMovies = new XMLHttpRequest()
	
	getMovies.open('GET', 'http://www.omdbapi.com/?s=spider-man&apikey=d972adaa')
	
	getMovies.addEventListener('load', function () {
		let results = JSON.parse(getMovies.responseText)
		const movies = results.Search.map(function(movie){
			let item = `
			<div class="movielisting">
				<img src="${movie.Poster} width=125px height=180px"> 	<h1> <a href="javascript:changemovie('${movie.imdbID}')" class="movielinks">${movie.Title}</h1></a>

			</div>`
			return item
		})
		movielist.innerHTML = movies.join("")
	})
	getMovies.send()
	
	
})

