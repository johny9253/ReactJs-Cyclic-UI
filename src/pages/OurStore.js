import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import { ProductCard } from '../components/ProductCard';
import Color from '../components/Color';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice'
export const OurStore = () => {
    const [grid, setGrid] = useState(3);
    const productState = useSelector(state => state.product.products);
    const dispatch = useDispatch();
    useEffect(() => {
        getProductList()
    }, []);
    const getProductList = () => {
        dispatch(getProducts());
    };
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrum title='Our Store' />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Dry Fruits</li>
                                        <li>Chocolate</li>
                                        <li>Biscuits</li>
                                        <li>Candies</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className='sub-title'>Availability</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='' />
                                            <label className='form-check-label' htmlFor=''>
                                                In Stock
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='' checked />
                                            <label className='form-check-label' htmlFor=''>
                                                Out Of Stock(0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <Color />
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='color-1' />
                                            <label className='form-check-label' htmlFor='color-1'>
                                                S (2)
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id='color-2' />
                                            <label className='form-check-label' htmlFor='color-2'>
                                                M (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Product Tags
                                </h3>
                                <div>
                                    <div className='products-tags d-flex flex-wrap align-items-center gap10'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Chocolates</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Dry Fruits</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Biscuits</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Candies</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Beverage</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Random Product
                                </h3>
                                <div>
                                    <div className='random-products mb-3 d-flex'>
                                        <div className='w-50'>
                                            <img src='images/chocolate2.png' className='img-fluid' alt='watch' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Cadbury Dairy Milk Silk Chocolate Bar, 150 g</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src='images/chocolate3.png' className='img-fluid' alt='watch' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Cadbury Dairy Milk Silk Chocolate Bar, 150 g</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap10'>
                                        <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="">Featured</option>
                                            <option value="">Best selling</option>
                                            <option value="">Alphabetically, A-Z</option>
                                            <option value="">Alphabetically, Z-A</option>
                                            <option value="">Price, low to high</option>
                                            <option value="">Price, high to low</option>
                                            <option value="">Date, old to new</option>
                                            <option value="">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap10'>
                                        <p className='total-products mb-0'>21 Products</p>
                                        <div className='d-flex gap10 align-items-center grid'>
                                            <img onClick={() => { setGrid(3) }} src='images/gr4.svg' className='d-block img-fluid' alt='' />
                                            <img onClick={() => { setGrid(4) }} src='images/gr3.svg' className='d-block img-fluid' alt='' />
                                            <img onClick={() => { setGrid(6) }} src='images/gr2.svg' className='d-block img-fluid' alt='' />
                                            <img onClick={() => { setGrid(12) }} src='images/gr.svg' className='d-block img-fluid' alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list pb-5'>
                                <div className='d-flex gap10 flex-wrap'>
                                    <ProductCard data={productState ? productState : []} grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
