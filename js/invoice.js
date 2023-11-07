let data =JSON.parse(localStorage.getItem('data'));
const firstObject = data[0];
console.log(firstObject)
const cart = data[0].cartItem;
const names = firstObject.name;
const lastName = firstObject.lastName;
const address = firstObject.address;
const email = firstObject.email;
const total = firstObject.total;


function download() {
    // Get user data
    const currentDate = new Date();

const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

  
    const content = `
    <div class="container-fluid mt-5 mb-5">

<div class="row d-flex justify-content-center">

<div class="col-md-12">

<div class="card">


      

        <div class="invoice p-5">

            <h5>Your order Confirmed!</h5>

            <span class="font-weight-bold d-block mt-4">Hello, Chris</span>
            <span>You order has been confirmed and will be shipped in next two days!</span>

            <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">

                <table class="table table-borderless">
                    
                    <tbody>
                        <tr>
                            <td>
                                <div class="py-2">

                                    <span class="d-block text-muted">Order Date</span>
                                <span>${formattedDate}</span>
                                    
                                </div>
                            </td>

                            <td>
                                <div class="py-2">

                                    <span class="d-block text-muted">Order No</span>
                                <span>MT12332345</span>
                                    
                                </div>
                            </td>

                            <td>
                                <div class="py-2">

                                    <span class="d-block text-muted">Payment</span>
                                <span> mastercard</span>
                                    
                                </div>
                            </td>

                            <td>
                                <div class="py-2">

                                    <span class="d-block text-muted">Shiping Address</span>
                                <span>${address}</span>
                                    
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>




                
            </div>




                <div class="product border-bottom table-responsive">

                    <table class="table table-borderless">

                    <tbody>
                        <tr>
                        ${cart.map(item => `  
                        <td style='text-align:center' width="40%">
                            <span class="font-weight-bold">${item.name}</span>
                            <div class="product-qty">
                                <span class="d-block">${item.model} </span>
                                
                            </div>
                        </td>
                        <td width="20%">
                            <div class="text-right">
                                <span class="font-weight-bold">$${item.price}</span>
                            </div>
                        </td>
                        </tr>`)
                        }

    
                    </tbody> 
                        
                    </table>
                    


                </div>



                <div class="row d-flex justify-content-end">

                    <div class="col-md-5">

                        <table class="table table-borderless">

                            <tbody class="totals">

                                <tr>
                                    <td>
                                        <div class="text-left">

                                            <span class="text-muted">Subtotal</span>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-right">
                                            <span>${total}</span>
                                        </div>
                                    </td>
                                </tr>


                                 <tr>
                                    <td>
                                        <div class="text-left">

                                            <span class="text-muted">Shipping Fee</span>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-right">
                                            <span>Free</span>
                                        </div>
                                    </td>
                                </tr>


                                 <tr>
                                    <td>
                                        <div class="text-left">

                                            <span class="text-muted">Tax Fee</span>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-right">
                                            <span>$0</span>
                                        </div>
                                    </td>
                                </tr>


                                 <tr>
                                    <td>
                                        <div class="text-left">

                                            <span class="text-muted">Discount</span>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-right">
                                            <span class="text-success">$0</span>
                                        </div>
                                    </td>
                                </tr>


                                 <tr class="border-top border-bottom">
                                    <td>
                                        <div class="text-left">

                                            <span class="font-weight-bold">Subtotal</span>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-right">
                                            <span class="font-weight-bold">${total}</span>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                            
                        </table>
                        
                    </div>
                    


                </div>


                <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                <p class="font-weight-bold mb-0">Thanks for shopping with us!</p>
                <span>Youcode Team</span>



            

        </div>


        <div class="d-flex justify-content-between footer p-3">

            <span>Need Help? visit our <a href="#"> help center</a></span>
             <span>12 June, 2023</span>
            
        </div>




</div>

</div>

</div>

</div>
    `;

    // Generate PDF and download
    html2pdf().from(content).save('invoice.pdf');
};