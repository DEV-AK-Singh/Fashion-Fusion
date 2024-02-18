import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../helper/Auth';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Signin() {
  const [emailId,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [otp,setOtp] = useState('');
  let navigate = useNavigate();
  const handleSignIn = () => {
    // console.log('clicked',emailId,password);
    login(emailId,password).then((data)=>{
      localStorage.setItem("userData",JSON.stringify(data.userData));
      console.log(data);
      setTimeout(()=>{
        return navigate("/");
      },2000);
    })
  }

  return (
    <div className='p-3'>
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
                <input className='mb-3 w-75 p-2 border rounded' type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' />
                <p className='fw-bold text-secondary mb-2 w-75'> Password: </p>
                <input className='mb-3 w-75 p-2 border rounded' type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Password' />
                <button className='bg-danger text-light w-50 p-1 border-0 rounded-pill' onClick={handleSignIn}>Sign in</button>
              </div>
              <div className='d-flex justify-content-end mt-1'>
              <Link className='text-primary'> Forgot password..?</Link>
              </div>
              <div className='d-flex justify-content-evenly align-items-center'>
                <div style={{width:"40%"}}><hr /></div>
                <div><small className=' fw-bold text-secondary' style={{fontSize:"12px"}}>Sign In Instead</small></div>
                <div style={{width:"40%"}}><hr /></div>
              </div>
              <div className='d-flex flex-column align-items-center'>
                <div className='btn mt-3 mb-1' type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="login-email login-number"><Link className=' fw-bold text-secondary'>Using Phone Number</Link></div>
                <small className='fw-bold text-secondary'>OR</small>
                <div className='btn d-flex align-items-end mt-1' type="button"><Link className=' fw-bold text-secondary' href="">Using Google</Link> </div>
              </div>
            </div>
            <div>
              <h6 className='text-center text-secondary mt-4'>Don't have an account? <Link to="/signup" className='text-primary'> Sign up</Link></h6>
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
              <input className='mb-3 w-75 p-2 border rounded' type="tel" onChange={(e)=>{setPhoneNumber(e.target.value)}}  placeholder='' />
              <button className='bg-warning text-light w-50 p-1 border-0 rounded-pill btn' type="button" data-bs-toggle="collapse" data-bs-target=".otp" aria-expanded="false" aria-controls="otp">Request OTP</button>
            </div>
            <div className='collapse otp text-start mt-3'>
              <div className='d-flex justify-content-center'>
                <p className='fw-bold text-secondary mb-2 w-75'> Enter OTP: </p>
              </div>
              <div className='d-flex justify-content-center'>
                <input className='mb-3 w-75 p-2 border rounded' type="tel" onChange={(e)=>{setOtp(e.target.value)}} placeholder='' />
              </div>
              <div className='d-flex justify-content-center'>
                <button className='bg-primary text-light w-50 p-1 border-0 rounded-pill' >Sign In</button>
              </div>
            </div>
            <div className='d-flex justify-content-evenly align-items-center'>
              <div style={{width:"40%"}}><hr /></div>
              <div><small className='fw-bold text-secondary' style={{fontSize:"12px"}}>Sign In Instead</small></div>
              <div style={{width:"40%"}}><hr /></div>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <div className='mt-3 mb-1 btn'  type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="login-email"><Link className='fw-bold text-secondary' href="">Using Email</Link></div>
              <small className='fw-bold text-secondary'>OR</small>
              <div className='d-flex align-items-end mt-1'><Link className=' fw-bold text-secondary' href="">Using Google</Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
