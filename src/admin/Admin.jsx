import React from 'react'
import { Outlet,Link,NavLink } from 'react-router-dom'
import './assets/Admin.css'

export default function Admin() {

  return (
    <div>
      <div className='d-flex'>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px", height: '100vh' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to={"/admin/orders"} className={(isActive)=>{return (isActive)?"active nav-link text-white":"nav-link text-white"}} aria-current="page">
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/users"} className={(isActive)=>{return (isActive)?"active nav-link text-white":"nav-link text-white"}}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/category"}  className={(isActive)=>{return (isActive)?"active nav-link text-white":"nav-link text-white"}}>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/products"}  className={(isActive)=>{return (isActive)?"active nav-link text-white":"nav-link text-white"}}>
              Products
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>Admin</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            {/* <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li> */}
          </ul>
        </div>
      </div>
      <Outlet />
      </div>
    </div>
  )
}
