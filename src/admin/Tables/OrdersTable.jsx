import React, { useEffect, useState } from 'react'
import { fetchOrders } from '../../helper/Orders';

// Table

// Order ID
// Customer Name
// Billing Address
// Order Total
// Order Status
// Order Date and Time

export default function AdminOrders() {

  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    fetchOrders()
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div className="w-100">
      <div class="row g-3 w-75 p-3 mx-auto">
        <h1 className="mt-5 text-start">Orders Table</h1>
        <hr />
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">#OID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Billing Address</th>
              <th scope="col">Order Total</th>
              <th scope="col">Order Status</th>
              <th scope="col">Order Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">X23A567H</th>
              <td>Mark</td>
              <td>Qu NO.-10/d , Street-14, Sector-2, Bhilai</td>
              <td>Rs. 6446.00</td>
              <td>Pending</td>
              <td>6/28/2024, 1:48:43 AM</td>
              <td>
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
