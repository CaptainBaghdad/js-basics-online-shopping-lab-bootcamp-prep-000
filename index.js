var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {};
 obj.itemName = item;
 obj.itemPrice = Math.floor(Math.random() * 100) + 1;
 cart.push(obj);
 
 return `${obj.itemName} has been added to your cart.` ;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  
    
  }
  
  
    
     if(cart.length === 1){
     for(var  i = 0 ; i < cart.length;i++){
       for(var obj in  cart[i]){
         a.push(`${obj} at $${cart[i][obj]}`);
       }
       
     }
    return `In your cart, you have ${a}`;
      
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
