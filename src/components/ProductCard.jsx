import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../App'

export default function ProductCard({productData}) {
    // {
    //     "shippingInfo": "bhilai",
    //     "description": "Raglan Sleeves Typography Printed Boxy T-shirt\n",
    //     "saleOFF": "70",
    //     "Tags": "tshirt,maniac,men ",
    //     "price": "1659",
    //     "brand": "Maniac",
    //     "pid": "da5ec19c-1544-4d19-9c25-0c66c039368b",
    //     "category": "Mens",
    //     "Qty": "10",
    //     "Images": "https://firebasestorage.googleapis.com/v0/b/major-project-myntra-clone.appspot.com/o/products%2Fda5ec19c-1544-4d19-9c25-0c66c039368b?alt=media&token=d47b2fd8-9151-4184-b589-6078028f1c54",
    //     "discountedPrice": "497",
    //     "name": "Maniac Tee"
    // }

    const {cart,addToCart,removeFromCart,clearCart} = useContext(cartContext);

    return (
        <div className="col-2 mb-4" >
            <div className="card d-flex flex-wrap justify-content-end rounded-0" style={{ width: "100%" }}>
                <img src={productData.Images} height="300rem" className="card-img-top" alt="..." />
                <div className="text-center position-absolute top-0 end-0 bg-secondary-subtle">
                    <h6 className="m-0 bg-light p-2 ">{productData.saleOFF}% <br /> OFF</h6>
                </div>
                <div className="px-2 mt-2 w-100 ">
                    <div>
                        <p className="fw-bold mb-0">{productData.name}</p>
                        <p className="d-block text-truncate mb-1">{productData.description}</p>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <h6><i className="bi bi-currency-rupee"></i>{productData.discountedPrice}</h6>
                                <small className="text-decoration-line-through"><i className="bi bi-currency-rupee"></i>{productData.price}</small>
                            </div>
                            <div className="text-success"><small>{productData.saleOFF}% OFF</small></div>
                        </div>
                    </div>
                    <div className="my-2">
                        <button className="btn btn-sm text-light mb-2 col-12 cs-btn-primary" onClick={()=>{addToCart(productData)}}><small><i class="bi bi-cart"></i> ADD TO CART</small></button><br />
                        <Link className="btn btn-sm text-light mb-2 col-12 cs-btn-primary" to={"/checkout"}><small><i className="bi bi-bag-heart"></i> BUY NOW</small></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
