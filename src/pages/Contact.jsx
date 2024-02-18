import React, { useState } from "react";


export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [comment, setComment] = useState("");


  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h1 className='text-center border border-danger text-danger rounded-4 w-50 my-4'>CONTACT US</h1>
      </div>
      <div className='container d-flex mt-4'>
        <div style={{width:"60%"}}> {/*left part*/}
          <div> {/*Map*/}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14880.11971559903!2d81.2801961!3d21.19097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d683804f76b%3A0x440191da62dfb60d!2sFusion%20and%20Fashion%20Boutique!5e0!3m2!1sen!2sin!4v1707924971759!5m2!1sen!2sin" className='rounded-3 mx-4' style={{height:"20rem", width:"90%",border:"1"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='d-flex justify-content-evenly mx-4 my-4' style={{width:"90%"}}> {/*contacts*/}
            <div className='text-center'>
              <h2><i className="bi bi-geo-alt"></i></h2>
              <h6>Location</h6>
              <small>Station Road, Durg, 491001</small>
            </div>
            <div className='text-center'>
              <h2><i className="bi bi-envelope-at"></i></h2>
              <h6>Email</h6>
              <small>fashionfusion@gmail.com</small>
            </div>
            <div className='text-center'>
              <h2><i className="bi bi-telephone"></i></h2>
              <h6>Phone</h6>
              <small>0788-0000000</small>
            </div>
          </div>
          <div className='d-flex justify-content-center my-4'> {/*social links*/}
            <h3><i className="bi bi-instagram me-3"></i></h3>
            <h3><i className="bi bi-facebook me-3"></i></h3>
            <h3><i className="bi bi-twitter me-3"></i></h3>
            <h3><i className="bi bi-youtube me-3"></i></h3>
          </div>
        </div>
        <div className='px-2' style={{width:"40%"}}> {/*Right part*/}
          <div className='border border-2 rounded-3 p-2'>
            <h3>Let's Talk</h3>
            <small>To request a quote our products, contact us directly or fill out the form and we will get back to you promptly.</small>
            <div className='d-flex flex-column my-4'> {/*Form*/}
              <small className='fw-bold mb-3'>Name</small>
              <input className='border-0 border-bottom mb-3' type="text" onChange={(e) => {setFullName(e.target.value);}} placeholder='Enter Your Name' />
              <small className='fw-bold mb-3'>Email</small>
              <input className='border-0 border-bottom mb-3' type="email" onChange={(e) => {setEmail(e.target.value);}} placeholder='Enter Your Email' />
              <small className='fw-bold mb-3'>Phone Number</small>
              <input className='border-0 border-bottom mb-3' type="number" onChange={(e) => {setMobile(e.target.value);}} placeholder='Phone Number' />
              <small className='fw-bold mb-3'>Comment</small>
              <textarea className='mb-1' onChange={(e)=>{setComment(e.target.value);}} placeholder='Comment'></textarea>
            </div>
            <div className='d-flex justify-content-center'>
              <button className='bg-danger text-light rounded-5 w-50'>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
