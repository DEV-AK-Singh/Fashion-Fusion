import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({link,imgUrl,title,sale}) {
  return (
    <div className='col-lg-2 col-6 p-2 cs-btn-primary border border-3 border-white'>
      <Link to={link} style={{textDecoration:'none',color:'white'}}>
        <img src={imgUrl} alt="" className='w-100'/>
        <div className='pt-3'>
            <h1 className='fw-light text-center card-title mb-2' style={{fontSize:"12px"}}>{title}</h1>
            <h2 className='fs-4 fw-bold text-center card-dis mb-2'>{sale} OFF</h2>
            <h3 className='fs-6 fw-light text-center'>Shop Now</h3>
        </div>
      </Link>
    </div>
  )
}
