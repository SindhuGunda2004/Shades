"use strict";

//Globals
window.onload = loadBasket;

//Get basket from session storage or create one if it does not exist
function getBasket() {
    let basket;
    if (sessionStorage.basket === undefined || sessionStorage.basket === "") {
        basket = [];
    }
    else {
        basket = JSON.parse(sessionStorage.basket);
    }
    return basket;
}

//Displays basket in page.
function loadBasket() {
    let basket = getBasket();//Load or create basket

    //Build string with basket HTML
    let htmlStr = "<form action='checkout.php' method='post'>";
    htmlStr = "<table>";
    htmlStr = "<tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total Price</th><th></th></tr>";
    htmlStr = "<tr>";
    let prodIDs = [];
    for (let i = 0; i < basket.length; ++i) {
        htmlStr += basket[i].name + basket[i].price + basket[i].quantity + (basket[i].price * basket[i].quantity) +"<br>";
        // prodIDs.push({ id: basket[i].id, count: 1 });//Add to product array
    }
    //Add hidden field to form that contains stringified version of product ids.
    htmlStr += "<input type='hidden' name='prodIDs' value='" + JSON.stringify(prodIDs) + "'>";

    //Add checkout and empty basket buttons
    htmlStr += '<input type="submit" value="Proceed" onclick="orderconfirmation()"></form>';
    // htmlStr += "<br><button onclick='emptyBasket()'>Empty Basket</button>";

    //Display nubmer of products in basket
//    htmlStr = document.getElementById("basketDiv").innerHTML ;
}

//Adds an item to the basket
function addToBasket(prodID, prodName) {
    let basket = getBasket();//Load or create basket

    //Add product to basket
    basket.push({ id: prodID, name: prodName });
    alert("added");
    //Store in local storage
    sessionStorage.basket = JSON.stringify(basket);

    //Display basket in page.
    loadBasket();
}

function removeProduct() {
    var removebtn = document.getElementsByClassName("removebtn");
    console.log(removebtn);
    for (let i = 0; i < removebtn.length; i++) {
        var button = removebtn[i];
        button.addEventListener('click', function (e) {
            // the button that user clicks is e.target
            var btnclick = e.target;
            btnclick.parentElement.parentElement.remove();
        })
    }
}

function orderconfirmation() {
    alert("Your order has been confirmed");
}

