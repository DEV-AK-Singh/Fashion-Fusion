import React, { useState, useEffect } from "react";
import { uploadSingleFile } from "../../helper/UploadFiles";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../../helper/Products";
import { updateUser } from "../../helper/Auth";

// First Name
// Last Name
// Email Address
// Password
// Confirm Password
// Phone Number
// Shipping Address
// Billing Address (if different)
// Country
// State/Province
// City
// Postal/ZIP Code
// Preferences (optional, such as newsletter subscription, preferred language, etc.)
// Date of Birth (optional)
// Gender (optional)
// Profile Picture (optional)
// Account Type (optional, for distinguishing between regular users and administrators/moderators)
// Social Media Profile Links (optional, for user profile completion)
// Security Questions (optional, for account recovery purposes)
// Terms and Conditions Agreement Checkbox

export default function UserForm() {

  const [fullname,setFullname] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [country,setCountry] = useState("");
  const [zipcode,setZipcode] = useState("");

  const saveUser = () => {
    updateUser(
      fullname,
      mobile,
      email,
      password,
      address,
      city,
      state,
      country,
      zipcode
    )
  };

  return (
    <div className="w-100">
      <form
        class="row g-3 w-75 p-3 mx-auto"
        autocomplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="mt-5 text-start">User Details</h1>
        <hr />
        
        <div class="col-12">
          <label class="form-label">Full Name</label>
          <input
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter full name.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">Mobile</label>
          <input
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter mobile number.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter email address.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter password.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">Address</label>
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter Address.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">City</label>
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter city.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">State</label>
          <input
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter state.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">Country</label>
          <input
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter country.."
          />
        </div>

        <div class="col-md-6 col-12">
          <label class="form-label">Zipcode</label>
          <input
            value={zipcode}
            onChange={(e) => {
              setZipcode(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter zipcode.."
          />
        </div>

        <div class="col-12">
          <button
            class="btn btn-primary float-end fw-bold"
            onClick={saveUser}
          >
            <span>
              <i class="bi bi-plus-square me-2"></i> Save User
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
