import React from "react";

export default function CheckoutItem({name,price,qty,pic,idx}) {
  return (
    <div class="d-flex mb-4">
      <div class="me-3 position-relative">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
          {idx}
        </span>
        <img
          src={pic}
          style={{ height: "96px", width: "96px" }}
          class="img-sm rounded border"
        />
      </div>
      <div>
        <small>{name}</small><br />
        <small class="price text-muted">Price: Rs. {price}.00 X {qty}</small><br />
        <small class="price fw-bold">Total Price: Rs. {price * qty}.00</small>
      </div>
    </div>
  );
}
