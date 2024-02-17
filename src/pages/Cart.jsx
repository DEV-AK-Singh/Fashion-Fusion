import React,{useContext} from 'react'
import { cartContext } from '../App'
import men1 from '../assets/men1.jpg'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem';

export default function Cart() {
  let {cart,addToCart,removeFromCart,clearCart,cartTotal,productTotal} = useContext(cartContext);
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                {
                  (cart.length!=0)
                  ?
                  cart.map((item)=>{
                    return <CartItem key={item.pid} item={item}/>
                  })
                  :
                  <h1>Cart is Empty..</h1>
                }
              </div>

              <div className="border-top pt-4 mx-4 mb-4">
                <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mb-3 border shadow-0">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="form-label">Have coupon?</label>
                    <div className="input-group">
                      <input type="text" className="form-control border" name="" placeholder="Coupon code" />
                      <button className="btn btn-light border">Apply</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">Rs. {productTotal()}.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-success">- Rs. {productTotal()-cartTotal()}.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Tax (CGST):</p>
                  <p className="mb-2">Rs. 00.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Tax (IGST):</p>
                  <p className="mb-2">Rs. 00.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">Rs. {cartTotal()}.00</p>
                </div>

                <div className="mt-3">
                  <Link to={"/checkout"} className="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </Link>
                  <Link to={"/"} className="btn btn-light w-100 border mt-2"> Back to shop </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
