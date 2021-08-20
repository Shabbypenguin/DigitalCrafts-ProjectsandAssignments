const messagetext = document.getElementById("chatMessageTextBox")
const messagebutton = document.getElementById("sendMessage") 
const messagesUL = document.getElementById("messagesUL")
const usernamebox = document.getElementById("usernamebox")

messagebutton.addEventListener('click', function () {
	const username = usernamebox.value
	const chatMessage = messagetext.value
    messagetext.value = null
	socket.emit("Houston", {message: chatMessage, username: username})
})

socket.on("Houston", (chat)=>{
	const messageItem = `<li>${chat.username}: ${chat.message}</li>`
	messagesUL.insertAdjacentHTML('beforeend', messageItem)
})