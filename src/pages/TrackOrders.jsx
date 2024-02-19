import React, { useState } from 'react'
import { fetchOrder } from '../helper/Orders';
import ProductCard from '../components/ProductCard';

export default function TrackOrders() {
  const [orderData,setOrderData] = useState({});
  const [trackIn,setTrackIn] = useState('');
  
  const handleCheck = () => {
    // console.log('fetching order.....',trackIn);
    fetchOrder(trackIn).then((response)=>{
      // console.log(response.data());
      setOrderData(response.data());
    });
    // console.log('fetched order successfully.....');
  }

  console.log("orderdata:",orderData);

  return (
    <div className='my-5'>
      
      <div className='w-50 mx-auto '>
        <input className='form-control mb-2' type="text" placeholder='Enter your order id..' id='input' onChange={(e)=>{setTrackIn(e.target.value)}}/>
        <button className='btn btn-primary' onClick={handleCheck}>Check Now</button>
      </div>

      {(Object.keys(orderData).length!=0)?
      <div className='trackorder'> 
        <h2>OrderID: {orderData.orderID}</h2>
        <br />
        <h6 className='th6'>Order Status: {orderData.orderStatus}</h6>
        <br />
        <div className="tid">
          <h5>Transaction ID: {orderData.txnID}</h5>
          <h5>Amount : {orderData.orderTotal}</h5>
        </div>
        <br />
        <div className="tid">
          <h3>Subtotal</h3>
          <h3>Rs{orderData.orderTotal}</h3>
        </div>
        <hr />
        <h6 className='shipde'>Shipping & Coustomer Details :</h6>
        <br />
        <div className="trackcontent">
        <h6>Coustomer : {orderData.name}</h6>
        <h6>Order Date & time : {orderData.orderDate}</h6>
        </div>
        <br />
        <h6>Payment Method: {orderData.paymentMethod}</h6>
        <h6>Payment Status: {orderData.paymentStatus}</h6>
      </div>  
      :
      ''}
    </div>
  )
}
