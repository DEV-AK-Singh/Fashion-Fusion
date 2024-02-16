import React, {useEffect,useContext} from 'react'
import { cartContext } from '../App'
import { Link, useNavigate } from "react-router-dom";
import { addOrder } from '../helper/Orders';
export default function Payment() {
  const navigate = useNavigate();
  const {cart,addToCart,removeFromCart,clearCart,cartTotal} = useContext(cartContext);
  const placeOrder = () => {
    let date = new Date();
    date = date.toLocaleString();
    addOrder('oid#1','abhishek','singh.abhishek@gmail.com','7999456558',cart,cart.length,cartTotal(),cartTotal(),'debit card','paid','txn12345','prime','pending',date)
    .then((res)=>{
      console.log('Order placed successfully!!');
      clearCart();
      navigate('/confirmation');
    });
  }
  return (
    <>
      <div class="row p-5 m-0">
        <div class="col-lg-6 mx-auto">
          <div class="card">
            <div class="card-header">
              <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                <ul
                  role="tablist"
                  class="nav bg-light nav-pills rounded nav-fill mb-3"
                >
                  <li class="nav-item">
                    <a
                      data-toggle="pill"
                      href="#credit-card"
                      class="nav-link active"
                    >
                      {" "}
                      <i class="fas fa-credit-card mr-2"></i> Credit Card{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="pill" href="#paypal" class="nav-link active">
                      {" "}
                      <i class="fab fa-paypal mr-2"></i> Debit Card{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div id="credit-card" class="tab-pane fade show active pt-3">
                  <form role="form">
                    <div class="form-group">
                      <label for="username">
                        <h6>Card Owner</h6>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Card Owner Name"
                        required
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6>Card number</h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Valid card number"
                          class="form-control"
                          required
                        />
                        <div class="input-group-append">
                          <span class="input-group-text text-muted">
                            {" "}
                            <i class="fab fa-cc-visa mx-1"></i>{" "}
                            <i class="fab fa-cc-mastercard mx-1"></i>{" "}
                            <i class="fab fa-cc-amex mx-1"></i>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8">
                        <div class="form-group">
                          <label>
                            <span class="hidden-xs">
                              <h6>Expiration Date</h6>
                            </span>
                          </label>
                          <div class="input-group">
                            <input
                              type="number"
                              placeholder="MM"
                              name=""
                              class="form-control"
                              required
                            />{" "}
                            <input
                              type="number"
                              placeholder="YY"
                              name=""
                              class="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group mb-4">
                          <label
                            data-toggle="tooltip"
                            title="Three digit CV code on the back of your card"
                          >
                            <h6>
                              CVV <i class="fa fa-question-circle d-inline"></i>
                            </h6>
                          </label>
                          <input type="text" required class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <span className='fw-bold'>Amount: Rs.{cartTotal()}</span>
                      <button class="subscribe btn btn-primary btn-block shadow-sm float-end" onClick={placeOrder}>
                        Confirm Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
