import React from 'react'
import banner from '../assets/banner.png'

export default function Banner() {
  return (
    <div className='p-0' style={{marginTop:'-8px'}}>
        <img src={banner} className="img-fluid w-100 m-0 p-0"/>
    </div>
  )
}
