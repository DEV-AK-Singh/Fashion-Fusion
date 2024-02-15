import React from 'react'

// Table

// Order ID
// Customer Name
// Billing Address
// Order Total
// Order Status
// Order Date and Time

export default function AdminOrders() {
  return (
    <div className='body1'>
      <h2 className='table__header1'>Admin Order List</h2>
      <section className="table__body">
      <table>
        <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Billing Address</th>
              <th>Order Total</th>
              <th>Order Status</th>
              <th>Date and Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>123</td>
              <td>Ankit</td>
              <td>Durg,CG</td>
              <td>Rs550</td>
              <td>Delivered</td>
              <td>12:30PM</td>
            </tr>
            <tr>
              <td>123</td>
              <td>Ankit</td>
              <td>Durg,CG</td>
              <td>Rs550</td>
              <td>Delivered</td>
              <td>12:30PM</td>
            </tr>
            <tr>
              <td>123</td>
              <td>Ankit</td>
              <td>Durg,CG</td>
              <td>Rs550</td>
              <td>Delivered</td>
              <td>12:30PM</td>
            </tr>
            <tr>
              <td>123</td>
              <td>Ankit</td>
              <td>Durg,CG</td>
              <td>Rs550</td>
              <td>Delivered</td>
              <td>12:30PM</td>
            </tr>
            <tr>
              <td>123</td>
              <td>Ankit</td>
              <td>Durg,CG</td>
              <td>Rs550</td>
              <td>Delivered</td>
              <td>12:30PM</td>
            </tr>
        </tbody>  
      </table>
      </section>
    </div>
  )
}
