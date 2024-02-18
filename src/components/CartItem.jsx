import React,{useContext} from 'react'
import { cartContext } from '../App'

export default function CartItem({item}) {
    let {cart,addToCart,removeFromCart,clearCart,cartTotal,productTotal} = useContext(cartContext);
    return (
      <div className="row gy-3 mb-4">
        <div className="col-lg-5">
          <div className="me-lg-5">
            <div className="d-flex">
              <img
                src={item.Images}
                className="border rounded me-3"
                height={"108px"}
                width={"108px"}
              />
              <div>
                <a href="#" className="nav-link">
                  {item.name}
                </a>
                <div className="my-2">
                  <select style={{ width: "100px" }} className="form-select me-4 py-1 px-2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <p className="btn btn-sm btn-warning">Sale {item.saleOFF}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
          <div className="">
            <text className="h6">Rs. {item.discountedPrice}.00</text> <br />
            <small className="text-muted text-nowrap text-decoration-line-through ">
              Rs. {item.price}.00
            </small>
          </div>
        </div>
        <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
          <div className="float-md-end">
            <a
              onClick={()=>{removeFromCart(item.pid)}}
              className="btn btn-light border text-danger icon-hover-danger"
            >
              Remove
            </a>
          </div>
        </div>
      </div>
    );
}
