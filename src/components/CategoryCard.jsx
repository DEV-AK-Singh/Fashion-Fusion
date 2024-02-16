import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({link,imgUrl,title,sale}) {
  return (
    <div className='col-lg-2 col-6 p-2 cs-btn-primary border border-3 border-white'>
      <Link to={link} style={{textDecoration:'none',color:'white'}}>
        <img src={imgUrl} alt="" className='w-100'/>
        <div className='pt-3'>
            <h1 className='fs-5 fw-light text-center card-title'>{title}</h1>
            <h2 className='fs-2 fw-bold text-center card-dis'>{sale} OFF</h2>
            <h3 className='fs-4 fw-light text-center'>Shop Now</h3>
        </div>
      </Link>
    </div>
  )
}
