

let Cart =document.getElementById('Cart')
let btn = document.getElementById('getP')
let cart =JSON.parse(localStorage.getItem("cart"))
console.log(products);



function display()
   { 
    
   
    let carts =JSON.parse(localStorage.getItem("cart"))
    console.log(cart);
    
    for(let i = 0; i < carts.length; i++){
     
        
        let div = document.createElement('div')
        div.style.display = "flex";
        div.id = "product" + i
         div.style.justifyContent ="space-between"
       
        div.innerHTML =`
        <h4>Name:${carts[i].Name}</h4>
        <p>Img:<img src="${carts[i].img}"  style="width: 100px;" ></p>
        <p id= ${"totalQuanti" + i}>${carts[i].Quantity}</p>
        <p>Price :${carts[i].price}</p>
        <p id ="TotalPrice">TotalPrice:${carts[i].userQ * carts[i].price }
        <button id=${"removebtn" + i} onclick ="removess(this,${i})" value= ${i}>Remove</button>
        
        <br>
        <div >
        <button id = ${"increamentbtn" + i}   onclick = "increament(this,${i})" value= ${i}> + </button>
        <p  style="border:1px solid black" ;  id =${"quanti" + i}>${carts[i].userQ} <p>
        <button id =${"decrementbtn" + i}  style ="border:none" onclick = "decrement(this,${i})"  value= ${i}> - </button>
        </div>
        
        <br> 
        `
        Cart.appendChild(div)
     
        // let quanti =document.getElementById('quanti' + i)
        // let carts=
        // {
        //     Name:cart[i].Name,
        //     Img:cart[i].img,
        //     TotalQuantity:cart[i].Quantity,
        //     Price:cart[i].price * Number(quanti),
        //     quanti:quanti
        // }
        // localStorage.setItem("cartDetail",JSON.stringify(carts))     

    }
    let sum  = 0;
    
        for(let i =0; i< carts.length;i++){
            // console.log(cart.TotalPrice);
            
            sum = sum + carts[i].userQ * carts[i].price
            
            

        }
        let div1 = document.createElement('div')
        div1.innerHTML = `
        <p id ="totalP">TOtalProduct :${carts.length}</p>
        <p id="totalprice">totalPrice:${sum}</p>
        <p>GST:12%</p>
        <p>Amount:${ sum + sum * 12 /100}</p>
        `
        Cart.appendChild(div1)
}
btn.addEventListener("click", ()=>{
     localStorage.setItem("cart", JSON.stringify(products))

    // if(cart.length != products.length){
    //     for(let i=0;i<cart.length;i++){
    //         for(let j = 0;j<product.length ;j++){
    //             if(cart[i] == product[j]){
    //                 console.log(cart[i],product[i]);
                    
    //                 cart[i].userQ =cart[i].userQ + 1
    //             }
    //         }
    //     }
        


    // }
//    

    Cart.innerHTML =null
     display()
    
   
})





function increament(value ,i){
//     let increamentBtn = document.getElementById("increamentbtn" + i)
//    console.log(increamentBtn);
   let quanti =document.getElementById('quanti' + i)
   let totalQuanti =document.getElementById("totalQuanti" + i)
   let x =Number(quanti.innerText)
   let y =Number(totalQuanti.innerText)
   console.log(x,y);
   
   if(x < y){
    for(let i =0; i< carts.length;i++){
         carts[i].userQ = ++x
         carts[i].totalPrice = carts[i].userQ * carts[i].price
    }
    //   quanti.innerText = ++x
   
   
    
    
     console.log(products[i].totalPrice );
    localStorage.setItem("cart", JSON.stringify(products))
   


    Cart.innerHTML =null
   
   display()
    //  console.log(x);
     
   } 
}
function decrement(value ,i){
    let decrementBtn = document.getElementById("decrementbtn" + i)
    let quanti =document.getElementById('quanti' + i)
   let totalQuanti =document.getElementById("totalQuanti" + i)
   let totalprice =document.getElementById('totalprice')
   let x =Number(quanti.innerText)
   let y =Number(totalQuanti.innerText)

   if(x > 0){
    //  quanti.innerText = --x
    products[i].userQ =--x
    console.log("hii",products[i].userQ);
    
    products[i].totalPrice = products[i].userQ * products[i].price
    console.log(products[i].totalPrice );
    localStorage.setItem("cart", JSON.stringify(products))
    Cart.innerHTML =null
    
    display()
   
   }
   if(x == 0){
    removess(value,i)

   }

}

function removess(value ,i){
    let removebtn =document.getElementById("removebtn" +i)
    console.log(removebtn.value);
    let removebt = 
    console.log(removebtn);
    let arr =[]
    let a=[]
    let product = document.getElementById("product" + i)
    console.log(product.id )
    let cart =JSON.parse(localStorage.getItem("cart"))
    for(let i =0;i<cart.length ;i++){
        
         if(removebtn.value != i ){
            arr.push(cart[i])
            console.log(arr);    
         }
         else{
            a.push(cart[i])
            console.log(a);
            


         }
 
    }

    localStorage.setItem("cart", JSON.stringify(arr))
    Cart.innerHTML =null
    
    display()
    // console.log(product)
    // products[i] =product.remove()
    
    // localStorage.setItem("cart", JSON.stringify(products))
    
}


// function hi(value ,i){
//     console.log("hello",value,i);
    
//     for(let i = 0; i < cart.length; i++){
//         let cartDetail =[
//             {
//                 Name:cart[i].Name,
//                 totalQuantity:cart[i].Quantity,
//                 price:cart[i].price,


//             }
//         ]
//     }

// }
// hi(value,i
display()