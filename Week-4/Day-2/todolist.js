const taskToDo = document.getElementById("taskToDo")
const submitTasker = document.getElementById("submitTask")
submitTasker.addEventListener("click", todofuction)
const todoList = document.getElementById("todoList")
const completedList = document.getElementById("completeList")



function todofuction() {
	const listItem = document.createElement("li")
	const checky = document.createElement("input")
	const deleteMe = document.createElement("button")
	
	deleteMe.setAttribute("type", "button")
	deleteMe.className = "deleteMe"
	deleteMe.innerHTML = "Remove"
	deleteMe.addEventListener("click", function() {this.parentElement.remove() },)

	checky.setAttribute("type", "checkbox")
	checky.className = "checkmate"
	listItem.className = "taskbox"
	checky.addEventListener("change", function() {
		if(this.checked){
			completedList.appendChild(this.parentElement)
		}else {
			todoList.appendChild(this.parentElement)
		}})
	
	listItem.appendChild(checky)
	listItem.appendChild(document.createTextNode(taskToDo.value))
	listItem.appendChild(deleteMe)
	todoList.appendChild(listItem)
}

function changeLists() {
	console.log("test")
}