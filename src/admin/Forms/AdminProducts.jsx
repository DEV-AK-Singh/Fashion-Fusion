import React, { useState } from 'react'
import { uploadSingleFile } from '../../helper/UploadFiles';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from '../../helper/Products';

export default function AdminProducts() {

  const [pname,setPname] = useState('');
  const [category,setCategory] = useState('');
  const [desc,setDesc] = useState('');
  const [price,setPrice] = useState('');
  const [discountedPrice,setDiscountedPrice] = useState('');
  const [sale,setSale] = useState('');
  const [banner,setBanner] = useState('');
  const [stockQty,setStockQty] = useState('');
  const [brand,setBrand] = useState('');
  const [keywords,setKeywords] = useState('');
  const [shipAddress,setShipAddress] = useState('');

  const saveProduct = () => {
    let pid = uuidv4(); 
    uploadSingleFile(banner,'products',pid).then((url)=>{
        addProduct(pid,pname,category,desc,price,discountedPrice,sale,url,stockQty,brand,keywords,shipAddress)
        .then((res)=>{
          console.log('product uploaded successfully!!');
        })
    });
  }

  return (
    <div className='divmain'>
      <h2 className='divmainheading'>Product Info</h2>
      <hr />
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">Product Name</span>
        <input value={pname} onChange={(e)=>{setPname(e.target.value)}} type="text" className="form-control" placeholder="name of the product" aria-label="Username" aria-describedby="addon-wrapping" />
      </div>
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Category</span>
        <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" className="form-control" placeholder="category goes here" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>     
      <div className="form-floating">
        <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Product Description</label>
      </div>
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text">Price</span>
        <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" className="form-control" aria-label="Amount (to the nearest Rupees)"/>
        <span className="input-group-text">Rs</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Discounted Price</span>
        <input value={discountedPrice} onChange={(e)=>{setDiscountedPrice(e.target.value)}} type="text" className="form-control" aria-label="Amount (to the nearest Rupees)"/>
        <span className="input-group-text">Rs</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Sale-OFF</span>
        <input value={sale} onChange={(e)=>{setSale(e.target.value)}} type="text" className="form-control" aria-label="Amount (to the nearest Rupees)"/>
        <span className="input-group-text">%</span>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileSm" className="form-label">Product Image :</label>
        <input onChange={(e)=>{setBanner(e.target.files[0])}} className="form-control form-control-sm" id="formFileSm" type="file"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Stock Quantity</span>
        <input value={stockQty} onChange={(e)=>{setStockQty(e.target.value)}} type="text" className="form-control" aria-label=""/>
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">Brand</span>
        <input value={brand} onChange={(e)=>{setBrand(e.target.value)}} type="text" className="form-control" placeholder="name of the Manufacturers" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      <br />
      <div className="form-floating">
        <textarea value={keywords} onChange={(e)=>{setKeywords(e.target.value)}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Product Keywords</label>
      </div>
      <br />
      <div className="form-floating">
        <textarea value={shipAddress} onChange={(e)=>{setShipAddress(e.target.value)}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Shipping Information</label>
      </div>
      <br />
      <button type="button" className="btn btn-outline-primary" onClick={saveProduct}>Submit</button>
    </div>
  )
}
