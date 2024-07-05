import React, { useState, useEffect } from "react";
import { uploadSingleFile } from "../../helper/UploadFiles";
import { v4 as uuidv4 } from "uuid";
import { addCategory } from "../../helper/Categories";

export default function CategoryForm() {

  const [catName, setCatName] = useState("");
  const [catImage, setCatImage] = useState("");
  const [catDesc, setCatDesc] = useState("");

  const saveCategory = () => {
    let cid = uuidv4();
    uploadSingleFile(catImage, "categories", cid).then((url) => {
      addCategory(
        cid,
        catName,
        url,
        catDesc,
        "active"
      ).then((res) => {
        console.log("category uploaded successfully!!");
      });
    });
  };

  return (
    <div className="w-100">
      <form
        class="row g-3 w-75 p-3 mx-auto"
        autocomplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="mt-5 text-start">Category Details</h1><hr />
        <div class="col-md-6 col-12">
          <label class="form-label">Category Name</label>
          <input
            value={catName}
            onChange={(e) => {
              setCatName(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter category name.."
          />
        </div>
        <div class="col-md-6 col-12">
          <label class="form-label">Category Image</label>
          <input
            onChange={(e) => {
              setCatImage(e.target.files[0]);
            }}
            type="file"
            class="form-control"
            name="product image"
          />
        </div>
        <div class="col-12">
          <label class="form-label">Category Description</label>
          <input
            value={catDesc}
            onChange={(e) => {
              setCatDesc(e.target.value);
            }}
            type="text"
            class="form-control"
            name="name"
            placeholder="Enter category description.."
          />
        </div>
        <div class="col-12">
          <button
            class="btn btn-primary float-end fw-bold"
            onClick={saveCategory}
          >
            <span>
              <i class="bi bi-plus-square me-2"></i> Add Category
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}
