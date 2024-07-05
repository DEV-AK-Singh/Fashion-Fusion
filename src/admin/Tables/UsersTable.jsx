import React from "react";

// Table

// Profile Picture (optional)
// First Name
// Phone Number
// Email Address
// City
// Postal/ZIP Code

export default function AdminUsers() {
  return (
    <div className="w-100">
      <div class="row g-3 w-75 p-3 mx-auto">
        <h1 className="mt-5 text-start">Users Table</h1>
        <hr />
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">#UID</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Country</th>
              <th scope="col">ZipCode</th>
              <th scope="col" style={{textAlign:"center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">X23A567H</th>
              <td>Mark</td>
              <td>7999456558</td>
              <td>singh.abhishek151019@gmail.com</td>
              <td>Bhilai</td>
              <td>CG</td>
              <td>India</td>
              <td>490001</td>
              <td style={{textAlign:"center"}}>
                <button className="btn btn-sm btn-primary px-4 me-2">Edit</button>
                <button className="btn btn-sm btn-danger px-4">Delete</button>
              </td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  );
}
