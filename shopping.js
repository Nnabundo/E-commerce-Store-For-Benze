
const item = document.querySelector('.item-container')
const basketNumber = document.querySelector('.cart-count')
const checkOut = document.querySelector('.checkout-items')
const subTotal = document.querySelector('.sumtotal')








function displayItem(){
    gridDisplay.map((product)=>{
        const {image, id, cost,name} = product
        
        item.innerHTML +=`
        <div class="each-item" id=${id} >
                <div>${name}</div>
                <div>
                    <img src= ${image} alt="" width="180" >
                </div>
                <div class="flex-this">
                    <div>$${cost}</div>
                    <button onclick="addToCart(${id})" class="buy-button">Buy</button>
                </div>
               
             
        </div>
        `

    })
   
}

displayItem()

let cart = JSON.parse(localStorage.getItem('CART')) || []
upDate()

function addToCart(id){

    if(cart.some((item)=>item.id === id)){
        upDateItem( 'plus', id)
    }else{
        let item = gridDisplay.find((item)=>item.id === id)
    cart.push({
        ...item,
        numberOfItems: 1
    })
 
    let basket = cart.length
    basketNumber.innerHTML= ""
    basketNumber.innerHTML += basket

    console.log(cart)
    
    }
   
    upDate()   
 
}


function displayCart(){
    checkOut.innerHTML =""
cart.forEach((product)=>{
    const {image, id, cost,name,  numberOfItems} = product
    console.log(product)

    
    checkOut.innerHTML+=`
    
    <div class="small-box" >
    <div onclick="removeItem(${id})">
        <img src="${image}" alt="" height="100" >
        <p id="name"> ${name}</p>
        <p id="cost">${cost}</p>
    </div>
    <div class="on-action">
        
        <div ><button class="clickable" onclick="upDateItem('minus', ${id})">-</button></div>
        <div>${numberOfItems}</div>
        <div><button class="clickable" onclick="upDateItem( 'plus', ${id})">+</button></div>

    </div>
    </div>
    
    `
})

}

function upDate(){
    displayCart()
    sumTotal()

    localStorage.setItem('CART', JSON.stringify(cart))
    
}
 
function sumTotal(){
    let totalPrice = 0
    let totalItem = 0
    subTotal.innerHTML =""
    cart.forEach((numbers)=>{
        totalPrice += numbers.cost * numbers.numberOfItems
        totalItem += numbers.numberOfItems
    })

    subTotal.innerHTML +=`
    <p>SumTotal (${totalItem}): $${totalPrice}</p>
    `
}





function upDateItem( action, id){


   cart = cart.map((item)=>{
    let numberOfItems =  item.numberOfItems
    console.log(numberOfItems)

    if(id === item.id){
        if(action === 'minus' && numberOfItems > 1 ){
            numberOfItems--
        } else if(action === 'plus'){
            numberOfItems++
        }

    }

    return {
        ...item,
        numberOfItems: numberOfItems
        
    }
   })
   upDate()
}

function removeItem(id){

    cart = cart.filter((item)=>item.id !== id)

    upDate()
}