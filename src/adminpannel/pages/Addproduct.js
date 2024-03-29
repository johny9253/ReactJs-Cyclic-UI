import { React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../features/brand/brandSlice';
import { getCategories } from '../../features/pcategory/pcategorySlice';
import { getColors } from '../../features/color/colorSlice';
import { delImg, uploadImg } from "../../features/upload/uploadSlice";
import { Select } from "antd";
import Dropzone from 'react-dropzone';
import "react-widgets/styles.css";
import { createProducts, resetState } from '../../features/product/productSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


let schema = Yup.object().shape({
    title: Yup.string().required('*Title is required'),
    description: Yup.string().required('*Description is required'),
    price: Yup.string().required('*Price is required'),
    category: Yup.string().required('*Category is required'),
    tags: Yup.string().required('*Tags is required'),
    brand: Yup.string().required('*Brand is required'),
    color: Yup
        .array()
        .min(1, "Pick at least one color")
        .required("Color is Required"),
    quantity: Yup.string().required('*quantity is required'),
});
const Addproduct = () => {
    // const [brand, setBrand] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [color, setColor] = useState([]);
    // const [images, setImages] = useState([]);
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getColors());
    }, [])
    const brandState = useSelector((state) => state.brand.brands);
    const categoryState = useSelector((state) => state.pCategory.pCategories);
    const colorState = useSelector((state) => state.color.colors);
    const imgState = useSelector((state) => state.upload.images);
    const newProduct = useSelector((state) => state.product);
    const { isSuccess, isError, isLoading, createdProduct } = newProduct;
    useEffect(() => {
        if (isSuccess && createdProduct) {
            toast.success("Product Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);
    const coloropt = [];
    colorState.forEach((i) => {
        coloropt.push({
            label: i.title,
            value: i._id,
        });
    });
    const img = [];
    imgState.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        });
    });
   
    useEffect(() => {
        formik.values.color = color ? color : " ";
        formik.values.images = img;
    }, [color, img]);

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            category: "",
            tags: "",
            brand: "",
            color: "",
            quantity: "",
            images: "",
            // sold: "",
            // color: "",
        },
        validationSchema: schema,
        onSubmit: values => {
            // dispatch(login(values))
            dispatch(createProducts(values));
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setColor(null);
            setTimeout(() => {
                dispatch(resetState());
                navigate('/admin/list-product');
            }, 3000)
        },
    });
    const handleColors = (e) => {
        setColor(e);
        console.log(color);
    };
    // formik.values.color = color;
    return (
        <div>
            <AdminMeta title={"Add Product"} />
            <AdminBreadCrum title='Add Product' />
            <div>
                <form action='' onSubmit={formik.handleSubmit}>
                    <CustomInput type='text' label='Enter Product Title'
                        name='title'
                        onCh={formik.handleChange('title')}
                        val={formik.values.title}
                    />
                    <div className='error'>
                        {formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null}
                    </div>
                    <div className='mt-3'>
                        <ReactQuill theme="snow"
                            name='description'
                            onChange={formik.handleChange('description')}
                            // onBlur={formik.handleChange('description')}
                            value={formik.values.description}
                        />
                    </div>
                    <div className='error'>
                        {formik.touched.description && formik.errors.description ? (
                            <div>{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <CustomInput type='number' label='Enter Product Price'
                        name='price'
                        onCh={formik.handleChange('price')}
                        val={formik.values.price} />
                    <div className='error'>
                        {formik.touched.price && formik.errors.price ? (
                            <div>{formik.errors.price}</div>
                        ) : null}
                    </div>
                    <select name='brand'
                        onChange={formik.handleChange('brand')}
                        value={formik.values.brand}
                        id='' className='form-control py-3 mt-3'>
                        <option value=''>Select Brand</option>
                        {brandState.map((i, j) => {
                            return <option key={j} value={i.title}>{i.title}</option>
                        })}
                    </select>
                    <div className='error'>
                        {formik.touched.brand && formik.errors.brand ? (
                            <div>{formik.errors.brand}</div>
                        ) : null}
                    </div>
                    <select name='category'
                        onChange={formik.handleChange('category')}
                        value={formik.values.category}
                        id='' className='form-control py-3 mt-3'>
                        <option value=''>Select Category</option>
                        {categoryState.map((i, j) => {
                            return <option key={j} value={i.title}>{i.title}</option>
                        })}
                    </select>
                    <div className='error'>
                        {formik.touched.category && formik.errors.category ? (
                            <div>{formik.errors.category}</div>
                        ) : null}
                    </div>

                    <select
                        name="tags"
                        onChange={formik.handleChange("tags")}
                        onBlur={formik.handleBlur("tags")}
                        value={formik.values.tags}
                        className="form-control py-3 mt-3"
                        id=""
                    >
                        <option value="" disabled>
                            Select Category
                        </option>
                        <option value="featured">Featured</option>
                        <option value="popular">Popular</option>
                        <option value="special">Special</option>
                    </select>
                    <div className="error">
                        {formik.touched.tags && formik.errors.tags}
                    </div>

                    <Select
                        mode="multiple"
                        allowClear
                        className="w-100 mt-3"
                        placeholder="Select colors"
                        defaultValue={color}
                        onChange={(i) => handleColors(i)}
                        options={coloropt}
                    />
                    <div className="error">
                        {formik.touched.color && formik.errors.color}
                    </div>
                    <CustomInput type='number' label='Enter Product Quantity' className='mt-3'
                        name='quantity'
                        onCh={formik.handleChange('quantity')}
                        val={formik.values.quantity}
                    />
                    <div className='error'>
                        {formik.touched.quantity && formik.errors.quantity ? (
                            <div>{formik.errors.quantity}</div>
                        ) : null}
                    </div>
                    <div className="bg-white border-1 p-5 mt-3 text-center">
                        <Dropzone
                            onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>
                                            Drag 'n' drop some files here, or click to select files
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="showimages d-flex flex-wrap gap-3 mt-3">
                        {imgState?.map((i, j) => {
                            return (
                                <div className=" position-relative" key={j}>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(delImg(i.public_id))}
                                        className="btn-close position-absolute"
                                        style={{ top: "10px", right: "10px" }}
                                    ></button>
                                    <img src={i.url} alt="" width={200} height={200} />
                                </div>
                            );
                        })}
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'
                        style={{ background: "#F06331" }}>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Addproduct