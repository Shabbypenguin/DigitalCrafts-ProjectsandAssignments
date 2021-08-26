const express = require('express')
const router = express.Router()
var bcrypt = require('bcryptjs')
const pgp = require("pg-promise")()
const dbpost = pgp("no")

router.get('/', (req, res) =>{
	const userId = req.session.userId
	console.log(userId)
	dbpost.any('SELECT user_id, title, text, post_id FROM posts WHERE user_id = $1', [userId])
	.then((posts) => {
	res.render('posts', {postslist: posts})
	})
})


router.get('/makepost', (req, res) =>{
	res.render('makepost')
})

router.post('/makepost', (req, res) => {
	
	const title = req.body.title 
	const text = req.body.text 
	dbpost.none('INSERT INTO posts(title, text, user_id) VALUES($1, $2, $3)',[title, text, req.session.userId])
	res.redirect('/posts')

})

router.post('/deletepost', (req, res) => {
	
	const postid = req.body.postslisting
	console.log(req.body.postslisting)
	dbpost.none('DELETE FROM posts WHERE post_id = $1',[postid])
	res.redirect('/posts')
	
})

module.exports = router