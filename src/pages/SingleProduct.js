import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import { ProductCard } from '../components/ProductCard'
import { getAProduct, getProducts } from '../features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux';
import { RiReactjsFill } from 'react-icons/ri';
import { TbGitCompare } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart, getUserCart } from '../features/user/userSlice';
const SingleProduct = () => {
    const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const productState = useSelector(state => state.product.products);
    const singleProductState = useSelector(state => state?.product?.product);
    const cartState = useSelector(state => state?.user?.userCart);
    const newCart = useSelector(state => state?.user);
    // const { isSuccess, isError, isLoading, createdCart } = newCart;
    const props = { width: 400, height: 600, zoomWidth: 600, img: singleProductState?.images[0]?.url };
    const location = useLocation();
    const getProductId = location.pathname.split('/')[2];
    const [orderedProduct, setorderedProduct] = useState(true);
    const [alreadyAdded, setAlreadyAdded] = useState(false);
    const [grid, setGrid] = useState(3);
    const dispatch = useDispatch();

    useEffect(() => {
        getUserCartDetails()
        getProductList();
        getAProductDetails();
        checkIfAlreadyAdded();
    }, []);
    // useEffect(() => {

    // }, []);
    const getProductList = () => {
        dispatch(getProducts());
    };
    const getAProductDetails = () => {
        dispatch(getAProduct(getProductId));
    };
    const getUserCartDetails = () => {
        dispatch(getUserCart());
    };
    const checkIfAlreadyAdded = () => {        
        if (cartState?.length > 0) {
            for (let index = 0; index < cartState.length; index++) {
                if (getProductId === cartState[index]?.productId?._id) {
                    setAlreadyAdded(true);

                }
                console.log(index);
            }
        }
    };

    const uploadCart = () => {
        if (color === null) {
            toast.error('Please select color');
            return false;
        } else {
            let choosenProduct = { productId: singleProductState?._id, color, quantity, price: singleProductState?.price };
            dispatch(addToCart(choosenProduct));
        }
    }
    const copyToClipboard = (text) => {
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
   console.log('quantity', quantity)
    return <>
        <Meta title={"Single Product"} />
        <BreadCrum title='Single Product' />
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            {props?.img && (
                                <div className=''>
                                    <ReactImageZoom {...props} />
                                </div>
                            )}
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap15'>
                            {singleProductState?.images.map((item, index) => {
                                return <div>
                                    <img
                                        src={item?.url}
                                        alt=''
                                        className='img-fluid'
                                    />
                                </div>

                            })}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom' >
                                <h3 className='title'>{singleProductState?.title}</h3>
                            </div>
                            <div className='border-bottom py-3' >
                                <p className='price'>{'Rs ' + singleProductState?.price}</p>
                                <div className='d-flex align-items-center gap10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={singleProductState?.totalrating.toString()}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a href='#review' className='review-btn'>Write A Review</a>
                            </div>
                            <div className='py-3' >
                                <div className='d-flex gap10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type:</h3><p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand:</h3><p className='product-data'>{singleProductState?.brand}</p>
                                </div>
                                <div className='d-flex gap10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category:</h3><p className='product-data'>{singleProductState?.category}</p>
                                </div>
                                <div className='d-flex gap10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags:</h3><p className='product-data'>{singleProductState?.tags}</p>
                                </div>
                                <div className='d-flex gap10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availablity:</h3><p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size:</h3>
                                    <div className='d-flex flex-wrap gap15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap10 flex-column mt-2 mb-3'>
                                    {
                                        alreadyAdded === false && <>
                                            <h3 className='product-heading'>Color:</h3>
                                            <Color setColor={setColor} colorData={singleProductState?.color ? singleProductState?.color : []} />
                                        </>
                                    }
                                </div>
                                <div className='d-flex align-items-center gap15 flex-row mt-2 mb-3'>
                                    {
                                        alreadyAdded === false && <>
                                            <h3 className='product-heading'>Quantity:</h3>
                                            <div className=''>
                                                <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type='number' min={1} max={singleProductState?.quantity} style={{ width: "70px" }} className='form-control' />
                                            </div>
                                        </>
                                    }
                                    <div className='d-flex align-items-center gap30 ms-5'>
                                        <Link to='' className='button border-0' onClick={() => { uploadCart() }} >{alreadyAdded === true ? "Go To Cart" : "Add To Cart"}</Link>
                                        <button className='button signup'>By It Now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap15'>
                                    <div className=''>
                                        <a href=''><TbGitCompare className='fs-5 me-2' />Add To Compare</a>
                                    </div>
                                    <div className=''>
                                        <a href=''><AiOutlineHeart className='fs-5 me-2' />Add To Wishlist</a>
                                    </div>
                                </div>
                                <div className='d-flex gap10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns</h3>
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! we ship all US domestic orders within <b>5-10 business days</b>
                                    </p>
                                </div>
                                <div className='d-flex gap10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link</h3>
                                    <a href='javascript:void(0);' onClick={() => { copyToClipboard(window.location.href) }}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description:</h4>
                        <div className='bg-white p-3'>
                            <p className='' dangerouslySetInnerHTML={{ __html: singleProductState?.description }}>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='reviews-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h4 id='review' className='mb-2'>Reviews</h4>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex gap10 align-items-center'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct &&
                                    <div>
                                        <a href='' className='text-dark text-decoration-underline'>Write a Review</a>
                                    </div>
                                }
                            </div>
                            <div className='review-form py-4'>
                                <form action='' className='d-flex flex-column gap15'>
                                    <h4 className=''>Write a Review</h4>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name=''
                                            className='w-100 form-control'
                                            placeholder='Comments..'
                                            id=''
                                            cols="30"
                                            rows="10"></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap10 align-items-center'>
                                        <h6 className='mb-0'>@Deepak Singh</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>The meaning of DESCRIPTION is an act of describing; specifically : discourse intended to give a mental image of something experienced.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='popular-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>
                            Our Popular Products
                        </h3>
                    </div>
                    <ProductCard data={productState ? productState : []} grid={grid} />
                </div>
            </div>
        </section>
    </>
}

export default SingleProduct