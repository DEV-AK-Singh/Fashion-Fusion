import React, { useState } from 'react'
import { fetchOrder } from '../helper/Orders';
import ProductCard from '../components/ProductCard';

export default function TrackOrders() {
  const [orderData,setOrderData] = useState({});
  const [trackIn,setTrackIn] = useState('');
  const [err,setErr] =  useState(null);
  
  const handleCheck = () => {
    // console.log('fetching order.....',trackIn);
    if(trackIn){
      fetchOrder(trackIn).then((response)=>{
        // console.log(response.data());
        try {
          setOrderData(response.data());
        } catch (error) { 
          setErr(error);
        }
      });
    }
    // console.log('fetched order successfully.....');
  }

  console.log("orderdata:",orderData);

  if(err){
    console.log(err);
  }

  return (
    <div className='container'>

      {
        (err)?
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Wrong Order ID..</strong> Please enter correct Order ID..
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{setErr(null)}}></button>
        </div>:''
      }

      <div className='w-50 mx-auto my-5 '>
        <input className='form-control mb-2' type="text" placeholder='Enter your order id..' id='input' onChange={(e)=>{setTrackIn(e.target.value)}}/>
        <button className='btn btn-primary' onClick={handleCheck}>Check Now</button>
      </div>

      {(Object.keys(orderData).length!=0)?
      <div>
        {/* Ankit */}
        <h1>Order Id: {orderData.orderID}</h1>
        <h1>Order Status: {orderData.orderStatus}</h1>
        <h2>Order Amount: {orderData.orderTotal}</h2>
        <h3>Order Date: {orderData.orderDate}</h3>
      </div>  
      :
      ''}
    </div>
  )
}
