import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../helper/Products";

export default function Category() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.docs);
    });
  }, []);
  return (
    // Priyanshu
    <div className="my-4">
      <div className="d-flex align-items-center justify-content-between mx-4 my-4">
        <div style={{ width: "20%" }}>
          <small className="fw-bold fs-4">FILTERS</small>
        </div>
        <div style={{ width: "80%" }}>
          <div className="d-flex align-content-center justify-content-end">
            <div className="border border-1 p-2">
              <label>Sort by:</label>
              <select
                className="border-0 fw-bold"
                aria-label="Default select example"
              >
                <option selected>Recommended</option>
                <option value="1">What's New</option>
                <option value="2">Popularity</option>
                <option value="3">Better Discount</option>
                <option value="4">Price: High to Low</option>
                <option value="5">Price: Low to High</option>
                <option value="6">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-2 mx-0">
        <div
          className="flex-column border m-0 w-25 d-none d-md-flex"
          style={{ maxWidth: "250px" }}
        >
          <div className="border m-0 p-4">
            <p className="fw-bold fs-6">Categories</p>
            <div>
              <input type="radio" name="gender" />
              <label className="ms-2">Mens</label>
            </div>
            <div>
              <input type="radio" name="gender" />
              <label className="ms-2">Womens</label>
            </div>
            <div>
              <input type="radio" name="gender" />
              <label className="ms-2">Boys</label>
            </div>
            <div>
              <input type="radio" name="gender" />
              <label className="ms-2">Girls</label>
            </div>
          </div>
          <div className="border m-0 p-4">
            <p className="fw-bold fs-6">Categories</p>
            <div>
              <input className="me-2" type="checkbox" />
              <label>T-Shirts</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Casual Shirts</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Formal Shirts</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Sweatshirts</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Sweaters</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Jackets</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Suits</label>
              <small className="ms-1">(6651)</small>
            </div>
          </div>
          <div className="border m-0 p-4">
            <p className="fw-bold fs-6">Brands</p>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Roadster</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Friskers</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>HRX</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>WROGN</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>U.S. polo</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Tommy Hilfiger</label>
              <small className="ms-1">(6651)</small>
            </div>
          </div>
          <div className="border m-0 p-4">
            <p className="fw-bold fs-6">Price</p>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Rs. 1000 - 5000</label>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Rs. 5001 - 10000</label>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Rs. 10001 - 15000</label>
            </div>
            <div>
              <input className="me-2" type="checkbox" />
              <label>Rs. 15001 - 20000</label>
            </div>
          </div>
          <div className="border m-0 p-4">
            <p className="fw-bold fs-6">Color</p>
            <div className="mt-1">
              <input className="me-2" type="checkbox" />
              <label className="bg-dark rounded rounded-circle me-1"></label>
              <label> Black</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div className="mt-1">
              <input className="me-2" type="checkbox" />
              <label className="bg-primary text-primary rounded rounded-circle me-1"></label>
              <label>Blue</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div className="mt-1">
              <input className="me-2" type="checkbox" />
              <label className="bg-success text-success rounded rounded-circle me-1"></label>
              <label>Green</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div className="mt-1">
              <input className="me-2" type="checkbox" />
              <label className="bg-danger text-danger rounded rounded-circle me-1"></label>
              <label>Red</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div className="mt-1">
              <input className="me-2" type="checkbox" />
              <label className="bg-warning text-warning rounded rounded-circle me-1"></label>
              <label>Yellow</label>
              <small className="ms-1">(6651)</small>
            </div>
            <div className="mt-1">
              <input className="me-2" type="checkbox" />
              <label className="bg-info text-info rounded rounded-circle me-1"></label>
              <label>SkyBlue</label>
              <small className="ms-1">(6651)</small>
            </div>
          </div>
          <div className="border m-0 p-4">
            <p className="fw-bold fs-6">Discount Range</p>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>10% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>20% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>30% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>40% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>50% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>60% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>70% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>80% and above</label>
            </div>
            <div>
              <input className="me-2" type="radio" name="Discount" />
              <label>90% and above</label>
            </div>
          </div>
        </div>
        <div className="w-100">
          <div className="border border-top border-bottom-0">
            <div className="d-flex flex-wrap row my-4 mx-auto" style={{minHeight:"100vh"}}>
              {
                products.length
                ? products.map((doc) => {
                    return <ProductCard productData={doc.data()} />;
                  })
                : <h1 className="text-start p-5">No Products Available!!</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
