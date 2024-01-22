import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/userSlice'
const Orders = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const orderState = useSelector(state => state?.user?.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);



  return <>
    <Meta title={"Cart"} />
    <BreadCrum title='Cart' />
    <section className='cart-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
              <h4 className='cart-col-1'>Order Id</h4>
              <h4 className='cart-col-2'>Total Amount</h4>
              <h4 className='cart-col-3'>Total Amount After Discount</h4>
              <h4 className='cart-col-4'>Status</h4>
            </div>
            {
              orderState && orderState?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                      <h4 className='cart-col-1'>{item?._id}</h4>
                      <h4 className='cart-col-2'>{item?.totalPrice}</h4>
                      <h4 className='cart-col-3'>{item?.totalPriceAfterDiscount}</h4>

                      <h4 className='cart-col-4'><span class={item?.orderStatus === 'dispatched' ? 'badge bg-dark fs-6' : item?.orderStatus === 'delivered' ? 'badge bg-success fs-6' : item?.orderStatus === 'pending' ? 'badge bg-warning text-dark fs-6':item?.orderStatus === 'canceled' ? 'badge bg-danger fs-6' : 'badge bg-info text-dark fs-6'}>{item?.orderStatus} </span></h4>
                    </div>
                    {
                      item?.orderItems?.map((iitem, iindex) => {
                        return (
                          <>
                            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                              <div>
                                <img src={iitem?.product?.images[0].url} alt='' width={100} height={100} />
                              </div>
                              <h4 className='cart-col-1'>{iitem?.product?.title}</h4>
                              <h4 className='cart-col-2'> Quantity: {iitem?.quantity}</h4>
                              <h4 className='cart-col-3'>Price: Rs {iitem?.price * iitem?.quantity}</h4>
                              <h4 className='cart-col-4'>
                                <p className='d-flex gap-3' >
                                  <ul className='colors ps-0'>
                                    Color: <li style={{ backgroundColor: iitem?.color?.title }}></li>
                                  </ul>
                                </p>
                              </h4>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
          <div className='col-12 py-2'>

          </div>
        </div>
      </div>
    </section>
  </>
}

export default Orders