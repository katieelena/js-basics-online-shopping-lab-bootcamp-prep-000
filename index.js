var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {[item]: Math.floor(Math.random() * 100)}
  cart.push(itemObject)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length = 0) {
    var cartItems = Object.keys(cart)
    var cartPhrase = []
    for (var i = 0; i < cartItems.length; i++) {
      cartPhrase[i] = cartItems[i] + 'at $' + cart[cartItems[i]]
      //iterate through cartItems, into new array that contains "{key} at ${value}"
    }

    return 'Your cart is currently' + cartPhrase.join(', ') + '.'
    //join new array with commas
    //print the join with 'Your cart is currently' + '.'
  } else {
    console.log('Your shopping cart is empty.')
  }

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
