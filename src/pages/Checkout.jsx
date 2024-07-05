import React, { useContext, useState } from "react";
import { cartContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";

export default function Checkout() {
  let user = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

  const [fullname, setFullName] = useState(user.fullname);
  const [mobile, setMobile] = useState(user.mobile);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [zipcode, setZipcode] = useState(user.zipcode);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [country, setCountry] = useState(user.country);
  const [shippingMethod,setShippingMethod] = useState("express");
  const [msgSeller,setMsgSeller] = useState("");

  const paymentPage = () => {
    const userData = {
      fullname,
      mobile,
      email,
      address,
      zipcode,
      city,
      state,
      country,
      shippingMethod,
      msgSeller
    }
    navigate("/payment",{state:{userData}});
  };

  let { cart, cartTotal, productTotal } = useContext(cartContext);
  
  return (
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-9 mb-4">
            {!user ? (
              <div class="card mb-4 border shadow-0">
                <div class="p-4 d-flex justify-content-between">
                  <div class="">
                    <h5>Have an account?</h5>
                    <p class="mb-0 text-wrap ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
                    <Link
                      to={"/signup"}
                      class="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100"
                    >
                      Register
                    </Link>
                    <Link
                      to={"/signin"}
                      class="btn btn-primary shadow-0 text-nowrap w-100"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div class="card shadow-0 border">
              <div class="p-4">
                <h5 class="card-title mb-3 fw-bold">Guest checkout</h5>

                <div class="row">
                  <div class="col-12 col-md-4 mb-3">
                    <p class="mb-0">Full Name</p>
                    <div class="form-outline">
                      <input
                        value={fullname}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                        type="text"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-4 mb-3">
                    <p class="mb-0">Phone Number</p>
                    <div class="form-outline">
                      <input
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                        type="tel"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-4 mb-3">
                    <p class="mb-0">Email Address</p>
                    <div class="form-outline">
                      <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <hr className="mb-4" />

                <h5 class="card-title mb-3 fw-bold">Shipping info</h5>

                <div class="row">
                  <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input
                          onChange={()=>{setShippingMethod("express")}}
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          checked
                        />
                        <label class="form-check-label">
                          Express delivery <br />
                          <small class="text-muted">3-4 days </small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input
                          onChange={()=>{setShippingMethod("normal")}}
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                        />
                        <label class="form-check-label">
                          Normal delivery <br />
                          <small class="text-muted">6-7 days</small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input
                          onChange={()=>{setShippingMethod("self")}}
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                        />
                        <label class="form-check-label">
                          Self pick-up <br />
                          <small class="text-muted">Come to our shop </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-8 mb-3">
                    <p class="mb-0">Address</p>
                    <div class="form-outline">
                      <input
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        type="text"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4 col-6 mb-3">
                    <p class="mb-0">Postal code</p>
                    <div class="form-outline">
                      <input
                        value={zipcode}
                        onChange={(e) => {
                          setZipcode(e.target.value);
                        }}
                        type="text"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4 mb-3">
                    <p class="mb-0">City</p>
                    <div class="form-outline">
                      <input
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        type="text"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4 mb-3">
                    <p class="mb-0">State</p>
                    <div class="form-outline">
                      <input
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                        type="text"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4 col-6 mb-3">
                    <p class="mb-0">Country</p>
                    <div class="form-outline">
                      <input
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                        type="text"
                        placeholder="Type here.."
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <p class="mb-0">Message to seller</p>
                  <div class="form-outline">
                    <textarea
                      value={msgSeller}
                      onChange={(e) => {
                        setMsgSeller(e.target.value);
                      }}
                      class="form-control"
                      placeholder="Type here.."
                      rows="2"
                    ></textarea>
                  </div>
                </div>

                <div class="float-end">
                  <Link class="btn btn-light border me-3" to={"/cart"}>
                    Cancel
                  </Link>
                  {user ? (
                    <button
                      class="btn btn-success shadow-0 border"
                      onClick={paymentPage}
                    >
                      Continue
                    </button>
                  ) : (
                    <Link
                      class="btn btn-success shadow-0 border"
                      to={"/signin"}
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 ">
            <div class=" mt-4 mt-lg-0">
              <h6 class="mb-3 fw-bold fs-5">Cart Summary</h6>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2">Rs. {productTotal()}.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Discount:</p>
                <p className="mb-2 text-success">
                  - Rs. {productTotal() - cartTotal()}.00
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Tax (cgst - 6%):</p>
                <p className="mb-2 text-danger">
                  + Rs. {((productTotal() - cartTotal()) * 0.06).toFixed()}.00
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Tax (sgst - 6%):</p>
                <p className="mb-2 text-danger">
                  + Rs. {((productTotal() - cartTotal()) * 0.06).toFixed()}.00
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping cost:</p>
                <p className="mb-2 text-danger">+ Rs. 70.00</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2 fw-bold">
                  Rs.{" "}
                  {cartTotal() +
                    2 * ((productTotal() - cartTotal()) * 0.06).toFixed() +
                    70}
                  .00
                </p>
              </div>

              <hr />
              <h6 class="text-dark my-4 fw-bold">Items In Cart</h6>

              {cart.map((item, idx) => {
                return (
                  <CheckoutItem
                    key={idx}
                    idx={idx}
                    name={item.name}
                    pic={item.Image}
                    price={item.discountedPrice}
                    qty={item.qty}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
