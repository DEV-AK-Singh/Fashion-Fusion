import React from "react";

export default function MyProfile() {
  return (
    <div>
      <form class="row g-3">
        <div class="col-6">
          <label>Full Name</label>
          <input type="text" class="form-control rounded-0" placeholder="Full Name" disabled/>
        </div>
        <div class="col-6">
          <label>Email Address</label>
          <input type="text" class="form-control rounded-0" placeholder="Email Address" disabled/>
        </div>
        <div class="col-6">
          <label>Phone Number</label>
          <input type="text" class="form-control rounded-0" placeholder="Phone Number" disabled/>
        </div>
        <div class="col-6">
          <label>Gender</label>
          <input type="text" class="form-control rounded-0" placeholder="Gender" disabled/>
        </div>
        <div class="col-12">
          <label>Address</label>
          <input type="text" class="form-control rounded-0" placeholder="Address" disabled/>
        </div>
        <div class="col-3">
          <label>Postal Code</label>
          <input type="text" class="form-control rounded-0" placeholder="Postal Code" disabled/>
        </div>
        <div class="col-3">
          <label>City</label>
          <input type="text" class="form-control rounded-0" placeholder="City" disabled/>
        </div>
        <div class="col-3">
          <label>State</label>
          <input type="text" class="form-control rounded-0" placeholder="State" disabled/>
        </div>
        <div class="col-3">
          <label>Country</label>
          <input type="text" class="form-control rounded-0" placeholder="Country" disabled/>
        </div>
      </form>
      <div className="mt-4 d-flex justify-content-between w-100">
        <h6 className="fw-bold text-primary">Deactivate Account</h6>
        <h6 className="fw-bold text-danger">Delete Account</h6>
      </div>
      <h4 className="text-start mt-4">FAQs</h4>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item border">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              What happens when I update my email address (or mobile number)?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
            </div>
          </div>
        </div>
        <div class="accordion-item border">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              When will my Fashion Fusion account be updated with the new email address (or mobile number)?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
            </div>
          </div>
        </div>
        <div class="accordion-item border">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              What happens to my existing Fashion Fusion account when I update my email address (or mobile number)?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
            </div>
          </div>
        </div>
        <div class="accordion-item border">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Does my Seller account get affected when I update my email address?
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
