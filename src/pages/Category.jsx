import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import men1 from '../assets/men1.jpg'
import men2 from '../assets/men2.avif'
import men3 from '../assets/men3.avif'
import men4 from '../assets/men4.avif'
import men5 from '../assets/men5.avif'
import { fetchProducts } from '../helper/Products'

export default function Category() {
  let [products,setProducts] = useState([]);
  useEffect(()=>{
    fetchProducts().then((res)=>{
      setProducts(res.docs);
    })
  },[]);
  return (
    // Priyanshu
    <div className='my-4'>
      <div className='d-flex fw-bold fs-6 mx-4'> {/*Heading*/}
        <p>Clothing And Apparels</p>
        <p className='mx-1'>- 125712 Items</p>
      </div>
      <div className='d-flex align-items-center mx-4'> {/*Sub-Heading*/}
        <div style={{width:"20%"}}>
          <small className='fw-bold fs-6'>FILTERS</small>
        </div>
        <div className='d-flex justify-content-between' style={{width:"80%"}}>
          <div className='d-flex'> {/*collapse Part*/}
            <div>
              <div className="dropdown">
                <a className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#bundle" aria-expanded="false">
                  Bundle
                </a>
              </div> 
            </div>
            <div>
              <div className="dropdown">
                <a className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#country" aria-expanded="false">
                  Country Of Origin
                </a>
              </div> 
            </div>
            <div>
              <div className="dropdown">
                <a className="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#size" aria-expanded="false">
                  Size
                </a>
              </div>   
            </div>
            
          </div>
            <div className='d-flex'> {/*Sort*/}
              <div className='d-flex flex-wrap align-content-center border border-1'>
                <label>Sort by:</label>
                <select className="border-0 fw-bold" aria-label="Default select example">
                  <option selected>Recommended</option>
                  <option value="1">What's New</option>
                  <option value="2">Popularity</option>
                  <option value="3">Better Discount</option>
                  <option value="4">Price: High to Low</option>
                  <option value="5">Price: Low to High</option>
                  <option value="6">Customer Rating</option>
                </select>
              </div>
            </div>
        </div>
      </div>
      <div className='d-flex mt-2 mx-0'> {/*main window*/}
        <div className='d-flex flex-column border m-0' style={{width:"20%,"}}> {/*Left Part*/}
          <select className="form-select fw-bold mx-auto" style={{width:"90%"}} aria-label="Default select example">
                <option selected>CATEGORIES</option>
                <option value="1">Mens</option>
                <option value="2">Womens</option>
                <option value="3">Boys</option>
                <option value="4">Girls</option>
          </select>
          <div className='mx-4'>
            <div>
              <input type='radio' name='gender'/>
              <label className='ms-2'>Mens</label>
            </div>
            <div>
              <input type='radio' name='gender'/>
              <label className='ms-2'>Womens</label>
            </div>
            <div>
              <input type='radio' name='gender'/>
              <label className='ms-2'>Boys</label>
            </div>
            <div>
              <input type='radio' name='gender'/>
              <label className='ms-2'>Girls</label>
            </div>
          </div>
          <div className='border m-0 p-4'>
            <p className='fw-bold fs-6'>Categories</p>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>T-Shirts</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Casual Shirts</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Formal Shirts</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Sweatshirts</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Sweaters</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Jackets</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Suits</label>
              <small className='ms-1'>(6651)</small>
            </div>
          </div>
          <div className='border m-0 p-4'>
          <p className='fw-bold fs-6'>Brands</p>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Roadster</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Friskers</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>HRX BY Hritik Roshan</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>WROGN</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>U.S. polo</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Tommy Hilfiger</label>
              <small className='ms-1'>(6651)</small>
            </div>
            <div>
              <input className='me-2' type='checkbox'/>
              <label>Here & Now</label>
              <small className='ms-1'>(6651)</small>
            </div>
          </div>
          <div className='border m-0 p-4'>
            <p className='fw-bold fs-6'>Price</p>
              <div>
                <input className='me-2' type='checkbox'/>
                <label>Rs. 119 to Rs. 9090</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div>
                <input className='me-2' type='checkbox'/>
                <label>Rs. 9090 to Rs. 18061</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div>
                <input className='me-2' type='checkbox'/>
                <label>Rs. 18061 to Rs. 27032</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div>
                <input className='me-2' type='checkbox'/>
                <label>Rs. 27032 to Rs. 36003</label>
                <small className='ms-1'>(6651)</small>
              </div>
          </div>
          <div className='border m-0 p-4'>
            <p className='fw-bold fs-6'>Color</p>
              <div className='mt-1'>
                <input className='me-2' type='checkbox'/>
                <label className='bg-dark rounded rounded-circle me-1'>Oo </label>
                <label> Black</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div className='mt-1'>
                <input className='me-2' type='checkbox'/>
                <label className='bg-primary text-primary rounded rounded-circle me-1'>Oo </label>
                <label>Blue</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div className='mt-1'>
                <input className='me-2' type='checkbox'/>
                <label className='bg-success text-success rounded rounded-circle me-1'>Oo </label>
                <label>Green</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div className='mt-1'>
                <input className='me-2' type='checkbox'/>
                <label className='bg-danger text-danger rounded rounded-circle me-1'>Oo </label>
                <label>Red</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div className='mt-1'>
                <input className='me-2' type='checkbox'/>
                <label className='bg-warning text-warning rounded rounded-circle me-1'>Oo </label>
                <label>Yellow</label>
                <small className='ms-1'>(6651)</small>
              </div>
              <div className='mt-1'>
                <input className='me-2' type='checkbox'/>
                <label className='bg-info text-info rounded rounded-circle me-1'>Oo </label>
                <label>SkyBlue</label>
                <small className='ms-1'>(6651)</small>
              </div>
          </div>         
          <div className='border m-0 p-4'>
            <p className='fw-bold fs-6'>Discount Range</p>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>10% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>20% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>30% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>40% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>50% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>60% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>70% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>80% and above</label>
            </div>
            <div>
              <input className='me-2' type='radio' name='Discount'/>
              <label>90% and above</label>
            </div>
          </div>
        </div>
        <div className='w-100'> {/*Right Part*/}
            <div> {/*collapse window*/}
              <div className='collapse' id='bundle'> {/*bundle collapse*/}
                  <div className='d-flex border-bottom'>
                    <div className='mx-4'>
                      <input type="checkbox"/>
                      <label>Bundles</label>
                    </div>
                    <div className='mx-4'>
                      <input type="checkbox" />
                      <label>Single Styles</label>
                    </div>
                  </div>
              </div>
              <div className='collapse' id='country'> {/*country collapse*/}
                  <div className='d-flex border-bottom'>
                    <div className='mx-4'>
                      <input type="checkbox"/>
                      <label>All Countries</label>
                    </div>
                    <div className='mx-4'>
                      <input type="checkbox" />
                      <label>India</label>
                    </div>
                  </div>
              </div>
              <div className=' collapse' id='size'> {/*size collapse*/}
                <div className='d-flex flex-wrap justify-content-center border-bottom'>
                  <div className='mx-4'>
                    <input type="checkbox"/>
                    <label>3XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS/XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XS/S</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>S</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>M</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>S/M</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>M/L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS/XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>S/L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>L/XL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XL/XXL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>3XL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS/XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XS/S</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>S</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>M/L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS/XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>S/L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>L/XL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XL/XXL</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXL</label>
                  </div><div className='mx-4'>
                    <input type="checkbox" />
                    <label>M/L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>L</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS/XS</label>
                  </div>
                  <div className='mx-4'>
                    <input type="checkbox" />
                    <label>XXS</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='border'>
                <div className="d-flex flex-wrap row my-4 mx-auto">
                    {
                      products ? products.map((doc)=>{return <ProductCard productData={doc.data()}/>}) : 'No Products Available!!'  
                    }
                </div>
            </div>
        </div> 
      </div>
    </div>
  )
}
