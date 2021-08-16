const articleList = document.getElementById("articleList")

async function getNewsStories() {
	let response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
	let newsArray = response.json()
	return newsArray
}

function displayTheNews(articleInfo) {
	let articledate = new Date(articleInfo.time * 1000)
	let articleDetails = `
		<a href="${articleInfo.url}">

<h3>${articleInfo.title}</h3></a>
		<h4>By: ${articleInfo.by} at ${articledate}<h4><br><br>`	
	articleList.insertAdjacentHTML("beforeend", articleDetails)
}

async function getArticleInfo(newsArray) {
	const newsArticle = newsArray.map(async function(article){
		await fetch(`https://hacker-news.firebaseio.com/v0/item/${article}.json?print=pretty`)
		.then(response => {return response.json()})
		.then(result => {
			displayTheNews(result)
		})
	})
}

getNewsStories().then(newsArray =>{
	getArticleInfo(newsArray)
})