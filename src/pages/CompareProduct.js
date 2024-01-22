import React from 'react'
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import Color from '../components/Color'
const CompareProduct = () => {
    return <>
        <Meta title={"Compare Products"} />
        <BreadCrum title='Compare Products' />
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute img-fluid cross'/>
                            <div className='product-card-image'>
                                <img src='images/chocolate2.png' alt='product' className='img-fluid'/>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Cadbury Dairy Milk Silk Chocolate Bar, 150 g</h5>
                                    <h6 className='price mb-3 mt-3'>$ 300</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand</h5>
                                            <p>Cadbury</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type</h5>
                                            <p>Chocolate</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size</h5>
                                            <div className='d-flex gap10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute img-fluid cross'/>
                            <div className='product-card-image'>
                                <img src='images/chocolate2.png' alt='product' className='img-fluid'/>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Cadbury Dairy Milk Silk Chocolate Bar, 150 g</h5>
                                    <h6 className='price mb-3 mt-3'>$ 300</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand</h5>
                                            <p>Cadbury</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type</h5>
                                            <p>Chocolate</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size</h5>
                                            <div className='d-flex gap10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute img-fluid cross'/>
                            <div className='product-card-image'>
                                <img src='images/chocolate2.png' alt='product' className='img-fluid'/>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Cadbury Dairy Milk Silk Chocolate Bar, 150 g</h5>
                                    <h6 className='price mb-3 mt-3'>$ 300</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand</h5>
                                            <p>Cadbury</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type</h5>
                                            <p>Chocolate</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size</h5>
                                            <div className='d-flex gap10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' alt='cross' className='position-absolute img-fluid cross'/>
                            <div className='product-card-image'>
                                <img src='images/chocolate2.png' alt='product' className='img-fluid'/>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Cadbury Dairy Milk Silk Chocolate Bar, 150 g</h5>
                                    <h6 className='price mb-3 mt-3'>$ 300</h6>
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand</h5>
                                            <p>Cadbury</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type</h5>
                                            <p>Chocolate</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size</h5>
                                            <div className='d-flex gap10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default CompareProduct