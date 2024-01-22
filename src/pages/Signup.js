import { React, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetState } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'

let schema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').nullable().email('Email should be valid'),
    mobile: Yup.string().required('Mobile number is required'),
    password: Yup.string().required('Password is required'),
});
const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newUser= useSelector((state) => state.user);
    const { isSuccess, isError, isLoading, createdUser } = newUser;
    useEffect(() => {
        if (isSuccess && createdUser) {
            toast.success("User Added Successfullly!");
            formik.resetForm();
            setTimeout(() => {                
                navigate("/login");
              }, 2000) 
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading])
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(registerUser(values));
            dispatch(resetState());
            alert(JSON.stringify(values, null, 2));            
        },
    });
    return <>
        <Meta title={"Sign Up"} />
        <BreadCrum title='Sign Up' />
        <div className='login-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center nb-3'>SignUp</h3>
                            <form action='' className='d-flex flex-column gap15' onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type='text'
                                        name='firstname'
                                        placeholder='First Name'
                                        className='form-control'
                                        onChange={formik.handleChange('firstname')}
                                        value={formik.values.firstname} />
                                    <div className='error'>
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div>{formik.errors.firstname}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div>
                                    <input type='text'
                                        name='lastname'
                                        placeholder='Last Name'
                                        className='form-control'
                                        onChange={formik.handleChange('lastname')}
                                        value={formik.values.lastname} />
                                    <div className='error'>
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div>{formik.errors.lastname}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div>
                                    <input type='email'
                                        name='email'
                                        placeholder='Email'
                                        className='form-control'
                                        onChange={formik.handleChange('email')}
                                        value={formik.values.email} />
                                    <div className='error'>
                                        {formik.touched.email && formik.errors.email ? (
                                            <div>{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div>
                                    <input type='tel'
                                        name='mobile'
                                        placeholder='Mobile Number'
                                        className='form-control'
                                        onChange={formik.handleChange('mobile')}
                                        value={formik.values.mobile} />
                                    <div className='error'>
                                        {formik.touched.mobile && formik.errors.mobile ? (
                                            <div>{formik.errors.mobile}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <input type='password'
                                        name='password'
                                        placeholder='Password'
                                        className='form-control'
                                        onChange={formik.handleChange('password')}
                                        value={formik.values.password} />
                                    <div className='error'>
                                        {formik.touched.password && formik.errors.password ? (
                                            <div>{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap15'>
                                        <button type='submit' className='button border-0'>Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Signup