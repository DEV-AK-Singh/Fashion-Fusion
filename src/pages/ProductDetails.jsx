import React from 'react'

export default function ProductDetails() {
  return (
    <div>
      <div className='container border w-75 shadow d-flex'>
         {/* for image */}
         <div className='w-50'>
           <img style={{width:'80%'}} src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25260136/2023/9/29/584e3bfb-0f4f-408f-89b1-4b5a04b710c51695970415815KALINIWomenBlueEthnicMotifsYokeDesignRegularKurtawithTrouser1.jpg" alt="" />
         </div>


         {/* for details */}
         <div className='w-50'>
             <h5 className='fw-bolder' >KALINI</h5>
             <h6 className='fw-lighter text-secondary mb-3'>Shibori Dyed Regular Kurta with Trousers & Dupatta</h6>
               <span className='border p-2 '>
                  <small >4&#9733; |</small> 
                  <small className='fw-lighter'> 5.7k Ratings</small>
               </span>
             <hr className='mb-2' />
                <div className=''>
                   <small className='fw-bold'>₹869 </small>
                   <small className='fw-lighter'>MRP</small>
                   <small className='text-decoration-line-through fw-lighter'> ₹4345 </small>
                   <small className='fw-bolder text-danger'>(80% off)</small>
                </div>
             <h6 id='it' className='text-success'>inclusive of all taxes</h6>

             <h6 id='in' className='fw-bolder '>SELECT SIZE </h6>
                <div className='d-flex  '>
                  <h5 id='pp' className='text-center pt-2 me-1'>S</h5>
                  <h5 id='pp' className='text-center pt-2 me-1'>M</h5>
                  <h5 id='pp' className='text-center pt-2 me-1'>L</h5>
                  <h5 id='pp' className='text-center pt-2 me-1'>XL</h5>
                  <h5 id='pp' className='text-center pt-2'>XXL</h5>

                </div>

             <button className='p-1 mt-1 rounded-1 me-2 bg-danger text-center '>
              <h6 className='fw-bold text-white '>ADD TO BAG</h6>
              </button>
             
             <button className='p-1 mt-1 rounded-1 border-1 bg-white-50'>
               <h6 >WISHLIST</h6>
               </button>
             <hr />
               {/* delivery option */}
              <div>
                <h6 className='mb-3 fw-bolder '>DELIVERY OPTIONS</h6>   
                  <div class="input-group mb-3">
                    <input type="number" className="border border-secondary" id="button-addon2" placeholder="  PINCODE" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary text-danger fw-bolder " type="button" id="button-addon2">CHANGE</button>
                  </div>

                <div className='d-flex'>
                  <img style={{width:'40px'}} src="https://cdn3.iconfinder.com/data/icons/gulu-logistic/100/deliverycar_medium_gap_convert-512.png" alt="" />
                  <h6 className='del mb-3 mt-3 ms-2'>Get it by Thu, Feb 22</h6>  
                </div>
                
                

              </div>
         </div>

      </div>
     
    </div>
  )
}
