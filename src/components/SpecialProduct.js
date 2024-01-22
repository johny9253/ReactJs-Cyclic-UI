import Item from 'antd/es/list/Item';
import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
export const SpecialProduct = (props) => {
    const { title, brand, totalrating, price, sold, quantity, _id } = props;
    return (
        <div className='col-6 mb-3'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src='images/chocolate2.png' className='img-fluid' alt='watch' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>{brand}</h5>
                        <h6 className='title'>{title}</h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={totalrating}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='price'>
                            <span className='red-p'>Rs {price}</span>
                            &nbsp; <strike className="text-danger">Rs {price + 100} </strike>
                        </p>
                        <div className='discount-till d-flex align-items-center gap10'>
                            <p className='mb-0'>
                                <b>5</b> days
                            </p>
                            <div className='d-flex gap10 align-items-center'>
                                <span className='badge rounded-circle p-3 bg-danger '>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger '>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger '>1</span>
                            </div>
                        </div>
                        <div className='prod-count my-3'>
                            <p>Products: {quantity}</p>
                            <div className="progress">
                                <div className="progress-bar"
                                    role="progressbar"
                                    style={{ width: quantity / quantity + sold * 100 + "%" }}
                                    aria-valuenow={quantity / quantity + sold * 100}
                                    aria-valuemin={quantity}
                                    aria-valuemax={sold + quantity}>
                                </div>
                            </div>
                        </div>
                        <Link to={`/product/${_id}`} className='button'>View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
