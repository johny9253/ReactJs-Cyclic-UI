import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist } from '../features/user/userSlice'
import { addToWishlist } from '../features/product/productSlice'
const Wishlist = () => {
    const wishlistState = useSelector(state => state?.user?.wishlist?.wishlist);
    const dispatch = useDispatch();
    useEffect(() => {
        getProductWishlist()
    }, []);
    const getProductWishlist = () => {
        dispatch(getUserWishlist());
    };

    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id));
        setTimeout(() => {
            dispatch(getUserWishlist());
        }, 300)
    }
    return <>
        <Meta title={"Wishlist"} />
        <BreadCrum title='Wishlist' />
        <div className='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    {
                       wishlistState && wishlistState?.length == 0 && 
                        <div className='d-flex justify-content-center'>
                            <img src='images/no_data.png' className='img-fluid mx-auto' width={300} alt='no item found'/>
                        </div>
                    }
                    {
                       wishlistState &&  wishlistState?.map((item, index) => {
                            return (
                                <div className='col-3' key={index}>
                                    <div className='wishlist-card position-relative'>
                                        <img onClick={() => { removeFromWishlist(item?._id) }} src='images/cross.svg' alt='cross' className='position-absolute img-fluid cross' />
                                        <div className='wishlist-card-image bg-white'>
                                            <img src={item?.images[0].url} alt='product' className='img-fluid mx-auto' width={160} />
                                        </div>
                                        <div className='py-3 px-3'>
                                            <h5 className='title'>{item?.title}</h5>
                                            <h6 className='price'>Rs {item?.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default Wishlist