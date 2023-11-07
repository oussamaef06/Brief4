let productCars = [ 
    { id: 0, image: 'img/featured1.png', name: 'Tesla',model:'model X' ,price: 120000, },
    { id: 1, image: 'img/featured5.png', name: 'Porsche',model:'Boxter 987', price: 160000, }, 
    { id: 2, image: 'img/featured3.png', name: 'Audi',model:'E-tron ' ,price: 13000, },
    { id: 3, image: 'img/featured2.png', name: 'Tesla',model:'model 3', price: 100000, },
    { id: 4, image: 'img/audi rs6.png', name: 'Audi',model:'rs6' ,price: 220000, },
    { id: 5, image: 'img/718 cayma.png', name: 'Porsche',model:'718 cayma', price: 260000, }, 
    { id: 6, image: 'img/audi q8.png', name: 'Audi',model:'Q8 ' ,price: 230878, },
    { id: 7, image: 'img/g63.png', name: 'mercedes',model:'g63 ' ,price: 230500, },
    { id: 7, image: 'img/amg gtr.png', name: 'mercedes',model:'amg gtr ' ,price: 450500, },
    { id: 7, image: 'img/bmw x6.png', name: 'bmw',model:'X6' ,price: 130500, },
    { id: 7, image: 'img/bmw s5.png', name: 'bmw',model:'Serie 5' ,price: 230500, },
    { id: 7, image: 'img/eventador.png', name: 'lambo',model:'eventador' ,price: 700500, },
    { id: 7, image: 'img/urus.png', name: 'lambo',model:'urus' ,price: 550500, }
];


let itemscars = document.getElementById('carItems');// div cars list
const brands = document.querySelectorAll('.barndBtn'); //brans
let all = document.getElementById('all'); //ALLcategories
const searchInput = document.getElementById('search'); //input search  
const pagination = document.getElementById('pagi');//paganination

let itemsPerPage = 6;
let currentPage = 1;

let category = 'all'; 
let searchQuery ='';


//track input writte 
searchInput.addEventListener('keyup', function() { 
 searchQuery = this.value.toLowerCase();
cars();
});

//track button all for reset  
all.addEventListener('click', function() {
    searchInput.value='';
    searchQuery=''
    category = 'all';
    cars();
});

brands.forEach(button => {     
button.addEventListener('click', function() {
    category = this.value;
     itemsPerPage = 6;
     currentPage = 1;
    cars();
});
});
function cars() {   
    const filteredProducts = productCars.filter(product => { 
        if ((category === 'all' || product.name.toLowerCase().includes(category)) &&
            (searchQuery === '' || product.model.toLowerCase().includes(searchQuery))) {
            return true;
        }
    }); 

    const startIndex = (currentPage - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage; 
   
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex); 
   
    itemscars.innerHTML = '';  
    
    paginatedProducts.map((product,index) => { 
        const {id, image, name, price,model } = product;
        console.log(product);
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-4', 'mb-3');
        productItem.innerHTML = `
        <a href="./carsInfo.html">
        <article class="featured__card"  mix tesla>
        <div class="shape__smaller">
            <h1 class="featured__title">${name}</h1>

            <h3 class="featured__subtitle">${model}</h3>

            <img src="${image}"  class="featured__img" onclick="navigateToCart(${id})">
            
            <h3 class="featured__price">$${price}</h3>
            </a>
            <button class="button featured__button" onclick="addtocart(${index})">
                <i class="ri-shopping-bag-2-line"></i>
            </button>
        </div>
    </article>
        `;
        itemscars.appendChild(productItem);
    });
    renderPagination(filteredProducts.length);
}

cars();




function renderPagination(totalItems) { 
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pagination.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const listItem = document.createElement('li');  
        listItem.classList.add('page-item');
        
        const link = document.createElement('a');
        link.classList.add('page-link');
        link.href = '#';
        link.innerText = i;
        if (i === currentPage) {
            listItem.classList.add('active');
        }
        link.addEventListener('click', (event) => {
            event.preventDefault()
            currentPage = i;
            cars();
        });
        
        listItem.appendChild(link);
        pagination.appendChild(listItem);
    }
}

let cart = [];
function addtocart(i) {
    const selectedProduct = productCars[i];
     cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    cart.push(selectedProduct);

    localStorage.setItem('cart', JSON.stringify(cart));
    const cartCountElement = document.getElementById('count');
    cartCountElement.innerText = cart.length;
    
}
cars();
