import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../helper/Auth";
import { Navigate, useNavigate } from 'react-router-dom';

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
    // console.log(userData);
    signUp(fullname,mobile,email,password,address,city,state,country,zipcode).then((data)=>{
      localStorage.setItem("userData",JSON.stringify(userData));
      console.log(data);
      setTimeout(()=>{
        return navigate("/");
      },2000);
    });
  }

  return (
    <div className=" p-3">
      <div className="text-danger my-3">
        <h1>Create Your Shopping Account Here!</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex  flex-column bg-light border border-danger rounded-5 w-50 p-3">
          <div className="border-bottom text-secondary fs-6 fw-bold p-4">
            <div className="d-flex justify-content-between mb-3">
              <label className=" my-auto">FULL NAME:</label>
              <input
                className=" fs-6 border rounded-2 p-2 w-75 ms-3"
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <label className=" my-auto">PHONE NUMBER:</label>
              <input
                className="fs-6 border rounded-2 p-2 w-75 ms-3"
                type="number"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                placeholder="Your Phone Number"
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <label className=" my-auto">EMAIL:</label>
              <input
                className="fs-6 border rounded-2 p-2 w-75 ms-3"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <label className=" my-auto">PASSWORD:</label>
              <input
                className="fs-6 border rounded-2 p-2 w-75 ms-3"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <label className=" my-auto">ADDRESS:</label>
              <textarea
                name=""
                className="border p-2 w-75"
                rows="1"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Your Address"
              ></textarea>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <label className="w-25 my-auto">City:</label>
              <input
                className="fs-6 border rounded-2 p-2 w-50 ms-3"
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="Your City"
              />
              <label className="w-25 my-auto ms-3">State:</label>
              <input
                className="fs-6 border rounded-2 p-2 w-50 ms-3"
                type="text"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                placeholder="Your State"
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <label className="w-25 my-auto">Country:</label>
              <input
                className="fs-6 border rounded-2 p-2 w-50 ms-3"
                type="text"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                placeholder="Your Country"
              />
              <label className="w-25 my-auto ms-3">Zipcode:</label>
              <input
                className="fs-6 border rounded-2 p-2 w-50 ms-3"
                type="text"
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
                placeholder="Your Zipcode"
              />
            </div>
          </div>
          <div>
            <div style={{ fontSize: "12px" }}>
              <div className="d-flex mt-2">
                <input className="ms-3" type="checkbox" />
                <label className="ms-1">
                  Subscribe to our newsletter for updates and promotions
                </label>
              </div>
              <div className="d-flex">
                <input className="ms-3" type="checkbox" />
                <label className="ms-1 me-1">
                  I agree to the Terms and Conditions{" "}
                </label>
                <div>
                  <Link to="/terms_and_services" style={{ fontSize: "9px" }}>
                    {" "}
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="d-flex">
                <input className="ms-3" type="checkbox" />
                <label className="ms-1 me-1">
                  I agree to the Privacy Policies
                </label>
                <div>
                  <Link to="/privacy_policy" style={{ fontSize: "9px" }}>
                    {" "}
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary" onClick={handleCreateAccount}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
