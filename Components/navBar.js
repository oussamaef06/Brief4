function generateNavbar() {
    return `
    <header>
        <nav>
        <ul class="logo-container">
            <li class="logo"> <a href='./index.html'><img src="images/logo1.png"/></a></li>
            </ul>
            <ul class='nav-barr'>
                
                <input type='checkbox' id='checkk' />
                <span class="menuu">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./About.html">About</a></li>
                    <li><a href="./cars.html">Cars</a></li>
                    <li><a href="./Support.html">Support</a></li>
                    <li><a href="./cart.html"><i class="fas fa-shopping-cart" id="count" ></i></a></li> <!-- Shopping cart icon -->
                    <label for="checkk" class="close-menuu"><i class="fas fa-times"></i></label>
                </span>
                <label for="checkk" class="open-menuu"><i class="fas fa-bars"></i></label>
            </ul>
        </nav>
    </header>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = generateNavbar();
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount(cart.length);

function updateCartCount(count) {
    const cartCountElement = document.getElementById('count');
    cartCountElement.innerText = count;
}
});

