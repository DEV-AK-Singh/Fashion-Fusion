import React, { useState, useEffect } from "react";
import { uploadSingleFile } from "../../helper/UploadFiles";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../../helper/Products";

// FORM

// Order ID
// Customer Name
// Customer Email
// Customer Phone Number
// Shipping Address
// Billing Address
// Product Name
// Quantity
// Price
// Total Price
// Order Total
// Payment Method
// Payment Status
// Transaction ID
// Shipping Method
// Order Status
// Order Date and Time
// Notes or Comments
// Tracking Information
// Promo Code or Discount Information
// Refund/Return Information

export default function OrderForm() {
  const [categories, setCategories] = useState([]);

  const [pname, setPname] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [sale, setSale] = useState("");
  const [banner, setBanner] = useState("");
  const [stockQty, setStockQty] = useState("");
  const [brand, setBrand] = useState("");
  const [keywords, setKeywords] = useState("");
  const [shipAddress, setShipAddress] = useState("");

  const saveProduct = () => {
    let pid = uuidv4();
    uploadSingleFile(banner, "products", pid).then((url) => {
      addProduct(
        pid,
        pname,
        category,
        desc,
        price,
        discount,
        discountedPrice,
        sale,
        url,
        stockQty,
        brand,
        keywords,
        shipAddress
      ).then((res) => {
        console.log("product uploaded successfully!!");
      });
    });
  };

  const updateDiscountedPrice = (e) => {
    if (price) {
      let discountPercentage = e.target.value;
      let discountedPrice = price - (discountPercentage * price) / 100;
      setDiscount(discountPercentage);
      setDiscountedPrice(discountedPrice);
    } else {
      alert("Enter product price..");
      return;
    }
  };

  useEffect(() => {
    setCategories([
      { id: 1, name: "category-1" },
      { id: 2, name: "category-2" },
      { id: 3, name: "category-3" },
      { id: 4, name: "category-4" },
      { id: 5, name: "category-5" },
    ]);
  }, []);

  return (
    <div>
      <form
        class="row g-3 w-75 p-3 mx-auto"
        autocomplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="mt-5 text-start">Product Details</h1>
        <hr />
        <div class="col-md-6 col-12">
          <label class="form-label">Product Name</label>
          <input
            value={pname}
            onChange={(e) => {
              setPname(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter product name.."
          />
        </div>
        <div class="col-md-6 col-12">
          <label class="form-label">Product Category</label>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            name="category"
            class="form-select"
          >
            {categories?.map((cat, index) => {
              return index == 0 ? (
                <option selected value={cat.id}>
                  {cat.name}
                </option>
              ) : (
                <option value={cat.id}>{cat.name}</option>
              );
            })}
          </select>
        </div>
        <div class="col-md-12 col-12">
          <label class="form-label">Product Description</label>
          <input
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
            class="form-control"
            name="description"
            placeholder="Enter product description.."
          />
        </div>
        <div class="col-md-3 col-12">
          <label class="form-label">Product Price</label>
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            class="form-control"
            name="price"
            placeholder="Enter product price.."
          />
        </div>
        <div class="col-md-3 col-12">
          <label class="form-label">Discount (in %)</label>
          <input
            value={discount}
            onChange={updateDiscountedPrice}
            type="number"
            class="form-control"
            name="discount"
            placeholder="Enter product price.."
          />
        </div>
        <div class="col-md-3 col-12">
          <label class="form-label">Discounted Price (in Rs.)</label>
          <input
            value={discountedPrice}
            onChange={(e) => {
              setDiscountedPrice(e.target.value);
            }}
            type="number"
            class="form-control"
            name="discounted price"
            placeholder="Enter product discounted price.."
            disabled
          />
        </div>
        <div class="col-md-3 col-12">
          <label class="form-label">Sale ( On / Off )</label>
          <select
            onChange={(e) => {
              setSale(e.target.value);
            }}
            name="sale"
            class="form-select"
          >
            <option selected value={"off"}>
              Off
            </option>
            <option value={"on"}>On</option>
          </select>
        </div>
        <div class="col-md-6 col-12">
          <label class="form-label">Product Image</label>
          <input
            onChange={(e) => {
              setBanner(e.target.files[0]);
            }}
            type="file"
            class="form-control"
            name="product image"
          />
        </div>
        <div class="col-md-3 col-12">
          <label class="form-label">Stock</label>
          <input
            value={stockQty}
            onChange={(e) => {
              setStockQty(e.target.value);
            }}
            type="number"
            class="form-control"
            name="product image"
            placeholder="Enter product stock quantity.."
          />
        </div>
        <div class="col-md-3 col-12">
          <label class="form-label">Brand</label>
          <input
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            type="text"
            class="form-control"
            name="brand"
            placeholder="Enter brand of product.."
          />
        </div>
        <div class="col-12">
          <label class="form-label">Keywords</label>
          <input
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
            type="text"
            class="form-control"
            name="keywords"
            placeholder="Enter product's keywords or tags.."
          />
        </div>
        <div class="col-12">
          <label class="form-label">Shipping Address</label>
          <input
            value={shipAddress}
            onChange={(e) => {
              setShipAddress(e.target.value);
            }}
            type="text"
            class="form-control"
            name="address"
            placeholder="Enter shipping address of product.."
          />
        </div>
        <div class="col-12">
          <button
            class="btn btn-primary float-end fw-bold"
            onClick={saveProduct}
          >
            <span>
              <i class="bi bi-plus-square me-2"></i> Add Product
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
