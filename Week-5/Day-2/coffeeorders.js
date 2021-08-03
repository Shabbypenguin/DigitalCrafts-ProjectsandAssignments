const getOrders = document.getElementById("getorders")
const usersEmail = document.getElementById("useremail")
const orderEmail = document.getElementById("orderemail")
const ordertype = document.getElementById("ordertype")
const deleteOrders = document.getElementById("deleteOrders")
const orderList = document.getElementById("coffeeOrderList")
const sizeList = document.getElementById("ordersize")
const orderPrice = document.getElementById("orderprice")
const submitOrder = document.getElementById("submitOrder")
const orderStatus = document.getElementById("orderstatus")

sizeList.addEventListener("change", function() {
    if (this.value == "Small") {
        orderPrice.value = 3.99
    } else if (this.value == "Medium") {
        orderPrice.value = 4.99
    } else if (this.value == "Large") {
        orderPrice.value = 5.99
    }
})


function sendCoffeeOrder() {
    let requestdata = JSON.stringify({
        "email": orderEmail.value,
        "type": ordertype.value,
        "size": sizeList.value,
        "price": orderPrice.value
    })

    let newCoffeeOrder = new XMLHttpRequest()
    newCoffeeOrder.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
    newCoffeeOrder.setRequestHeader("Content-Type", "application/json")
    newCoffeeOrder.addEventListener("load", function() {
        if (this.readyState === 4) {
            let orderresult = JSON.parse(this.responseText)
            orderStatus.innerHTML = orderresult.message
            ordertype.value = ""
            orderEmail.value = ""
            sizeList.value = "Small"
            orderPrice.value = 3.99
        }
    })
    newCoffeeOrder.send(requestdata)
}

function deleteCoffeeOrders(useremail) {
    if (useremail.value) {
        let deleteorder = new XMLHttpRequest()
        deleteorder.open("DELETE", `https://troubled-peaceful-hell.glitch.me/orders/${useremail.value}`)
        deleteorder.addEventListener("load", function() {
            if (this.readyState === 4) {
                alert(useremail.value + "'s order was deleted!")
                usersEmail.value = ""
            }
        })
        deleteorder.send()
        å
    }
}

function getCoffeeOrders(useremail) {
    let coffeeorders = new XMLHttpRequest()
    coffeeorders.open("GET", `https://troubled-peaceful-hell.glitch.me/orders/${useremail.value}`)
    coffeeorders.addEventListener("load", function() {
        if (this.readyState === 4) {
            let orderInfo = JSON.parse(this.responseText)
            if (useremail.value) {
                orderList.innerHTML = `User ${orderInfo["email"]}'s order is that they want a ${orderInfo.size} ${orderInfo.type}. It will cost them ${orderInfo.price}`
            } else {
                let currentOrders = orderInfo.map(function(order) {
                    return `<li><a href="#" onclick="document.getElementById('useremail').value='${order.email}';">${order.email}</a> 
				<ul><li>${order.size} ${order.type}</li></ul></li>`
                })
                orderList.innerHTML = currentOrders.join("")
            }
        }
    })
    coffeeorders.send()
}

getOrders.addEventListener("click", function() {
    getCoffeeOrders(usersEmail)
})

deleteOrders.addEventListener("click", function() {
    deleteCoffeeOrders(usersEmail)
})
submitOrder.addEventListener("click", function() {
    sendCoffeeOrder()
})
