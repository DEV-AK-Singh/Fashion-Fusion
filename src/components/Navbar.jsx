import React from 'react'
import logo from '../assets/ffp-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid px-lg-5">
                <a className="navbar-brand" href="#"><img src={logo} height={'45px'}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Professional</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sports</a>
                        </li>
                    </ul>
                    <form className="d-flex col-lg-4 border border-2 p-0 bg-white rounded rounded-3" role="search">
                        <input className="form-control me-2 border-0" type="search" placeholder="Search for products, brands and more.." aria-label="Search" />
                        <button className="btn btn-white rounded rounded-circle" type="submit"><i class="bi bi-search"></i></button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-3 fw-bold d-lg-flex d-none">
                        <li className="nav-item d-flex align-items-center btn cs-btn-primary py-2 rounded rounded-circle">
                            <i class="bi bi-bag"></i>
                        </li>
                        <li className="nav-item d-flex align-items-center btn cs-btn-primary py-2 mx-2 rounded rounded-circle">
                            <i class="bi bi-heart"></i>
                        </li>
                        <li className="nav-item d-flex justify-content-center align-items-center btn cs-btn-primary py-2 rounded rounded-circle">
                            <i class="bi bi-person"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
