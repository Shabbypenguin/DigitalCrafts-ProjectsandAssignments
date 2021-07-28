const startersUL = document.getElementById("starters")
const entreesUL = document.getElementById("entrees")
const dessertUL = document.getElementById("desserts")


//console.log(menuItems)
const starterDishes = dishes.filter(menuitem => menuitem.course === "Starters")
const mainDishes = dishes.filter(menuitem => menuitem.course === "Entrees")
const dessertDishes = dishes.filter(menuitem => menuitem.course === "Desserts")

console.log(starterDishes)
console.log(mainDishes)
console.log(dessertDishes)

const starterItems = starterDishes.map(function(dish){
	const Item = `
	<div class="dishlist">
	<li class="tastyDish">
		<img class="recipeimage" src="${dish.imageURL}"></img><br>
		<b>${dish.title}</b>
		<div class="description"><p>${dish.description}</p><div>
	</li></div>
`
	return Item
})

const mainItems = mainDishes.map(function(dish){
	const Item = `
<div class="dishlist">
	<li class="tastyDish">
		<img class="recipeimage" src="${dish.imageURL}"></img><br>
		<b>${dish.title}</b>
		<div class="description"><p>${dish.description}</p><div>
	</li>
`
	return Item
})
const dessertItems = dessertDishes.map(function(dish){
	const Item = `
<div class="dishlist">
	<li class="tastyDish">
		<img class="recipeimage" src="${dish.imageURL}"></img><br>
		<b>${dish.title}</b>
		<div class="description"><p>${dish.description}</p><div>
	</li>
`
	return Item
})

startersUL.innerHTML = starterItems.join("")
entreesUL.innerHTML = mainItems.join("")
dessertUL.innerHTML = dessertItems.join("")