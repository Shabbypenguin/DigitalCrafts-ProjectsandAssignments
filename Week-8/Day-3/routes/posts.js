const express = require('express')
const router = express.Router()
var bcrypt = require('bcryptjs')



router.get('/', (req, res) =>{
	const userId = req.session.userId
	console.log(userId)
	
	models.post.findAll({
		where:{
			user_id: userId
		}
	})
	.then(posts => {
		res.render('posts', {postslist: posts})
	})
})


router.get('/makepost', (req, res) =>{
	res.render('makepost')
})

router.post('/makepost', (req, res) => {
	
	const title = req.body.title 
	const text = req.body.text 
	
	const post = models.Post.build({
		//columns inside posts
	})
	
	post.save().then(postname =>{
		console.log(postname)
		res.redirect('/posts')
	})
})

router.post('/deletepost', (req, res) => {
	
	const postid = req.body.postslisting
	
	models.Post.destroy({
		where:{
			post_id: postid
		}
	}).then( deletePost => {
		res.redirect('/posts')
	})
})

module.exports = router