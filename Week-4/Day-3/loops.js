const postUL = document.getElementById("postUL")

for (let index = 0; index < posts.length; index++) {
	console.log(posts[index])
	const postItems = ` 
		<li>
			<p><b>${posts[index].title}</b> - ${posts[index].body}</p>
		</li>
		`

	postUL.insertAdjacentHTML('beforeend', postItems)

}
