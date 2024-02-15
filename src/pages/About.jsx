import React from 'react'
import img1 from '../assets/about-top image.webp'
import img2 from '../assets/aboutimg2.avif'

export default function About() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-center'>
        <h1 className='text-center border border-danger text-danger rounded-4 w-50 my-4'>ABOUT FASHION FUSION</h1>
      </div>
      <div className='d-flex my-5' style={{height:"15rem"}}>
        <h4 className='w-50 text-center lh-base ms-5 my-auto'>Welcome to Fashion Fusion,<br/> where fashion meets comfort and style! We are dedicated to providing you with trendy, high-quality clothing that not only looks great but also feels amazing to wear.</h4>
        <img src={img1} className='w-25 h-100 ms-2 rounded-4'/>
      </div>
      <div className='d-flex my-4 p-3' style={{height:"17rem"}}> 
        <div className='border border-danger text-danger rounded-5 me-3 p-2'>
          <h4 className='text-center'>Our Story</h4>
          <h5 className=' lh-base text-center me-2 my-auto fw-normal'>"Founded in 2001, Fashion Fusion was born out of a passion for fashion and a desire to create clothing that reflects individuality and confidence. What started as a small boutique has now grown into a thriving online store, serving customers worldwide."</h5>
        </div>
        <div className=' border border-danger text-danger rounded-5 ms-3 p-2'>
          <h3 className='text-center'>Our Mission</h3>
          <h5 className=' lh-base text-center ms-2 my-auto fw-normal'>"At Fashion Fusion, our mission is simple: to empower individuals to express themselves through fashion. We believe that everyone deserves to feel confident and comfortable in what they wear, and we strive to offer a diverse range of styles and sizes to cater to all body types and preferences."</h5>
        </div>
      </div>
      <div className='d-flex justify-content-evenly my-5' style={{height:"20rem"}}>
        <div className='w-50 p-2'><img src={img2} className='w-100 h-100 rounded-4'/></div>
        <div className='w-50 p-2'>
          <h4 className='text-center'>Why Choose Us..?</h4>
          <p className='text-left lh-base my-auto'>
            <li>Trendy Styles: From casual everyday wear to elegant evening attire, we have something for every occasion.</li>
            <li>Exceptional Quality: We prioritize quality in every aspect of our business, from the materials we use to the craftsmanship of our garments.</li>
            <li>Excellent Customer Service: Our team is here to assist you every step of the way, ensuring a seamless shopping experience from start to finish.</li>
            <li>Fast Shipping: We understand the excitement of receiving your new clothing, which is why we strive to process and ship orders quickly.</li>
          </p>
        </div>
      </div>
    </div>
  )
}
