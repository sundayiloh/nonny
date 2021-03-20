 if (document.readyState  == 'Loading') {
     document.addEventListener('DOMContentLoaded',ready)
 } else {
     ready()
 }
 
 function ready(){
     var removeCartItemButtons = document.getElementsByClassName('button')
          console.log(removeCartItemButtons)
       /* for (var i = 0; i < removeCartItemButtons.length; i++) {
          var button = removeCartItemButtons[i]
          button.addEventListener('click',removeCartItem)
   }
   
     var addToCartButtons = document.getElementsByClassName('buttons')
      for (var i = 0; i < addToCartButtons.length; i++) {
          var button = addToCartButtons[i]
          button.addEventListener('click',addToCartClicked)
   }
   
    var removeAllCartItems = document.getElementsByClassName('but')

      for (var i = 0; i < removeAllCartItems.length; i++) {

          var buttonn = removeAllCartItems[i]
          buttonn.addEventListener('click',purchaseClicked)
   }
   
 }
 
 function purchaseClicked(event) {
     alert('Thank you for your purchase')
     var cartItem = document.getElementsByClassName('h3')[0]
     while (cartItem.hasChildNodes()){
         cartItem.removeChild(cartItem.firstChild)
         updateCartTotal()
     }
  }
  
 
 
 
 function removeCartItem(event){

        var buttonClicked = event.target

        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
     }

function addToCartClicked(event) {
     var button = event.target
     var shopItem = button.parentElement
     var title = shopItem.getElementsByClassName('span')[0].innerText
     var prices = shopItem.getElementsByClassName('spans')[0].innerText
     var imageScr = shopItem.getElementsByTagName('img')[0].src
     console.log(title, prices, imageScr)
     addItemToCart(title, prices, imageScr)
     updateCartTotal()
 }
 
 function addItemToCart(title, prices, imageScr){
     var cartRow = document.createElement('div')
     var cartItems = document.getElementsByClassName('h3')[0]
     var cartItemNames = document.getElementsByClassName('p')
     //for (var i = 0; i < cartItemNames.length; i++) {
      //   if(cartItemNames[i].innerText == title){
        //     alert('Already added')
         //    return
       //  }
    // }
     var cartRowContent = `
     <div class="h2">
          <img src="${imageScr}" class="img" >
              <span class="p">${title}</span>
                 <span class="p1">${prices}</span>
         <div id="button"><button class="button">Remove</button></div>
          </div>

     `
     cartRow.innerHTML = cartRowContent
     cartItems.append(cartRow)
    cartRow.getElementsByClassName('button')[0].addEventListener('click',removeCartItem)
 }


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('h3')[0]
      var cartRows = cartItemContainer.getElementsByClassName('h2')
      var total = 0
     for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
          var priceElement = cartRow.getElementsByClassName('p1')[0]
          var price = parseFloat(priceElement.innerText.replace('#',''))
          total = total + price
          console.log(price)
      }
      document.getElementsByClassName('total')[0].innerText ='#' + total*/
  }
  
  var not1 = document.querySelector('.fa');
    var select = document.querySelector('.select')
    var button = document.getElementsByClassName('buttons');
    for(but of button)
    {
        but.addEventListener('click', (e)=>{
            var add = Number(not1.getAttribute('data-count'|| 0));
            not1.setAttribute('data-count', add + 1);
            not1.classList.add('zero');
            
            //copy and paste//
            
            var parent = e.target.parentNode;
            if(parent){
                not1.onclick =()=>{
                    select.classList.toggle('display');
                }
            }
        })
    }
    