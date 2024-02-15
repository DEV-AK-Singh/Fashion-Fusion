import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { addCategory } from '../../helper/Categories';
import { uploadSingleFile } from '../../helper/UploadFiles';
import CategoriesTable from '../Tables/CategoriesTable'

export default function AdminCategory() {

  const [name,setName] = useState('');
  const [imgUrl,setImgUrl] = useState('');
  const [desc,setDesc] = useState('');
  const [active,setActive] = useState('');

  const saveCategory = () => {
    let cid = uuidv4(); 
    uploadSingleFile(imgUrl,'categories',cid).then((url)=>{
        addCategory(cid,name,url,desc,active)
        .then((res)=>{
          console.log('category uploaded successfully!!');
        })
    });
  }

  return (
    <div className='d-flex w-100'>
      <div className='admincategory'>
        <h2 className='categoryh2'>Product Category</h2>
        <hr className='hrankit' />
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Category</span>
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" placeholder="Category Name..." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="formFileSm" className="form-label">Product Image :</label>
          <input onChange={(e)=>{setImgUrl(e.target.files[0])}} className="form-control form-control-sm" id="formFileSm" type="file" />
        </div>
        <br />
        <div className="form-floating">
          <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Product Description</label>
        </div>
        <br />
        <h5>Category Status</h5>
        <div className="form-check form-switch ">
          <input onChange={(e)=>{setActive(e.target.checked)}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Active / Inactive</label>
        </div>
        <br />
        <button type="button" className="btn btn-outline-primary" onClick={saveCategory}>Submit</button>
      </div>
    </div>
  )
}
