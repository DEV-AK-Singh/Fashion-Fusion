import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../helper/Auth';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const [emailId,setEmail] = useState('');
  const [password,setPassword] = useState('');
  let navigate = useNavigate();
  const handleSignIn = () => {
    login(emailId,password).then((data)=>{
      if(data?.userData){
        localStorage.setItem("userData",JSON.stringify(data.userData));
        navigate("/",{replace:true});
      }else{
        throw Error(data.statusMsg);
      }
    }).catch((err)=>{
      console.log(err);
      alert(err);
    });
  }

  return (
    <>
      <div className='w-100 px-3 mt-3'>
        <div className='text-center fw-bold text-dark'>
          <h4 className='lh-base'> Sign in to access your account and <br />continue your seamless shopping experience.</h4>
        </div>
        <div className='container mt-4'>
          <div className='d-flex align-items-center flex-column'>
            <input className='mb-3 w-50 p-2 border rounded rounded-0' type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email here..' />
            <input className='mb-3 w-50 p-2 border rounded rounded-0' type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password here..' />
            <button className='mb-3 bg-danger text-light w-50 p-1 border-0 rounded-0' onClick={handleSignIn}>Sign in</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
            <div style={{width:"40%"}}><hr /></div>
            <div><small className=' fw-bold text-dark' style={{fontSize:"12px"}}>Sign Up Instead</small></div>
            <div style={{width:"40%"}}><hr /></div>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <small className='text-center text-dark text-sm'>Don't have an account? <Link to="/auth/signup" className='text-primary'>Sign-Up</Link></small>
            <h3 className="mx-3">|</h3>
            <small className='text-center text-dark text-sm'>Forgot password? <Link to="/auth/forgot" className='text-primary'>Reset-Password</Link></small>
          </div>
        </div>
      </div>
    </>
  )
}
