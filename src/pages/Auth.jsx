import React from 'react'

export default function Auth() {
  return (
    <div className='container p-3'>
      {/* <div className='text-center mt-3'>
        <h2>Welcome Back! To FASHION FUSION</h2>
        <small>Sign in to access your account and continue your seamless shopping experience.</small>
      </div>
      <div className='container'>
        <div>
          <p> Sign in: </p>
          <input type="text" placeholder='Phone Number' />
          <p> Password: </p>
          <input type="text" placeholder='Enter Your Password' />
        </div>
      </div> */}
      <div className='d-flex p-4 border border-danger rounded-4'> 
        <div className='d-flex flex-column justify-content-center align-items-center mt-3 w-50 p-2 '> {/*Left Part*/}
          <h1 className='text-center text-danger'>Welcome Back! <br/> To FASHION FUSION</h1>
          <h4 className='text-center text-secondary'>Sign in to your account to continue exploring the latest trends and exclusive offers.</h4>
          <button className="btn btn-danger w-50" type="button" data-bs-toggle="collapse" data-bs-target="#login-email" aria-expanded="false" aria-controls="login-email"> Sign In</button>
        </div>
        <div className='w-50 p-5 mt-3'>
          <div className='collapse multi-collapse border-start border-danger' id='login-email'>{/*email login Part*/}
            <div className='text-center fw-bold text-secondary'>
              <h4> Sign in to access your account and continue your seamless shopping experience.</h4>
            </div>
            <div className='container mt-4'>
              <div className='d-flex align-items-center flex-column'>
                <p className='fw-bold text-secondary mb-2 w-75'> Email: </p>
                <input className='mb-3 w-75 p-2 border rounded' type="email" placeholder='Enter Email' />
                <p className='fw-bold text-secondary mb-2 w-75'> Password: </p>
                <input className='mb-3 w-75 p-2 border rounded' type="password" placeholder='Enter Your Password' />
                <button className='bg-danger text-light w-50 p-1 border-0 rounded-pill'>Sign in</button>
              </div>
              <div className='d-flex justify-content-end mt-1'>
              <label className='text-primary'> Forgot password..?</label>
              </div>
              <div className='d-flex justify-content-evenly align-items-center'>
                <div style={{width:"40%"}}><hr /></div>
                <div><small className=' fw-bold text-secondary' style={{fontSize:"12px"}}>Sign In Instead</small></div>
                <div style={{width:"40%"}}><hr /></div>
              </div>
              <div className='d-flex flex-column align-items-center'>
                <div className='btn mt-3 mb-1' type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="login-email login-number"><label className=' fw-bold text-secondary'>Using Phone Number</label></div>
                <small className='fw-bold text-secondary'>OR</small>
                <div className='d-flex align-items-end mt-1'><label className=' fw-bold text-secondary' href="">Using Google</label> </div>
              </div>
            </div>
            <div>
              <h6 className='text-center text-secondary mt-4'>Don't have an account? <label className='text-primary'> Sign up</label></h6>
            </div>
            
          </div>
        </div>
        <div className='collapse multi-collapse border-start border-danger' id='login-number'> {/*number login Part*/}
          <div className='text-center fw-bold text-secondary'>
            <h4> Sign in to access your account and continue your seamless shopping experience.</h4>
          </div>
          <div className='container mt-4'>
            <div className='d-flex align-items-center flex-column'>
              <p className='fw-bold text-secondary mb-2 w-75'> Phone Number: </p>
              <input className='mb-3 w-75 p-2 border rounded' type="tel" placeholder='' />
              <button className='bg-warning text-light w-50 p-1 border-0 rounded-pill btn' type="button" data-bs-toggle="collapse" data-bs-target=".otp" aria-expanded="false" aria-controls="otp">Request OTP</button>
            </div>
            <div className='collapse otp text-start mt-3'>
              <div className='d-flex justify-content-center'>
                <p className='fw-bold text-secondary mb-2 w-75'> Enter OTP: </p>
              </div>
              <div className='d-flex justify-content-center'>
                <input className='mb-3 w-75 p-2 border rounded' type="tel" placeholder='' />
              </div>
              <div className='d-flex justify-content-center'>
                <button className='bg-primary text-light w-50 p-1 border-0 rounded-pill'>Sign In</button>
              </div>
            </div>
            <div className='d-flex justify-content-evenly align-items-center'>
              <div style={{width:"40%"}}><hr /></div>
              <div><small className='fw-bold text-secondary' style={{fontSize:"12px"}}>Sign In Instead</small></div>
              <div style={{width:"40%"}}><hr /></div>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <div className='mt-3 mb-1 btn'  type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="login-email"><a className='fw-bold text-secondary' href="">Using Email</a></div>
              <small className='fw-bold text-secondary'>OR</small>
              <div className='d-flex align-items-end mt-1'><a className='fw-bold text-secondary' href="">Using Google</a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
