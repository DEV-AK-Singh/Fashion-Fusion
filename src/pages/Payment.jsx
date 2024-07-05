import React, { useEffect, useContext } from "react";
import { cartContext } from "../App";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addOrder } from "../helper/Orders";
import { v4 as uuidv4 } from "uuid";

export default function Payment() {
  const navigate = useNavigate();

  let { cart, clearCart, cartTotal, productTotal } = useContext(cartContext);

  let { state } = useLocation();

  const placeOrder = () => {
    let oid = uuidv4();
    let txnid = uuidv4();
    let date = new Date();
    date = date.toLocaleString();

    let orderTotal =
      cartTotal() + 2 * ((productTotal() - cartTotal()) * 0.06).toFixed() + 70;
    let productsQty = cart?.reduce(
      (initial, current) => initial + current.qty,
      0
    );

    addOrder(
      oid,
      "pending",
      date,
      orderTotal,
      "paid",
      "debit card",
      state.userData.address,
      state.userData.shippingMethod,
      state.userData.fullname,
      state.userData.email,
      state.userData.mobile,
      state,
      cart,
      productsQty,
      txnid
    ).then(() => {
      const orderData = {
        orderID: oid,
        orderStatus: "pending",
        orderDate: date,
        orderTotal: orderTotal,
        paymentStatus: "paid",
        paymentMethod: "debit card",
        shippingAddress: state.userData.address,
        shippingMethod: state.userData.shippingMethod,
        name: state.userData.fullname,
        email: state.userData.email,
        mobile: state.userData.mobile,
        user: state,
        cart: cart,
        productsQty: productsQty,
        txnID: txnid,
      };
      console.log("Order placed successfully!!");
      navigate(`/confirmation/${oid}`);
      clearCart();
    });
  };
  return (
    <>
      <div class="row p-5 m-0">
        <div class="col-lg-6 mx-auto">
          <div class="card">
            <div class="card-header">
              <h3 className="text-center mt-2">Payment Details</h3>
              <hr />
              <div class="tab-content">
                <div id="credit-card" class="tab-pane fade show active pt-3">
                  <form role="form">
                    <div class="form-group mb-2">
                      <label for="username">
                        <h6>Card Holder Name</h6>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Card Owner Name"
                        required
                        class="form-control"
                      />
                    </div>
                    <div class="row g-3">
                      <div class="col">
                        <div class="form-group mb-2">
                          <label for="cardNumber">
                            <h6>Card number</h6>
                          </label>
                          <div class="input-group form-control">
                            <input
                              type="text"
                              name="cardNumber"
                              placeholder="Valid card number"
                              class="col-9 border-0 m-0"
                              required
                            />
                            <div class="input-group-append m-0 text-end col-3">
                              <span class="text-muted py-2">
                                <i class="fab fa-cc-visa mx-1"></i>
                                <i class="fab fa-cc-mastercard mx-1"></i>
                                <i class="fab fa-cc-amex mx-1"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <label for="inputState" class="form-label">
                          Select Card
                        </label>
                        <select id="inputState" class="form-select">
                          <option selected>Debit Card</option>
                          <option>Credit Card</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mb-2">
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
                            />
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
                          <input
                            type="text"
                            required
                            class="form-control"
                            placeholder="***"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <span className="fw-bold">
                        Amount: Rs.
                        {cartTotal() +
                          2 *
                            ((productTotal() - cartTotal()) * 0.06).toFixed() +
                          70}
                      </span>
                      {cart.length == 0 ? (
                        <>
                          <Link
                            class="subscribe btn btn-sm btn-warning btn-block shadow-sm float-end"
                            to={"/"}
                          >
                            Add Products In Cart
                          </Link>
                        </>
                      ) : (
                        <button
                          class="subscribe btn btn-sm btn-primary btn-block shadow-sm float-end"
                          onClick={placeOrder}
                        >
                          Confirm Payment
                        </button>
                      )}
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
