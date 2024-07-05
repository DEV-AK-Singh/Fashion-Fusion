import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../helper/Auth";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  let navigate = useNavigate();
  
  const [fullname, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleCreateAccount = () => {
    const userData = {
      fullname,
      mobile,
      email,
      password,
      address,
      city,
      state,
      country,
      zipcode,
    }; 
    signUp(fullname,mobile,email,password,address,city,state,country,zipcode)
    .then((data)=>{
      localStorage.setItem("userData",JSON.stringify(userData));
      navigate("/",{replace:true});
    }).catch((err)=>{
      console.log(err);
      alert(err);
    });
  }

  return (
    <>
      <div className='w-100 px-3 mt-3'>
        <div className='text-center fw-bold text-dark'>
          <h4 className='lh-base'> Sign up to access your account and <br />continue your seamless shopping experience.</h4>
        </div>
        <div className='container mt-4'>
          <div>
            <div className="m-0 p-0">
              <div className="row gap-2 mb-2">
                <input className='p-2 border rounded rounded-0 col' type="text" onChange={(e)=>{setFullName(e.target.value)}} placeholder='Enter Fullname..' />
                <input className='p-2 border rounded rounded-0 col' type="text" onChange={(e)=>{setMobile(e.target.value)}} placeholder='Enter Mobile..' />
              </div>
              <div className="row gap-2 mb-2">
                <input className='p-2 border rounded rounded-0 col' type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email..' />
                <input className='p-2 border rounded rounded-0 col' type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password..' />
              </div>
              <div className="row gap-2 mb-2">
                <input className='p-2 border rounded rounded-0 w-100' type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder='Enter Address..' />
              </div>
              <div className="row gap-2 mb-2">
                <input className='p-2 border rounded rounded-0 col' type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder='Enter City..' />
                <input className='p-2 border rounded rounded-0 col' type="text" onChange={(e)=>{setState(e.target.value)}} placeholder='Enter State..' />
                <input className='p-2 border rounded rounded-0 col' type="text" onChange={(e)=>{setCountry(e.target.value)}} placeholder='Enter Country..' />
                <input className='p-2 border rounded rounded-0 col' type="text" onChange={(e)=>{setZipcode(e.target.value)}} placeholder='Enter Zipcode..' />
              </div>
              <div className="row gap-2 my-2">
                <div style={{fontSize:"12px"}} className='px-0 py-2 col d-flex justify-content-center align-items-center'>
                  <input type="checkbox" />
                  <label className="mx-1">I agree to the Terms and Policies</label>
                  <Link to="/terms_and_services">Learn more..</Link>
                </div>
              </div>
              <div className="row gap-2 my-2">
                <button className='col bg-danger text-light w-100 p-1 border-0 rounded-0' onClick={handleCreateAccount}>Sign Up</button>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
            <div style={{width:"40%"}}><hr /></div>
            <div><small className=' fw-bold text-dark' style={{fontSize:"12px"}}>Sign In Instead</small></div>
            <div style={{width:"40%"}}><hr /></div>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <small className='text-center text-dark text-sm'>Do you have an account? <Link to="/auth/signin" className='text-primary'>Sign-In</Link></small>
            <h3 className="mx-3">|</h3>
            <small className='text-center text-dark text-sm'>Forgot password? <Link to="/auth/forgot" className='text-primary'>Reset-Password</Link></small>
          </div>
        </div>
      </div>
    </>
  );
}
