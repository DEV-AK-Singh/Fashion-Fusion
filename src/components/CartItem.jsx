import React, { useContext, useEffect } from "react";
import { cartContext } from "../App";

export default function CartItem({ item }) {
  let {
    cart,
    addToCart,
    getProductFromCart,
    incQtyFromCart,
    decQtyFromCart,
    removeFromCart,
    clearCart,
    cartTotal,
    productTotal,
  } = useContext(cartContext);
  return (
    <div className="row gy-3 my-4">
      <div className="col-lg-5">
        <div className="me-lg-5">
          <div className="d-flex">
            <img
              src={item.Image}
              className="border rounded me-3"
              height={"108px"}
              width={"108px"}
            />
            <div>
              <a href="#" className="nav-link">
                {item.name}
              </a>
              <div className="my-2">
                <div class="btn-group me-4">
                  <button onClick={()=>{decQtyFromCart(item.pid)}} type="button" class="btn btn-sm btn-outline-primary">
                    -
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-primary">
                    {getProductFromCart(item.pid).qty}
                  </button>
                  <button onClick={()=>{incQtyFromCart(item.pid)}} type="button" class="btn btn-sm btn-outline-primary">
                    +
                  </button>
                </div>
              </div>
              <p className="btn btn-sm btn-warning">
                Sale {Number(item.discount)}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
        <div>
          <small>
            <b>Rs. </b> {Number(item.discountedPrice)}.00 <span className="text-muted text-nowrap text-decoration-line-through ">{Number(item.price)}.00</span>
          </small>
          <br />
          <small>
          <b><span className="text-success">Total Price</span> = Rs. </b> {Number(item.discountedPrice) * getProductFromCart(item.pid).qty}.00
          </small>
        </div>
      </div>
      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
        <div className="float-md-end">
          <a
            onClick={() => {
              removeFromCart(item.pid);
            }}
            className="btn btn-light border text-danger icon-hover-danger fw-bold"
          >
            Remove From Cart
          </a>
        </div>
      </div>
    </div>
  );
}
