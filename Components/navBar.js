function generateNavbar() {
    return `
    <header>
        <nav>
        <ul class="logo-container">
            <li class="logo"> <a href='#'><img src="images/logo1.png"/></a></li>
            </ul>
            <ul class='nav-barr'>
                
                <input type='checkbox' id='checkk' />
                <span class="menuu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Cars</a></li>
                    <li><a href="">MotorSport</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href=""><i class="fas fa-shopping-cart"></i></a></li> <!-- Shopping cart icon -->
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
});

