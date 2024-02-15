import React from 'react'

export default function Profile() {
  return (
    // John
    <div className='container d-flex '>
      
      <div  style={{width:'30%' }}>
            <div className='hello ' style={{height:"10vh"}}>
               <img style={{height:'90%',marginLeft:'50px',marginBottom:'10px'}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
               <h2 style={{display:"inline",margin:'20px'}}>Hello!</h2>
            </div>
            <div className='orders-list mt-4' style={{height:"120vh"}}>
                 <div className='mt-4'>
                 <img className='ms-5' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                 <h5 className=' ms-3 d-inline '>MY ORDERS    </h5>
                 </div>
              <hr />
              <img className='ms-5 mb-3' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=" alt="" />
              <h5 className=' ms-3 mt-2 d-inline ' >ACCOUNT SETTINGS</h5>
                   <div className='ms-5'>
                      <h6>Profile Information</h6>
                      <h6>Manage Address</h6>
                      <h6>PAN Information</h6>
                   </div> <br />
                   <hr />
               <img className='ms-5 mb-2' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+" alt="" />    
              <h5 className=' ms-3 mt-2 d-inline ' >PAYMENTS</h5>     
                    <div className='ms-5'>
                      <h6>UPI</h6>
                      <h6>Phone Pe</h6>
                      <h6>Net Banking</h6>
                      <h6>Card Payment</h6>
                    </div>
                    <br />
                    <hr />
                <img className='ms-5 mb-2' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4=" alt="" />    
               <h5 className=' ms-3 mt-2 d-inline ' >MY STUFF</h5>   
                      <div className='ms-5'>
                        <h6>Coupons</h6>
                        <h6>My Review </h6>
                        <h6>Rating</h6>
                        <h6>My Wishlist</h6>
                      </div>  <br />
                      <hr />
                <h5><i  class="bi bi-power"></i> LOG OUT</h5>      
                    

            </div>

      </div>
      {/* right section */}
      <div className='profile-info' style={{width:'70%' }}>
          <div className='d-flex ms-4'>
          <h5 className='mb-4 mt-4'>Personal Information</h5>
           <a className='ms-3 mt-4 text-decoration-none fw-bold ' href="">Edit</a>
          </div>
            <div className='input-box '>
                 <input className='ms-4 rounded' type="text" placeholder=' First Name' /> 
                 <input className='rounded' style={{marginLeft:"10px"}} type="text" placeholder=' Last Name' />
            </div>

            <h5 className='mt-3' style={{margin:"30px"}}>Your Gender</h5>
               <div className='d-flex mt-0 '>
                   <div class="form-check">
                      <input   type="radio" name="gender" id="male"/>
                         <label className='name' for="male">Male</label>
                  </div>
                    <div class="form-check">
                          <input type="radio" name="gender" id="female" checked/>
                          <label className='name'  for="female">Female</label>
                    </div>
               </div>

             <div className='d-flex ms-4'>
                  <h5 className='mb-4 mt-4'>Email Address</h5>
                  <a className='ms-3 mt-4 text-decoration-none fw-bold ' href="">Edit</a>
             </div>

             <input  className='ms-4 rounded' type="text"placeholder=' Enter your Email..' />
             
             <div className='d-flex ms-4' >
             <h5 className='mb-4 mt-4'>Mobile No.</h5>
             <a className='ms-3 mt-4 text-decoration-none fw-bold ' href="">Edit</a>
             </div>

             <input className='ms-4 rounded' type="text"placeholder='' />
             < br />
             {/* <button  className='ms-4 mt-5'>submit</button> */}
             <input  class="btn btn-primary ms-4 mt-4 " type="submit" value="Submit"></input>
              <br /><hr />
             <div className='ms-4 mt-5'>
              <h4>FAQs</h4>
              <p className='fw-bolder'>What happens when I update my email address (or mobile number)?</p>
              <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
              
              <p className='fw-bolder'>When will your account be updated with the new email address (or mobile number)?</p>
              <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
             </div>
      </div>


    </div>
  )
}
