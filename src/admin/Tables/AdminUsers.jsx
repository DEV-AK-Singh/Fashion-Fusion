import React from 'react'
import men1 from '../../assets/men1.jpg'
import men2 from '../../assets/men2.avif'
import men3 from '../../assets/puma.avif'
import men4 from '../../assets/men4.avif'
import men5 from '../../assets/men3.avif'

// Table

// Profile Picture (optional)
// First Name
// Phone Number
// Email Address
// City
// Postal/ZIP Code 

export default function AdminUsers() {
  return (
    <div className="px-5 py-3" >
      <main className="mx-auto my-3">
        <section className=" text-center">
          <h1 className='fw-bolder'>USER DETAILS</h1>
        </section>
        <section className='table__body'>
          <table>
            <thead>
              <tr>
                <th>Profile Picture</th>
                <th>First Name</th>
                <th>Phone Number</th>
                <th>Email Address</th>
                <th>City</th>
                <th>Postal/ZIP Code</th>
                <th></th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              <tr className='border-top'>
                <td><img src={men1} width={"70rem"} height={"70rem"} alt="profile picture" /></td>
                <td>Ankit</td>
                <td>9340438468</td>
                <td>ankitkumar@gmail.com</td>
                <td>Durg</td>
                <td>XYZ50</td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
              </tr>
              <tr className='border-top'>
                <td><img src={men2} width={"70rem"} height={"70rem"} alt="profile picture" /></td>
                <td>Ankit</td>
                <td>9340438468</td>
                <td>ankitkumar@gmail.com</td>
                <td>Durg</td>
                <td>XYZ50</td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
              </tr>
              <tr className='border-top'>
                <td><img src={men3} width={"70rem"} height={"70rem"} alt="profile picture" /></td>
                <td>Ankit</td>
                <td>9340438468</td>
                <td>ankitkumar@gmail.com</td>
                <td>Durg</td>
                <td>XYZ50</td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
              </tr>
              <tr className='border-top'>
                <td><img src={men5} width={"70rem"} height={"70rem"} alt="profile picture" /></td>
                <td>Ankit</td>
                <td>9340438468</td>
                <td>ankitkumar@gmail.com</td>
                <td>Durg</td>
                <td>XYZ50</td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-warning'><i class="bi bi-pencil"></i> Edit</button></td>
                <td style={{width:"8rem", padding:"0 5px"}}><button className='w-100 p-1 btn btn-danger'><i class="bi bi-trash"></i> Delete</button></td>
              </tr>
              <tr className='border-top'>
                <td><img src={men4} width={"70rem"} height={"70rem"} alt="profile picture" /></td>
                <td>Ankit</td>
                <td>9340438468</td>
                <td>ankitkumar@gmail.com</td>
                <td>Durg</td>
                <td>XYZ50</td>
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
