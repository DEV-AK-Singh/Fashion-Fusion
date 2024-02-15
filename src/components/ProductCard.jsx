import React from 'react'
import men1 from '../assets/men1.jpg'
import men2 from '../assets/men2.avif'
import men3 from '../assets/men3.avif'
import men4 from '../assets/men4.avif'
import men5 from '../assets/men5.avif'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, name, banner}) {
    return (
        <Link className="col-2 mb-4" to={'/cart'} style={{textDecoration:'none',color:'black'}}>
            <div className="card d-flex flex-wrap justify-content-end rounded-0" style={{ width: "100%" }}>
                <img src={men1} height="300rem" className="card-img-top" alt="..." />
                <div className="text-center position-absolute top-0 end-0 bg-secondary-subtle">
                    <h6 className="m-0 bg-light p-2 ">50% <br /> OFF</h6>
                </div>
                <div className="mx-auto mt-2">
                    <div>
                        <p className="fw-bold mb-0">Mertonaut</p>
                        <p className="d-block text-truncate mb-1">Black Shirt with White Trouser</p>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <h6><i className="bi bi-currency-rupee"></i>1599</h6>
                                <small className="text-decoration-line-through"><i className="bi bi-currency-rupee"></i>3298</small>
                            </div>
                            <div className="text-success"><small>50% OFF</small></div>
                        </div>
                    </div>
                    <div className="my-2">
                        <Link className="btn btn-sm text-light mb-2 col-12 cs-btn-primary" to={"/cart"}><small><i class="bi bi-cart"></i> ADD TO CART</small></Link><br />
                        <Link className="btn btn-sm text-light mb-2 col-12 cs-btn-primary" to={"/checkout"}><small><i className="bi bi-bag-heart"></i> BUY NOW</small></Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}
