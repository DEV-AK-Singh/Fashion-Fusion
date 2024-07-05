import React from 'react'

// Table

// Product ID
// Name
// Category
// Price
// Discounted Price
// Stock

export default function ProductsTable() {
  return (
    <div className="w-100">
      <div class="row g-3 w-75 p-3 mx-auto">
        <h1 className="mt-5 text-start">Products Table</h1>
        <hr />
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">#PID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Discounted Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Stock</th>
              <th scope="col" style={{textAlign:"center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">X23A567H</th>
              <td>Printer</td>
              <td>Electronics</td>
              <td>Rs. 12000.00</td>
              <td>Rs. 10800.00</td>
              <td>10%</td>
              <td>100</td>
              <td style={{textAlign:"center"}}>
                <button className="btn btn-sm btn-primary px-4 me-2">Edit</button>
                <button className="btn btn-sm btn-danger px-4">Delete</button>
              </td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  )
}
