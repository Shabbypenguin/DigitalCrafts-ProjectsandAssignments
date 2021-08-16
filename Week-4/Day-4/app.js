const newsUL = document.getElementById("newsArticles")


const newsArticles = news.articles.map(function(article){
	if (article.urlToImage == null){
		article.urlToImage = ""
	}
	if (article.author == null){
		article.author = ""
	}
	const Item = `
	<div class="articleCon">
	<li class="article">
		<a href="${article.url}"><img class="articleImage" src="${article.urlToImage}"></img><br>
		<
b>${article.title}</a></b> 




<div class="author">${article.author} published ${article.publishedAt}</div>
		<div class="description"><p>${article.description}</p><div>
		<a href="${article.url}"/>
	</li></div>`
	
	return Item
})


newsUL.innerHTML = newsArticles.join("")