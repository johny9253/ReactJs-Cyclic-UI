import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart, removeCartItem, updateCartItem } from '../features/user/userSlice'
const Cart = () => {
    const [cartData, setCartData] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const cartState = useSelector(state => state?.user?.userCart);
    const location = useLocation();
    const getCartId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect(() => {
        getUserCartDetails()
    }, []);
    useEffect(() => {
        if (cartData !== null) {
            dispatch(updateCartItem({ cartItemId: cartData?.cartItemId, quantity: cartData?.quantity }));
            setTimeout(() => {
                dispatch(getUserCart());
            }, 200)
        }
    }, [cartData]);
    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length > 0 && cartState.length; index++) {
            sum = sum + Number(cartState[index]?.quantity * cartState[index]?.price);
            setTotalAmount(sum)
        }

    }, [cartState]);
    const getUserCartDetails = () => {
        dispatch(getUserCart());
    };
    const removeACartItem = (cartItemId) => {
        dispatch(removeCartItem(cartItemId));
        setTimeout(() => {
            dispatch(getUserCart());
        }, 200)
    };
    // console.log(totalAmount)
    return <>
        <Meta title={"Cart"} />
        <BreadCrum title='Cart' />
        <section className='cart-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        {
                            cartState && cartState?.map((item, index) => {
                                return (
                                    <div key={index} className='cart-data mb-3 py-3 d-flex justify-content-between align-items-center'>
                                        <div className='cart-col-1 gap15 d-flex align-items-center'>
                                            <div className='w-25'>
                                                <img src={item?.productId?.images[0].url} alt='' className='img-fluid' />
                                            </div>
                                            <div className='w-75'>
                                                <p >{item?.productId?.title}</p>
                                                <p >Size: {item?.productId?.size}</p>
                                                <p className='d-flex gap-3' >Color:
                                                    <ul className='colors ps-0'>
                                                        <li style={{ backgroundColor: item?.color?.title }}></li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='cart-col-2'>
                                            <h5 className='price'>Rs {item?.productId?.price}</h5>
                                        </div>
                                        <div className='cart-col-3 d-flex align-items-center gap15'>
                                            <div>
                                                <input type='number' min={1} max={10} className='form-control' value={cartData?.quantity ? cartData?.quantity : item?.quantity} onChange={(e) => setCartData({ cartItemId: item?._id, quantity: e.target.value })} />
                                            </div>
                                            <div>
                                                <MdDelete className='text-danger' onClick={() => removeACartItem(item?._id)} />
                                            </div>
                                        </div>
                                        <div className='cart-col-4'>
                                            <h5 className='price'>Rs {item?.price * item?.quantity}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='col-12 py-2'>
                        {
                            (!totalAmount == null || !totalAmount ==0) &&
                            <div className='d-flex justify-content-between align-items-baseline'>
                                <Link to="/product" className='button'>Continue Shopping</Link>
                                <div className='d-flex flex-column align-items-end'>
                                    <h4>SubTotal: Rs {totalAmount}</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to="/checkout" className='button'>Checkout</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Cart