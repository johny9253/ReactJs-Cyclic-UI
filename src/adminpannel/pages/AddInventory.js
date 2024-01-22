import { React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';
import { useDispatch, useSelector } from 'react-redux';
import "react-widgets/styles.css";
import { createInventory, resetState } from '../../features/inventory/inventorySlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let schema = Yup.object().shape({
    title: Yup.string().required('*Title is required'),
    address1: Yup.string().required('*address is required'),
    country: Yup.string().required('*country is required'),
    state: Yup.string().required('*state is required'),
    city: Yup.string().required('*city is required'),
    postalcode: Yup.string().required('*postal code is required'),
    description: Yup.string().required('*Description is required'),
});
const AddInventory = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const newInventory = useSelector((state) => state.inventory);
    const { isSuccess, isError, isLoading, createdInventory } = newInventory;
    useEffect(() => {
        if (isSuccess && createdInventory) {
            toast.success("Inventory Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        initialValues: {
            title: "",
            address1: "",
            address2: "",
            country: "",
            state: "",
            city: "",
            postalcode: "",
            description: "",
        },
        validationSchema: schema,
        onSubmit: values => {
            // dispatch(login(values))
            dispatch(createInventory(values));
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
                navigate('/admin/inventory-list');
            }, 3000)
        },
    });
    
    return (
        <div>
            <AdminMeta title={"Add Inventory"} />
            <AdminBreadCrum title='Add Inventory' />
            <div className=''>
                <form action='' onSubmit={formik.handleSubmit}>
                    <div className='mt-4'>
                        <CustomInput
                            title='text'
                            label='Enter Inventory Name'
                            name='title'
                            onCh={formik.handleChange('title')}
                            val={formik.values.title}
                        />
                        <div className='error'>
                            {formik.touched.title && formik.errors.title ? (
                                <div>{formik.errors.title}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='mt-2'>
                        <CustomInput
                            title='text'
                            label='Address Line -1'
                            name='address1'
                            onCh={formik.handleChange('address1')}
                            val={formik.values.address1}
                        />
                        <div className='error'>
                            {formik.touched.address1 && formik.errors.address1 ? (
                                <div>{formik.errors.address1}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='mt-2'>
                        <CustomInput
                            title='text'
                            label='Address Line -2'
                            name='address2'
                            onCh={formik.handleChange('address2')}
                            val={formik.values.address2}
                        />
                        <div className='error'>
                            {formik.touched.address2 && formik.errors.address2 ? (
                                <div>{formik.errors.address2}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 mt-2'>
                            <CustomInput
                                title='text'
                                label='Country'
                                name='country'
                                onCh={formik.handleChange('country')}
                                val={formik.values.country}
                            />
                            <div className='error'>
                                {formik.touched.country && formik.errors.country ? (
                                    <div>{formik.errors.country}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='col-6 mt-2'>
                            <CustomInput
                                title='text'
                                label='State'
                                name='state'
                                onCh={formik.handleChange('state')}
                                val={formik.values.state}
                            />
                            <div className='error'>
                                {formik.touched.state && formik.errors.state ? (
                                    <div>{formik.errors.state}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 mt-2'>
                            <CustomInput
                                title='text'
                                label='City'
                                name='city'
                                onCh={formik.handleChange('city')}
                                val={formik.values.city}
                            />
                            <div className='error'>
                                {formik.touched.city && formik.errors.city ? (
                                    <div>{formik.errors.city}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className='col-6 mt-2'>
                            <CustomInput
                                title='number'
                                label='Postal Code'
                                name='postalcode'
                                onCh={formik.handleChange('postalcode')}
                                val={formik.values.postalcode}
                            />
                            <div className='error'>
                                {formik.touched.postalcode && formik.errors.postalcode ? (
                                    <div>{formik.errors.postalcode}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <ReactQuill className='mt-4'
                        placeholder='description'
                        theme="snow"
                        name='description'
                        onChange={formik.handleChange('description')}
                        value={formik.values.description}
                    />
                    <div className='error'>
                        {formik.touched.description && formik.errors.description ? (
                            <div>{formik.errors.description}</div>
                        ) : null}
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-5' type='submit' style={{ background: "#F06331" }}>Add Inventory</button>
                </form>
            </div>
        </div>
    )
}

export default AddInventory



