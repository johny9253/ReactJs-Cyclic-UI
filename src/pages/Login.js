import { React, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login, resetState } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import { Link } from 'react-router-dom'

let schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email should be valid'),
    password: Yup.string().required('Password is required'),
});
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.user);
    // useEffect(() => {
    //     if (!user === null || isSuccess) {
    //         navigate("/");
    //     }
    //     if(isError) {
    //         toast.error("Wrong credentials please try again!");            
    //     }
    // }, [user, isLoading, isError, isSuccess, message]);

    const checkIfSuccessfullyLogined = () => {
        if (!user === null || isSuccess) {
            // window.location.reload();
            navigate("/");
        }
        if (isError) {
            toast.error("Wrong credentials please try again!");
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(login(values));
            setTimeout(() => {
                checkIfSuccessfullyLogined();
            }, 200)
            dispatch(resetState());
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return <>
        <Meta title={"Login"} />
        <BreadCrum title='Login' />
        <div className='login-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center nb-3'>Login</h3>
                            <form action='' className='d-flex flex-column gap15' onSubmit={formik.handleSubmit}>
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
                                    <Link to='/forgot-password'>Forgot your password?</Link>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap15'>
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to='/signup' className='button signup'>SignUp</Link>
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

export default Login