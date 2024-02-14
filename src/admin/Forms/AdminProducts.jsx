import React from 'react'

// FORM

// Product Name
// Category/Department
// Description
// Price
// Discounted Price
// Sale-OFF
// Images
// Stock Quantity
// Brand/Manufacturer
// Tags/Keywords
// Shipping Information

export default function AdminProducts() {
  return (
    <div className='divmain'>
      <h2 className='divmainheading'>Product Info</h2>
      <hr />
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">Product Name</span>
        <input type="text" class="form-control" placeholder="name of the product" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      <br />
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Category/Department</span>
        <input type="text" class="form-control" placeholder="category goes here" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>     
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Product Description</label>
      </div>
      <br />
      <div class="input-group mb-3">
        <span class="input-group-text">Price of the product</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest Rupees)"/>
        <span class="input-group-text">Rs</span>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Discounted Price</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest Rupees)"/>
        <span class="input-group-text">Rs</span>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Sale-OFF</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest Rupees)"/>
        <span class="input-group-text">%</span>
      </div>
      <div class="mb-3">
        <label for="formFileSm" class="form-label">Product Image :</label>
        <input class="form-control form-control-sm" id="formFileSm" type="file"/>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Stock Quantity in Numbers</span>
        <input type="text" class="form-control" aria-label=""/>
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">Brand</span>
        <input type="text" class="form-control" placeholder="name of the Manufacturers" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      <br />
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Product Keywords</label>
      </div>
      <br />
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Shipping Information</label>
      </div>
      <br />
      <button type="button" class="btn btn-outline-primary">Submit</button>
    </div>
  )
}
