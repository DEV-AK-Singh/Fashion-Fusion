import React,{useContext} from 'react'
import { cartContext } from '../App'
import { Link } from 'react-router-dom'
import CheckoutItem from '../components/CheckoutItem';

export default function Checkout() {
  let user = JSON.parse(localStorage.getItem("userData"));
  let {cart,addToCart,removeFromCart,clearCart,cartTotal,productTotal} = useContext(cartContext);
  return (
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 mb-4">
            {
              (!user) ? 
              <div class="card mb-4 border shadow-0">
                <div class="p-4 d-flex justify-content-between">
                  <div class="">
                    <h5>Have an account?</h5>
                    <p class="mb-0 text-wrap ">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
                    <Link to={"/signup"} class="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100">Register</Link>
                    <Link to={"/signin"} class="btn btn-primary shadow-0 text-nowrap w-100">Sign in</Link>
                  </div> 
                </div>
              </div> : ''
            }
            <div class="card shadow-0 border">
              <div class="p-4">
                <h5 class="card-title mb-3">Guest checkout</h5>
                <div class="row">
                  <div class="col-6 mb-3">
                    <p class="mb-0">First name</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                    </div>
                  </div>

                  <div class="col-6">
                    <p class="mb-0">Last name</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">Phone</p>
                    <div class="form-outline">
                      <input type="tel" id="typePhone" value="+91 " class="form-control" />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">Email</p>
                    <div class="form-outline">
                      <input type="email" id="typeEmail" placeholder="Type here" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">Keep me up to date on offers</label>
                </div>

                <hr class="my-4" />

                <h5 class="card-title mb-3">Shipping info</h5>

                <div class="row mb-3">
                  <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Express delivery <br />
                          <small class="text-muted">3-4 days </small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Normal delivery <br />
                          <small class="text-muted">6-7 days</small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label class="form-check-label" for="flexRadioDefault3">
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
                      <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                    </div>
                  </div>

                  <div class="col-sm-4 mb-3">
                    <p class="mb-0">City</p>
                    <select class="form-select">
                      <option value="1">Bhilai</option>
                      <option value="2">Durg</option>
                      <option value="3">Raipur</option>
                      <option value="3">Bilaspur</option>
                    </select>
                  </div>

                  <div class="col-sm-4 mb-3">
                    <p class="mb-0">House</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Type here" class="form-control" />
                    </div>
                  </div>

                  <div class="col-sm-4 col-6 mb-3">
                    <p class="mb-0">Postal code</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" class="form-control" />
                    </div>
                  </div>

                  <div class="col-sm-4 col-6 mb-3">
                    <p class="mb-0">Country</p>
                    <select class="form-select">
                      <option value="1">India</option>
                      <option value="2">Pakistan</option>
                      <option value="3">Bangladesh</option>
                      <option value="3">Nepal</option>
                    </select>
                  </div>
                </div>

                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                  <label class="form-check-label" for="flexCheckDefault1">Save this address</label>
                </div>

                <div class="mb-3">
                  <p class="mb-0">Message to seller</p>
                  <div class="form-outline">
                    <textarea class="form-control" id="textAreaExample1" rows="2"></textarea>
                  </div>
                </div>

                <div class="float-end">
                  <Link class="btn btn-light border" to={'/cart'}>Cancel</Link>
                  <Link class="btn btn-success shadow-0 border" to={(user)?'/payment':'/signin'}>Continue</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <div class="ms-lg-4 mt-4 mt-lg-0" >
              <h6 class="mb-3">Summary</h6>
              <div class="d-flex justify-content-between">
                <p class="mb-2">Total price:</p>
                <p class="mb-2">Rs. {productTotal()}.00</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-2">Discount:</p>
                <p class="mb-2 text-danger">- Rs. {productTotal()-cartTotal()}.00</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-2">Shipping cost:</p>
                <p class="mb-2">+ Rs. 00.00</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <p class="mb-2">Total price:</p>
                <p class="mb-2 fw-bold">Rs. {cartTotal()}.00</p>
              </div>

              <div class="input-group mt-3 mb-4">
                <input type="text" class="form-control border" name="" placeholder="Promo code" />
                <button class="btn btn-light text-primary border">Apply</button>
              </div>

              <hr />
              <h6 class="text-dark my-4">Items in cart</h6>

              {cart.map((item,idx)=>{
                return <CheckoutItem key={idx} idx={idx} name={item.name} pic={item.Images} price={item.discountedPrice}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
