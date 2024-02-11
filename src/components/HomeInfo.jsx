import React from 'react'

export default function HomeInfo({title,desc,align}) {
  return (
    <div className='mx-lg-5 px-2 px-lg-0'>
        <div className={`text-lg-${align}`}>
            <h1 className='fs-3 cs-text-primary'>{title}</h1>
            <p className='fw-light fs-5 '>{desc}</p>
        </div>    
    </div>
  )
}
