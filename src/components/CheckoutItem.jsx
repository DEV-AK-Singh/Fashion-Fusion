import React from "react";

export default function CheckoutItem({name,price,pic,idx}) {
  return (
    <div class="d-flex align-items-center mb-4">
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
      <div class="">
        <a href="#" class="nav-link">
          {name}
        </a>
        <div class="price text-muted">Total: Rs. {price}.00</div>
      </div>
    </div>
  );
}
