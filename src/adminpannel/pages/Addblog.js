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
import { getBlogCategories } from '../../features/bcategory/bcategorySlice';
import { delImg, uploadImg } from "../../features/upload/uploadSlice";
import { Select } from "antd";
import Dropzone from 'react-dropzone';
import "react-widgets/styles.css";
import { createBlogs, resetState } from '../../features/blogs/blogSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let schema = Yup.object().shape({
    title: Yup.string().required('*Title is required'),
    category: Yup.string().required('*Blog category is required'),
    description: Yup.string().required('*Description is required'),
});
const Addblog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getBlogCategories());
    }, [])
    const imgState = useSelector((state) => state.upload.images);
    const blogCategotyState = useSelector((state) => state.bCategory.bCategories);
    const newBlog = useSelector((state) => state.blog);
    const { isSuccess, isError, isLoading, createdBlog } = newBlog;
    useEffect(() => {
        if (isSuccess && createdBlog) {
            toast.success("Blog Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    const img = [];
    imgState.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        });
    });

    useEffect(() => {
        formik.values.images = img;
    }, [img]);

    const formik = useFormik({
        initialValues: {
            title: "",
            category: "",
            description: "",   
            images: "",
        },
        validationSchema: schema,
        onSubmit: values => {
            // dispatch(login(values))
            dispatch(createBlogs(values));
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
                navigate('/admin/blog-list');
            }, 3000)
        },
    });

    return (
        <div>
            <AdminMeta title={"Add Blog"} />
            <AdminBreadCrum title='Add Blog' />
            <div className=''>
                <form action='' onSubmit={formik.handleSubmit}>
                    <CustomInput
                        title='text'
                        label='Enter Blog Title'
                        name='title'
                        onCh={formik.handleChange('title')}
                        val={formik.values.title}
                    />
                    <div className='error'>
                        {formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null}
                    </div>
                    <select name=''
                        onChange={formik.handleChange('category')}
                        value={formik.values.category}
                        id='' className='form-control py-3 mt-3'>
                        <option value=''>Select Blog Category</option>
                        {blogCategotyState.map((i, j) => {
                            return <option key={j} value={i.title}>{i.title}</option>
                        })}
                    </select>
                    <div className='error'>
                        {formik.touched.category && formik.errors.category ? (
                            <div>{formik.errors.category}</div>
                        ) : null}
                    </div>
                    <ReactQuill theme="snow"
                        className='mt-3'
                        name='description'
                        onChange={formik.handleChange('description')}
                        // onBlur={formik.handleChange('description')}
                        value={formik.values.description}
                    />
                    <div className='error'>
                        {formik.touched.description && formik.errors.description ? (
                            <div>{formik.errors.description}</div>
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
                    <button className='btn btn-success border-0 rounded-3 my-5' type='submit' style={{ background: "#F06331" }}>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default Addblog