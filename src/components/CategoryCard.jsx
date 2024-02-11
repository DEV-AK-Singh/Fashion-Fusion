import React from 'react'

export default function CategoryCard() {
  return (
    <div className='col-lg-2 col-6 p-2 cs-btn-primary border border-3 border-white'>
        <img src="https://cdn.shopify.com/s/files/1/1746/5485/products/1_568d0ae6-c5ca-412c-a266-25abedcad655_540x.jpg?v=1663073700" alt="" className='w-100'/>
        <div className='pt-3'>
            <h1 className='fs-5 fw-light text-center'>Women's Ethinic Wear</h1>
            <h2 className='fs-2 fw-bold text-center'>30-70% OFF</h2>
            <h3 className='fs-4 fw-light text-center'>Shop Now</h3>
        </div>
    </div>
  )
}
