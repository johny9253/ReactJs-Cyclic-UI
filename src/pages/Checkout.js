import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart, createOrder } from '../features/user/userSlice'
import { config } from "../utils/axiosconfig";
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../images/ecomupdatedlogo.png';

let schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    pincode: Yup.string().required('Pin Code is required'),
});
const Checkout = () => {
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState({ razorpayPaymentId: "", razorpayOrderId: "" });
    const [shippingInfo, setShippingInfo] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const cartState = useSelector(state => state?.user?.userCart);
    useEffect(() => {
        let sum = 0;
        let items = [];
        for (let index = 0; index < cartState?.length > 0 && cartState.length; index++) {
            sum = sum + Number(cartState[index]?.quantity * cartState[index]?.price);
            items.push({
                product: cartState[index]?.productId?._id,
                color: cartState[index]?.color?._id,
                quantity: cartState[index]?.quantity,
                price: cartState[index]?.price
            })
        }
        setOrderItems(items);
        setTotalAmount(sum);

    }, [cartState]);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            other: "",
            city: "",
            state: "",
            country: "",
            pincode: ""
        },
        validationSchema: schema,
        onSubmit: values => {
            setShippingInfo(values);
            setTimeout(() => {
                checkoutHandler();
            }, 300);
        },
    });

    const loadScript = (src) => {
        return new Promise((resolved) => {
            const script = document.createElement("script")
            script.src = src;
            script.onload = () => {
                resolved(true);
            }
            script.onerror = () => {
                resolved(false);
            }
            document.body.appendChild(script);
        })
    }

    const checkoutHandler = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load")
            return;
        }
        const result = await axios.post("http://localhost:5000/api/User/order/checkout", { amount: totalAmount }, config);
        if (!result) {
            alert("Something went wrong");
            return;
        }
        const { amount, id: order_id, currency } = result.data.order;
        const options = {
            key: "rzp_test_8Y5ylqCOTAefau", // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: "Foody Corp.",
            description: "Test Transaction",
            image: '../images/ecomupdatedlogo.png',
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    // razorpaySignature: response.razorpay_signature,
                };
                const result = await axios.post("http://localhost:5000/api/User/order/paymentVerification", data, config);
                setPaymentInfo({
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id
                });
                setTimeout(() => {
                    dispatch(createOrder({
                        totalPrice: totalAmount,
                        totalPriceAfterDiscount: totalAmount,
                        orderItems,
                        paymentInfo: paymentInfo,
                        shippingInfo: shippingInfo
                    }));
                }, 300)
            },
            prefill: {
                name: "Deepak Singh",
                email: "deepaksingh@yopmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Foody corner",
            },
            theme: {
                color: "#131921",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    console.log(paymentInfo, shippingInfo);

    return <>
        <div className='checkout-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>Foody</h3>
                            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className='text-dark total-price' to="/cart">Cart</Link></li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total-price active">Shipping</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className='title total'>
                                Contact information
                            </h4>
                            <p className='user-details total'>Deepak Singh (deepak@gmail.com)</p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form onSubmit={formik.handleSubmit} className='d-flex gap15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select
                                        name='country' id=''
                                        className='form-control form-select'
                                        onChange={formik.handleChange('country')}
                                        value={formik.values.country}
                                    >
                                        <option value="" selected disabled>
                                            Select Country
                                        </option>
                                        <option value="india" selected>
                                            India
                                        </option>
                                    </select>
                                    <div className='error'>
                                        {formik.touched.country && formik.errors.country ? (
                                            <div>{formik.errors.country}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        onChange={formik.handleChange('firstName')}
                                        value={formik.values.firstName}
                                        className='form-control'
                                        placeholder='First Name'
                                        type='text' />
                                    <div className='error'>
                                        {formik.touched.firstName && formik.errors.firstName ? (
                                            <div>{formik.errors.firstName}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        onChange={formik.handleChange('lastName')}
                                        value={formik.values.lastName}
                                        className='form-control'
                                        placeholder='Last Name'
                                        type='text' />
                                    <div className='error'>
                                        {formik.touched.lastName && formik.errors.lastName ? (
                                            <div>{formik.errors.lastName}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        onChange={formik.handleChange('address')}
                                        value={formik.values.address}
                                        className='form-control'
                                        placeholder='Address'
                                        type='text' />
                                    <div className='error'>
                                        {formik.touched.address && formik.errors.address ? (
                                            <div>{formik.errors.address}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        onChange={formik.handleChange('other')}
                                        value={formik.values.other}
                                        className='form-control'
                                        placeholder='Apartment, Suite, etc'
                                        type='text' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        onChange={formik.handleChange('city')}
                                        value={formik.values.city}
                                        className='form-control'
                                        placeholder='City'
                                        type='text' />
                                    <div className='error'>
                                        {formik.touched.city && formik.errors.city ? (
                                            <div>{formik.errors.city}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <select
                                        name='state' id=''
                                        className='form-control form-select'
                                        onChange={formik.handleChange('state')}
                                        value={formik.values.state}
                                    >
                                        <option value="" selected disabled>
                                            Select State
                                        </option>
                                        <option value="uttarakhand" selected>
                                            Uttarakhand
                                        </option>
                                    </select>
                                    <div className='error'>
                                        {formik.touched.state && formik.errors.state ? (
                                            <div>{formik.errors.state}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        onChange={formik.handleChange('pincode')}
                                        value={formik.values.pincode}
                                        className='form-control'
                                        placeholder='Zip Code'
                                        type='text' />
                                    <div className='error'>
                                        {formik.touched.pincode && formik.errors.pincode ? (
                                            <div>{formik.errors.pincode}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to="/cart" className='text-dark'><BiArrowBack className='me-2' />Return to Cart</Link>
                                        <Link to="/cart" className='button'>Continue to Shopping</Link>
                                        <button className='button' type='submit'>Place Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            {
                                cartState && cartState?.map((item, index) => {
                                    return (
                                        <div key={index} className='d-flex gap10  mb-2align-items-center'>
                                            <div className='w-75 d-flex gap10'>
                                                <div className='w-25 position-relative'>
                                                    <span style={{ top: "-10px", right: "2px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>{item?.quantity}</span>
                                                    <img src={item?.productId?.images[0].url} alt='' width={100} height={100} />
                                                </div>
                                                <div>
                                                    <h5 className='total total-price'>{item?.productId?.title}</h5>
                                                    <p className='total-price'>
                                                        <ul className='colors ps-0'>
                                                            S | <li style={{ backgroundColor: item?.color?.title }}></li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex-grow-1'>
                                                <h5 className='total'>Rs {item?.price * item?.quantity}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>Rs {totalAmount}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>Rs 0</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>Rs {totalAmount + 0}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Checkout