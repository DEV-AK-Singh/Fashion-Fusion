import React from 'react'

export default function CategoriesTable() {
  return (
    <div className="w-100">
      <div class="row g-3 w-75 p-3 mx-auto">
        <h1 className="mt-5 text-start">Categories Table</h1>
        <hr />
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col" style={{textAlign:"start"}}>#ID</th>
              <th scope="col" style={{textAlign:"start"}}>Category Name</th>
              <th scope="col" style={{textAlign:"end"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{textAlign:"start"}}>X23A567H</th>
              <td style={{textAlign:"start"}}>Electronics</td>
              <td style={{textAlign:"end"}}>
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
