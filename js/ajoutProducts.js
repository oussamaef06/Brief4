 
let itemscars = document.getElementById('cars');

 fetch('products.json')
        .then(response => response.json())  
        .then(data => {
          let items  = data;
         
            function cars(){
            //     const filteredProducts = items.filter(product => {
                   
            //        if (category === 'all' || product.category === category) {
            //            return true;
            //        }
            //        return false;
            //    });
      
        
                  
            itemscars.innerHTML = '';
            items.map(product => {                               
                    const productItem = document.createElement('div');    
                    productItem.classList.add('col-md-4', 'mb-3');         
                    productItem.innerHTML = `
                        <div class="card ">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">Price: $${product.price}</p>
                                <button class="btn btn-primary card" data-product-id="${product.id}"  onclick="">Add to Cart</button>
                            </div>
                        </div>
                    `;
                    itemscars.appendChild(productItem);
                });
               
          }
        
          cars();

        });


