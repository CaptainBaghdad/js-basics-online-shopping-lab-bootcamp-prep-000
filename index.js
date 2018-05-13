"use strict"
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
  var a = [];
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  
    
  }
  
  
    
     if(cart.length === 1){
     for(var  i = 0 ; i < cart.length;i++){
       for(var obj in  cart[i]){
         a.push(cart[i].itemName + " at " + "$" + cart[i].itemPrice + ".");
       }
       
     }
     var ans = a.pop();
    return `In your cart, you have ${ans}`;
      
    }
    
   if(cart.length === 2){
     var a2 = [];
     var str = "In your cart, you have " +cart[0].itemName + " at " + "$" + cart[0].itemPrice + "," + " and " + cart[1].itemName + " at " + "$"  + cart[1].itemPrice + "."
     return str;
   }
  
  var coun = 0;
  
  var aa = [];
  while(coun < cart.length-1){
    
  var s = " "+cart[coun].itemName + " at " + "$" + cart[coun].itemPrice;
  aa.push(s);
  
    coun++;
  }
 var last = cart[cart.length-1]; 
 return "In your cart, you have" + aa +", " + "and "  + last.itemName + " at " + "$" +last.itemPrice + ".";
}

function total() {
  // write your code here
 var a = [];
 for(var i in cart){
   a.push(cart[i].itemPrice);
   
   
 }
  return a.reduce(function(aa,b){
     return aa+b;
  });
}

function removeFromCart(item) {
  // write your code here
  console.log("this is " + item);
  for(var i = 0 ; i < cart.length;i++){
    for(var ting in cart){
      if(item == ting.itemName){
       cart =  cart.splice(i,1);
        return cart;
      }
    }
  }
  return "That item is not in your cart.";
  
}
function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
    } 
    } else 
      console.log('Sorry, we don\'t have a credit card on file for you.')
return cart;
    
   
  
  
}
