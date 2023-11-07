
var pay =document.getElementById("pay");
const items = document.getElementById('item'); 

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
}, 0);
pay.innerText= `Pay: ${totalPrice.toFixed(2)} $`;;


if (cart.length === 0) {
    items.innerHTML = '<p>Your cart is empty.</p>';
} else {
    cart.map((product, index) => {
        const {image, name, price, model } = product;
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-4', 'mb-3');
        productItem.innerHTML = `
                    <img src="${image}" style="width: 100%; ">
                    <p style="text-align:center">${name} ${model}</p>
                    <p style="text-align:center">$${price}</p>
        `;
        items.appendChild(productItem);
    });
}
`
            




     `
function validateForm() {
    var name = document.getElementById("name").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var cardHolderName = document.getElementById("card-name-on-card").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById("card-email").value.trim();
  var cardNumber = document.getElementById("card-nr").value.trim();
  var cvv = document.getElementById("card-cvc").value.trim();
  var expirationDate = document.getElementById("card-expiry").value.trim();
  
  var nameError = document.getElementById("nameError");
  var lastNameError = document.getElementById("lastNameError");
  var cardHolderNameError = document.getElementById("cardHolderNameError");
  var adressError = document.getElementById("adressError");
  var emailError = document.getElementById("emailError");
  var cardNumberError = document.getElementById("cardNumberError");
  var cvvError = document.getElementById("cvvError");
  var expirationDateError = document.getElementById("expirationDateError");
 
  nameError.innerHTML = "";
  lastNameError.innerHTML = "";
  cardHolderNameError.innerHTML = "";
  adressError.innerHTML = "";
  emailError.innerHTML = "";
  cardNumberError.innerHTML = "";
  cvvError.innerHTML = "";
  expirationDateError.innerHTML = "";
  
  if (!name) {
      nameError.innerHTML = "Name is required";
      return false;
  }
  
  if (!lastName) {
      lastNameError.innerHTML = "Last name is required";
      return false;
  }
  if (!adress) {
    adressError.innerHTML = "Adress is required";
      return false;
  }
  if (!email || !/^[^\s@]+@gmail\.com$/.test(email)) {
      emailError.innerHTML = email ? "Invalid email address (e.g., salma@gmail.com)" : "Email address is required";
      return false;
  }
  
  if (!cardHolderName) {
      cardHolderNameError.innerHTML = "Name on card is required";
      return false;
  }
  
  
  if (!cardNumber || !/^(4|5)[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
      cardNumberError.innerHTML = cardNumber ? "Invalid Visa card number" : "Visa card number is required";
      return false;
  }
  
  if (!cvv || !/^[0-9]{3,4}$/.test(cvv)) {
      cvvError.innerHTML = cvv ? "Invalid CVV code" : "CVV code is required";
      return false;
  }
  
  if (!expirationDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate)) {
      expirationDateError.innerHTML = expirationDate ? "Invalid expiration date (MM/YY)" : "Expiration date is required";
      return false;
  }
  
  var formData = {
    name: name,
    lastName: lastName,
    address: adress,
    email: email,
    total:totalPrice.toFixed(2),
    cartItem:cart
   
};

var formDataArray = JSON.parse(localStorage.getItem('data')) || [];
     formDataArray.push(formData);
    localStorage.setItem('data', JSON.stringify(formDataArray));
   
    // Redirect to the thank you page
    window.location.href = "thankyou.html";

  
  }