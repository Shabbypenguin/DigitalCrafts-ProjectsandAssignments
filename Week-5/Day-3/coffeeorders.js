const ordersList= document.getElementById("orderList")
const submitOrder = document.getElementById("submitOrder")

function getCoffeeOrders(printOrders) {
  fetch("https://troubled-peaceful-hell.glitch.me/orders")
  .then(response => {
    return response.json()
  }).then(result => {
    printOrders(result)
  })
}

function printOrders(orderInfo, useremail) {
  if (useremail.value) {
    orderList.innerHTML = `User ${orderInfo["email"]}'s order is that they want a ${orderInfo.size} ${orderInfo.type}. It will cost them ${orderInfo.price}`
  } else {
    let currentOrders = orderInfo.map(function(order) {
      return `<li><a href="#" onclick="document.getElementById('useremail').value='${order.email}';">${order.email}</a> 
                <ul><li>${order.size} ${order.type}</li></ul>
              </li>`
    })
    orderList.innerHTML = currentOrders.join("")
  }
}


function makeNewTestOrder() {
  fetch("https://troubled-peaceful-hell.glitch.me/orders",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "test@text.com",
      "type": "coffee",
      "size": "small",
      "price": 3.99
    }) }).then(response => console.log(response.json()))
}

getCoffeeOrders((result) => {
  printOrders(result, "")
})
submitOrder.addEventListener("click", function() {
  makeNewTestOrder()
  getCoffeeOrders((result) => {
    printOrders(result, "")
  })
})