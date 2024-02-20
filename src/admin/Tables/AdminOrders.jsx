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
    <div className=" px-5 py-3">
      <main className=" my-3">
        <section className=" text-center">
          <h1 className='fw-bolder'>ORDER DETAILS</h1>
        </section>      
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
                  <th></th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-top'>
                  <td>123</td>
                  <td>Ankit</td>
                  <td>Durg,CG</td>
                  <td>Rs550</td>
                  <td>Delivered</td>
                  <td>12:30PM</td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
                </tr>
                <tr className='border-top'>
                  <td>123</td>
                  <td>Ankit</td>
                  <td>Durg,CG</td>
                  <td>Rs550</td>
                  <td>Delivered</td>
                  <td>12:30PM</td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
                </tr>
                <tr className='border-top'>
                  <td>123</td>
                  <td>Ankit</td>
                  <td>Durg,CG</td>
                  <td>Rs550</td>
                  <td>Delivered</td>
                  <td>12:30PM</td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
                </tr>
                <tr className='border-top'>
                  <td>123</td>
                  <td>Ankit</td>
                  <td>Durg,CG</td>
                  <td>Rs550</td>
                  <td>Delivered</td>
                  <td>12:30PM</td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
                </tr>
                <tr className='border-top'>
                  <td>123</td>
                  <td>Ankit</td>
                  <td>Durg,CG</td>
                  <td>Rs550</td>
                  <td>Delivered</td>
                  <td>12:30PM</td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                  <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
                </tr>
            </tbody>  
          </table>
        </section>
      </main>
    </div>
  )
}
