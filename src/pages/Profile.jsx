import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='container row mx-auto m-3 px-0' style={{height:"720px"}}>
      <div className='col-3 border border-danger px-0 h-100'>
        <div class="card w-100 rounded-0 position-relative h-100">
          <NavLink to={"/profile"} className={({isActive})=>{return (!isActive)?"":"text-danger fw-bold"}}>
            <div class="card-header">
              <span><i class="bi bi-person-circle me-1"></i> Profile</span>
            </div>
          </NavLink>
          <ul class="list-group list-group-flush">
            <NavLink to={"/profile/my-orders"} className={({isActive})=>{return (!isActive)?"":"text-danger fw-bold"}}><li class="list-group-item"><i class="bi bi-collection me-1"></i> My Orders</li></NavLink>
            <NavLink to={"/profile/payments"} className={({isActive})=>{return (!isActive)?"":"text-danger fw-bold"}}><li class="list-group-item"><i class="bi bi-wallet2 me-1"></i> Payments</li></NavLink>
            <NavLink to={"/profile/account-settings"} className={({isActive})=>{return (!isActive)?"":"text-danger fw-bold"}}><li class="list-group-item"><i class="bi bi-person-gear me-1"></i> Account Settings</li></NavLink>
            <NavLink to={"/profile/my-stuffs"} className={({isActive})=>{return (!isActive)?"":"text-danger fw-bold"}}><li class="list-group-item"><i class="bi bi-journals me-1"></i> My Stuffs</li></NavLink>
          </ul>
          <ul class="list-group list-group-flush position-absolute bottom-0 w-100">
            <li class="list-group-item fw-bold"><i class="bi bi-box-arrow-left me-1"></i> Logout</li>
          </ul>
        </div>
      </div>
      <div className='col-9'>
        <Outlet/>
      </div>
    </div>
  )
}
