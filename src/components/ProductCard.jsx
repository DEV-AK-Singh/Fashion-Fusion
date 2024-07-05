import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";

export default function ProductCard({ productData }) {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(cartContext);

  return (
    <div className="col-6 col-md-2 mb-4">
      <div
        className="card d-flex flex-wrap justify-content-end rounded-0"
        style={{ width: "100%" }}
      >
        <img
          src={productData.Image}
          height="200px"
          className="card-img-top"
          alt={productData.description}
        />
        <div className="text-center position-absolute top-0 end-0 ">
          <small className="m-0 cs-btn-primary p-2 ">
            {productData.discount}% OFF
          </small>
        </div>
        <div className="px-2 mt-2 w-100 ">
          <div>
            <p className="fw-bold mb-0">{productData.name}</p>
            <p className="d-block text-truncate mb-1">
              {productData.description}
            </p>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h6>
                  <i className="bi bi-currency-rupee"></i>
                  {productData.discountedPrice}
                </h6>
                <small className="text-decoration-line-through">
                  <i className="bi bi-currency-rupee"></i>
                  {productData.price}
                </small>
              </div>
            </div>
          </div>
          <div className="my-2">
            <button
              className="btn btn-sm text-light mb-2 col-12 cs-btn-primary flex justify-content-center align-items-center"
              onClick={() => {
                addToCart(productData);
              }}
            >
              <i class="bi bi-cart me-1"></i>
              <small>ADD TO CART</small>
            </button>
            <br />
            <Link
              className="btn btn-sm text-light mb-2 col-12 cs-btn-primary flex justify-content-center align-items-center"
              to={"/checkout"}
            >
              <i className="bi bi-bag-heart me-1"></i>
              <small>BUY NOW</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
