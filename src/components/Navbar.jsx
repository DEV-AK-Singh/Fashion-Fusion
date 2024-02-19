import React, { useContext } from "react";
import logo from "../assets/ffp-logo.png";
import { Link } from "react-router-dom";
import { cartContext } from "../App";

export default function Navbar() {
  let user = JSON.parse(localStorage.getItem("userData"));
  const logout = () => {
    localStorage.removeItem("userData");
  };
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(cartContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid px-lg-5">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} height={"45px"} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <Link className="nav-link" to={"/category/men"}>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/women"}>
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/kids"}>
                Kids
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/professional"}>
                Professional
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/sports"}>
                Sports
              </Link>
            </li>
          </ul>
          <form
            className="d-flex col-lg-4 border border-2 p-0 bg-white rounded rounded-3"
            role="search"
          >
            <input
              className="form-control me-2 border-0"
              type="search"
              placeholder="Search for products, brands and more.."
              aria-label="Search"
            />
            <button
              className="btn btn-white rounded rounded-circle"
              type="submit"
            >
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
        <ul className="ms-0 ms-md-3 navbar-nav flex-row d-flex align-items-center justify-content-center">
            <Link to={"/cart"}>
                <li className="nav-item position-relative d-flex align-items-center btn cs-btn-primary py-2 me-2 rounded rounded-circle">
                <i class="bi bi-bag"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {cart.length}
                </span>
                </li>
            </Link>
            <Link to={"/wishlist"}>
                <li className="nav-item  d-flex align-items-center btn cs-btn-primary py-2 me-2 rounded rounded-circle">
                <i class="bi bi-heart"></i>
                </li>
            </Link>
            <Link to={"/profile"}>
                <li className="nav-item d-flex justify-content-center align-items-center btn cs-btn-primary py-2 rounded rounded-circle">
                <i class="bi bi-person"></i>
                </li>
            </Link>
            {user ? (
                <Link to={"/signin"} onClick={logout}>
                <li className="nav-item d-flex justify-content-center align-items-center btn cs-btn-primary py-2 ms-2 rounded rounded-circle">
                    <i class="bi bi-box-arrow-right"></i>
                </li>
                </Link>
            ) : (
                ""
            )}
        </ul>
      </div>
    </nav>
  );
}
