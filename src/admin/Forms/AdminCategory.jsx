import React from 'react'
import CategoriesTable from '../Tables/CategoriesTable'

export default function AdminCategory() {
  return (
    <div className='d-flex w-100'>
      <div className='admincategory'>
        <h2 className='categoryh2'>Product Category</h2>
        <hr className='hrankit' />
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Category</span>
          <input type="text" class="form-control" placeholder="Category Name..." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <br />
        <div class="mb-3">
          <label for="formFileSm" class="form-label">Product Image :</label>
          <input class="form-control form-control-sm" id="formFileSm" type="file" />
        </div>
        <br />
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Product Description</label>
        </div>
        <br />
        <h5>Category Status</h5>
        <div class="form-check form-switch ">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label class="form-check-label" for="flexSwitchCheckDefault"> Active / Inactive</label>
        </div>
        <br />
        <button type="button" class="btn btn-outline-primary">Submit</button>
      </div>
      <CategoriesTable />
    </div>
  )
}
