function diplayAddedCars() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    
    const groupedItems = cart.reduce((grouped, item) => {
        const key = item.title + '' + item.model; 
        if (!grouped[key]) {
            grouped[key] = { ...item, quantity: 1 };
        } else {
            grouped[key].quantity++;
        }
        return grouped;
    }, {});

    const cartItems = Object.values(groupedItems);

    if (cartItems.length === 0) {
       var norow = document.querySelector(".row");
       var Stotalspan = document.getElementById("Stotal");
       var totalspan = document.getElementById("total");
       
       norow.classList.add("norow");
       Stotalspan.innerHTML = '';
       totalspan.innerHTML = '';
    } else {
        document.getElementById("cartItem").innerHTML = cartItems.map((item, index) => {
            var { image, model, name, price, quantity } = item;
            total += price * quantity;
            
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
            document.getElementById("Stotal").innerHTML = "$ " + total.toFixed(2);
            return (
                `
            
           <tr  class="row ">
                <td class="Tcol1" >
                    <img src="${image}" style="width: 35px; height: 35px;">
                    <p>${name} ${model}</p>
                </td>
                <td ><p>x${price}</p></td>
                <td class="Tcol3">
                    <p>x${quantity}</p>
                    <i class='fa-solid fa-trash' onclick='delElement("${index}")'></i>
                </td>
            
           </tr>
           <tr class="spacer-row" >
                 <td colspan="3"></td>
            </tr>
        

                `
            );
            
        }).join('');
    }
}

let cart = [];

function delElement(index) {
    console.log('clicked');
    console.log(index);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        diplayAddedCars();
        const cartCountElement = document.getElementById('count');
        cartCountElement.innerText = cart.length;
        
    }else{
        console.log('somt wrong');
    }
}

diplayAddedCars();
