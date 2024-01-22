import { React, useEffect, useState } from 'react';

import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import { ProductCard } from '../components/ProductCard'
import { SpecialProduct } from '../components/SpecialProduct'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice';
import { getProducts } from '../features/product/productSlice'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { addToWishlist } from '../features/product/productSlice'
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import wishlist from '../images/wishlist.svg';
import watch from '../images/watch2.png';
import watch2 from '../images/chocolate.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';
const Home = () => {
  const blogState = useSelector(state => state?.blog?.blogs);
  const productState = useSelector(state => state?.product?.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogsList();
    getProductList();
  }, []);
  const getBlogsList = () => {
    dispatch(getBlogs());
  };
  const getProductList = () => {
    dispatch(getProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  }
  return <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img src='images/mainbanner2.png'
                className='img-fluid rounded-3'
                alt='main-banner' />
              <div className='main-banner-content position-absolute'>
                <h4>Organic Nuts For Health</h4>
                <h5>Mixed Dry Fruits</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap4 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src='images/nuts8.jpg'
                  className='img-fluid rounded-3'
                  alt='small-banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Organic Nuts For Health</h4>
                  <h5>Mixed Dry Fruits</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/nuts7.jpg'
                  className='img-fluid rounded-3'
                  alt='small-banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Organic Nuts For Health</h4>
                  <h5>Mixed Dry Fruits</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/mainbanner.png'
                  className='img-fluid rounded-3'
                  alt='small-banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Organic Nuts For Health</h4>
                  <h5>Mixed Dry Fruits</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/nuts9.jpg'
                  className='img-fluid rounded-3'
                  alt='small-banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Organic Nuts For Health</h4>
                  <h5>Mixed Dry Fruits</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className="d-flex align-items-center gap15">
                <img src='images/service.png' alt='services' />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all order over $500</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap15">
                <img src='images/service-02.png' alt='services' />
                <div>
                  <h6>Daily Suprise Offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap15">
                <img src='images/service-03.png' alt='services' />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap15">
                <img src='images/service-04.png' alt='services' />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Default Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap15">
                <img src='images/service-05.png' alt='services' />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories flex-wrap d-flex justify-content-between align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Chocolates</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/chocolate2.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Toffee</h6>
                  <p>20 Items</p>
                </div>
                <img src='images/toffee.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Pista</h6>
                  <p>8 Items</p>
                </div>
                <img src='images/pista.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Coffee Beans</h6>
                  <p>20 Items</p>
                </div>
                <img src='images/coffee.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Chocolates</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/chocolate2.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Toffee</h6>
                  <p>20 Items</p>
                </div>
                <img src='images/toffee.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Pista</h6>
                  <p>8 Items</p>
                </div>
                <img src='images/pista.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Coffee Beans</h6>
                  <p>20 Items</p>
                </div>
                <img src='images/coffee.jpg' alt='camera' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Featured Collection
            </h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className='product-card position-relative'>
                      <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent' onClick={(e) => { addToWish(item?._id) }}>
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
                );
              }
            })
          }
        </div>
      </div>
    </section>
    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/mixnut.jpg'
                className='img-fluid'
                alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo. *</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/milk.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/pista2.png' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-white'>Studio Display</h5>
                <h6 className='text-white'>600 nits of brightness.</h6>
                <p className='text-white'>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/pista3.jpg' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Studio Display</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Special Products
            </h3>
          </div>
        </div>
        <div className='row'>
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "special") {
                return <SpecialProduct
                  key={index}
                  title={item?.title}
                  brand={item?.brand}
                  totalrating={item?.totalrating.toString()}
                  price={item?.price}
                  sold={item?.sold}
                  quantity={item?.quantity}
                  _id={item?._id}
                />;
              }
            })

          }
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
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className='product-card position-relative'>
                      <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent' onClick={(e) => { addToWish(item?._id) }}>
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
                );
              }
            })
          }
        </div>
      </div>
    </section>
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'><img src='images/brand-01.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-02.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-03.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-04.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-05.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-06.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-07.png' alt='brand' /></div>
                <div className='mx-4 w-25'><img src='images/brand-08.png' alt='brand' /></div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Our Latest Blogs
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard data={blogState ? blogState : []} />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Home