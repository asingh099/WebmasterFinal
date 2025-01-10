const cart = JSON.parse(localStorage.getItem("cart")) || [];
var total;
function addToCart(item, price){
    cart.push({item, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item} added to cart!`);
}
function gelatoFlavor(flavor){
    var choice = document.getElementById(flavor).value;
    addToCart(`${choice} Gelato`, 6.99);
}
function margheritaPizzaSizePrice(size){
    let realSize = document.getElementById(size).value;
    if (realSize === "Small"){
        let mPrice = 12.99;
        addToCart(`${realSize} Margherita Pizza`, mPrice);
    }
    else if (realSize === "Medium"){
        let mPrice = 14.99;
        addToCart(`${realSize} Margherita Pizza`, mPrice);
    }
    else if (realSize === "Large"){
        let mPrice = 15.99;
        addToCart(`${realSize} Margherita Pizza`, mPrice);
    }
    else if (realSize === "XLarge"){
        let mPrice = 17.99;
        addToCart(`${realSize} Margherita Pizza`, mPrice);
    }
}
function fourCheesePizzaSizePrice(size){
    let realSize = document.getElementById(size).value;
    if (realSize === "Small"){
        let mPrice = 10.99;
        addToCart(`${realSize} Four Cheese Pizza`, mPrice);
    }
    else if (realSize === "Medium"){
        let mPrice = 12.99;
        addToCart(`${realSize} Four Cheese Pizza`, mPrice);
    }
    else if (realSize === "Large"){
        let mPrice = 13.99;
        addToCart(`${realSize} Four Cheese Pizza`, mPrice);
    }
    else if (realSize === "XLarge"){
        let mPrice = 15.99;
        addToCart(`${realSize} Four Cheese Pizza`, mPrice);
    }
}
function veggiePizzaSizePrice(size){
    let realSize = document.getElementById(size).value;
    if (realSize === "Small"){
        let mPrice = 10.99;
        addToCart(`${realSize} Veggie Pizza`, mPrice);
    }
    else if (realSize === "Medium"){
        let mPrice = 12.99;
        addToCart(`${realSize} Veggie Pizza`, mPrice);
    }
    else if (realSize === "Large"){
        let mPrice = 13.99;
        addToCart(`${realSize} Veggie Pizza`, mPrice);
    }
    else if (realSize === "XLarge"){
        let mPrice = 15.99;
        addToCart(`${realSize} Veggie Pizza`, mPrice);
    }
}
function removeFromCart(index){
    const cartContainer = document.getElementById("cart-container");
//    alert(index);
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    total = 0;
//    alert(cart.length);
//    alert(cart);
    cartContainer.innerHTML = "";
    for(let x = 0; x<cart.length; x++){
        cartContainer.insertAdjacentHTML("beforeend", `<div class = "item-container"> <h2 id="itemCSS">Item: ${cart[x].item}</h2> <h2 id="priceCSS">Price: $${cart[x].price}</h2> <button onclick = "removeFromCart(${x})" id="remove"> Remove </button> </div>`);
        total+=cart[x].price;
    }
    if (cart.length === 0){
        cartContainer.innerHTML += "<p id='emptyCSS'>Your cart is empty. Proceed to the menu to add some items!</p>";
        return;
    }
    cartContainer.insertAdjacentHTML("beforeend", `<h2 id="totalCSS">Total: $${total.toFixed(2)}</h2>`);
    cartContainer.insertAdjacentHTML("beforeend", `    <form action="">
        <label for="fname">First Name</label>
        <input id= "fname" type="text" placeholder="First Name">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" placeholder="Last Name">
        <label for="phoneNumber">Phone Number</label>
        <input type="tel" id="phoneNumber" placeholder="XXX-XXX-XXXX">
        <label for="email">Email</label>
        <input type="email" id="email">
        <input type="submit" value="Place Order" id="submit" onclick = "placeOrder()">
    </form>`);
}

//localStorage.removeItem("cart");

function displayCart(){
    const cartContainer = document.getElementById("cart-container");
    total = 0
//    alert(cart.length);
    if (cart.length === 0) {
        cartContainer.innerHTML += "<p id='emptyCSS'>Your cart is empty. Proceed to the menu to add some items!</p>";
        return;
    }
    for(let i = 0; i<cart.length; i++){
        cartContainer.insertAdjacentHTML("beforeend", `<div class = "item-container"> <h2 id="itemCSS">Item: ${cart[i].item}</h2> <h2 id="priceCSS">Price: $${cart[i].price}</h2> <button onclick = "removeFromCart(${i})" id="remove"> Remove </button> </div>`);
        total+=cart[i].price;
    }
    cartContainer.insertAdjacentHTML("beforeend", `<h2 id="totalCSS">Total: $${total.toFixed(2)}</h2>`);
    cartContainer.insertAdjacentHTML("beforeend", `    <form action="">
        <h1>Check Out</h1>
        <label for="fname">First Name</label>
        <input id= "fname" type="text" placeholder="First Name">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" placeholder="Last Name">
        <label for="phoneNumber">Phone Number</label>
        <input type="tel" id="phoneNumber" placeholder="XXX-XXX-XXXX">
        <label for="email">Email</label>
        <input type="email" id="email">
        <label for="creditCard">Credit Card Number</label>
        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" id="creditCard">
        <input type="submit" value="Place Order" id="submit" onclick = "placeOrder()">
    </form>`);
}
function placeOrder(){
    localStorage.removeItem("cart");
    cart = [];
    var cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = `<h2>Your Order Has Been Placed!</h2>`;
}