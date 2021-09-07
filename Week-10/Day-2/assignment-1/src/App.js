import React, {Component } from 'react'
import ReviewsList from './ArticleList.js'
import Header from './Header.js'
import FeaturedArticle from './FeaturedArticle.js'


class App extends Component {
  render() {
    
    const articles = [
      {name: 'Razer Blackwidow', body: "this amazing keyboard has a lot to offer!", comments: 32, likes: 19},
      {name: 'iPhone rumors', body: "What could be coming next for apples upcoming phone?", comments: 132, likes: 59}
    ]
    return <div>
    <div><Header /></div>
    <FeaturedArticle />
    <ReviewsList articleList = {articles}/>
    </div>
  }
}

export default App