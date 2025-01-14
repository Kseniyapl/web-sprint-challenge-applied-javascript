
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const Card = (article) => {

const card = document.createElement('div')
card.classList.add('card')
const headlineDiv = document.createElement('div')
headlineDiv.classList.add('headline')
const authorDiv = document.createElement('div')
authorDiv.classList.add('author')
const imgContainerDiv = document.createElement('div')
imgContainerDiv.classList.add('img-container')
const image = document.createElement('img')
const authorNameSpan = document.createElement('span')

card.appendChild(headlineDiv)
card.appendChild(authorDiv)
authorDiv.appendChild(imgContainerDiv)
authorDiv.appendChild(authorNameSpan)
imgContainerDiv.appendChild(image)

headlineDiv.textContent = article.headline;
image.src = article.authorPhoto
authorNameSpan.textContent = article.authorName

return card

}
import axios from "axios"

const cardAppender = (selector) => {
  axios.get("http://localhost:5000/api/articles")
  .then(resp =>{
    const container = document.querySelector(selector)
    const articleList = resp.data.articles
    for(const i in articleList){
      const article  = articleList[i];
      article.forEach(elem => {
        const newCard = Card(elem)
        container.appendChild(newCard)
      })
    }
  })
  .catch(err =>
    console.error(err)
  )}
    
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }


