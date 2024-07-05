import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    <div className='p-4'>
      <div className='d-flex flex-column flex-sm-row p-4 border border-danger rounded-0 row m-0'> 
        <div className='d-flex flex-column justify-content-center align-items-center col-12 col-sm-6'> 
          <h1 className='text-center text-danger'>WELCOME BACK !! <br/> To Fashion Fusion</h1>
          <h5 className='text-center text-secondary lh-lg fw-lighter'>Sign in to your account to continue exploring <br/>the latest trends and exclusive offers.</h5>
        </div>
        <div className='col-12 col-sm-6 border-start border-danger d-flex align-items-center' style={{minHeight:"600px"}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
