import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOrder } from "../helper/Orders";
import Loader from "../components/Loader";

export default function Confirmation() {
  
  let { orderId } = useParams();
  let [orderData,setOrderData] = useState(null);

  useEffect(()=>{
    fetchOrder(orderId)
    .then((data)=>{
      console.log(data.data);
      if(data.code){
        setOrderData(data.data);
      }else{
        alert("Order not processed!! Try again..");
      }
    })
  },[])

  const handlePrint = () => {
    window.print();
  };

  return (
    (!orderData) ? <Loader/>
    :
    <section class="justify-content-center">
      <div class="card ">
        <div class="card-body">
          <div
            class="container mb-5 mt-3  border border-1 border-dark p-3"
            
          >
            <div class="row d-flex align-items-baseline">
              <div class="col-xl-9">
                <p className="fs-4">
                  <strong>Invoice ID: {orderData.orderID}</strong>
                </p>
              </div>
              <div class="col-xl-3 float-end d-flex justify-content-end ">
                <a
                  class="btn btn-light text-capitalize border-0"
                  data-mdb-ripple-color="dark"
                  onClick={handlePrint}
                >
                  <i class="fas fa-print text-primary"></i> Print
                </a>
              </div>
              <hr />
            </div>
            {orderData ? (
              <div id="Invoice" className="container">
                <div class="row">
                  <div class="col-xl-8">
                    <ul class="list-unstyled">
                      <li class="text-muted">
                        <b>To:</b> <span>{orderData.name}</span>
                      </li>
                      <li class="text-muted">{orderData.shippingAddress}</li>
                      <li class="text-muted">
                        <i class="bi bi-envelope"></i> {orderData.email}
                      </li>
                      <li class="text-muted">
                        <i class="fas fa-phone"></i> {orderData.mobile}
                      </li>
                    </ul>
                  </div>
                  <div class="col-xl-4">
                    <ul class="list-unstyled">
                      <li class="text-muted">
                        <b>Invoice</b>
                      </li>
                      <li class="text-muted">
                        <i class="fas fa-circle"></i>{" "}
                        <span class="fw-bold">ID:</span> {orderData.orderID}
                      </li>
                      <li class="text-muted">
                        <i class="fas fa-circle"></i>{" "}
                        <span class="me-1 fw-bold">Status:</span>
                        <span class="badge bg-warning text-black fw-bold">
                          {orderData.orderStatus}
                        </span>
                      </li>
                      <li class="text-muted">
                        <i class="fas fa-circle"></i>{" "}
                        <span class="fw-bold">Creation Date: </span>
                        {orderData.orderDate}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row my-2 mx-1 justify-content-center">
                  <table class="table text-dark">
                    <thead class="text-dark">
                      <tr>
                        <th scope="col"  style={{textAlign:"start"}}>Product-ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col"  style={{textAlign:"end"}}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData ? (
                        orderData.cart.map((productData, idx) => {
                          return (
                            <>
                              <tr key={idx} className="text-dark">
                                <th scope="row" style={{textAlign:"start"}}>
                                  PID-{productData.pid}
                                </th>
                                <td>{productData.name}</td>
                                <td>{productData.qty}</td>
                                <td>Rs. {productData.discountedPrice}</td>
                                <td  style={{textAlign:"end"}}>
                                  Rs.{" "}
                                  {Number(productData.discountedPrice) *
                                    Number(productData.qty)}
                                </td>
                              </tr>
                            </>
                          );
                        })
                      ) : (
                        <>
                          <tr className="text-dark">
                            <th>No Products..</th>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-xl-8 font-monospace lh-sm ">
                    <p class="ms-0 mb-0">
                      - Transaction Number: [{orderData.txnID}]
                    </p>
                    <p class="ms-0 mb-0">
                      - Invoice Number: [{orderData.orderID}]
                    </p>
                    <p class="ms-0 mb-0">- Amount: [{orderData.orderTotal}]</p>
                    <p class="ms-0 mb-0">
                      - Payment Method: [{orderData.paymentMethod}]
                    </p>
                    <p class="ms-0 mb-0">
                      - Payment Status: [{orderData.paymentStatus}]
                    </p>
                    <p class="ms-0 mb-0">- Date: [{orderData.orderDate}]</p>
                  </div>
                  <div class="col-xl-4 text-end">
                    <ul class="list-unstyled">
                      <li class="text-muted">
                        <span class="text-black me-4">SubTotal</span>Rs.{" "}
                        {orderData.orderTotal}.00
                      </li>
                      <li class="text-muted">
                        <span class="text-black me-4">Tax (0%)</span>Rs. 00.00
                      </li>
                      <hr className="w-50 ms-auto" />
                      <li class="text-black">
                        <span class="text-black me-3">Total Amount</span>
                        <span className="fs-5">
                          Rs. {orderData.orderTotal}.00
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <h1>Fetching..</h1>
            )}

            <hr />
            <div class="row">
              <div class="col-xl-10">
                <p>Thank you for your purchase</p>
              </div>
              <div class="col-xl-2">
                <Link to={"/"} class="btn btn-primary text-capitalize w-100 ">
                  Continue Shoping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
