import { React, useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/product/productSlice'
import prodcompare from'../images/prodcompare.svg';
import wish from'../images/wish.svg';
import wishlist from'../images/wishlist.svg';
import watch from'../images/watch2.png';
import watch2 from'../images/chocolate.jpg';
import addcart from'../images/add-cart.svg';
import view from'../images/view.svg';

export const ProductCard = (props) => {
    const navigate = useNavigate();
    const { grid, data } = props
    const dispatch = useDispatch();
    let location = useLocation();
    const addToWish = (id) => {
        dispatch(addToWishlist(id));
    }
    return (
        <>
            {data && data?.map((item, index) => {
                return (
                    <div key={index} className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                        <div className='product-card position-relative'>
                            <div className='wishlist-icon position-absolute'>
                                <button className='border-0 bg-transparent' onClick={(e)=>{addToWish(item?._id)}}>
                                    <img src={wish} alt='wishlist' />
                                </button>
                            </div>
                            <div className='product-image'>
                                <img src={item?.images[0].url} className='img-fluid mx-auto' alt='product image' width={160} />
                                <img src={item?.images[1]?.url} className='img-fluid mx-auto' alt='product image' width={160} />
                            </div>
                            <div className='product-details'>
                                <h6 className='brand'>{item.brand}</h6>
                                <h5 className='product-tittle'>
                                    {item.title}
                                </h5>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={item?.totalrating.toString()}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                                    dangerouslySetInnerHTML={{ __html: item?.description }}
                                >
                                </p>
                                <p className='price'>Rs {item?.price}</p>
                            </div>
                            <div className='action-bar position-absolute'>
                                <div className='d-flex flex-column gap15'>
                                    <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare' /></button>
                                    <button className='border-0 bg-transparent' onClick={()=>navigate("/product/"+item?._id)}><img src={view} alt='view' /></button>
                                    <button className='border-0 bg-transparent'><img src={addcart} alt='addcart' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    )
}
