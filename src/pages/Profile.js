import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { LiaUserEditSolid } from "react-icons/lia";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, resetState } from '../features/user/userSlice';

let schema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').nullable().email('Email should be valid'),
    mobile: Yup.string().required('Mobile number is required'),
});
const Profile = () => {
    const [edit, setEdit] = useState(true);
    const dispatch = useDispatch();

    const userState = useSelector((state) => state?.user);
    const { isSuccess, isError, isLoading, updatedUser } = userState;
    useEffect(() => {
        if (isSuccess && updatedUser) {
            toast.success("User Added Successfullly!");
            formik.resetForm();
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userState?.user?.firstname,
            lastname: userState?.user?.lastname,
            email: userState?.user?.email,
            mobile: userState?.user?.mobile
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(updateUser(values));
            dispatch(resetState());
            setEdit(true);
            alert(JSON.stringify(values, null, 2));
        },
    });
    return <>
        <Meta title={"User Profile"} />
        <BreadCrum title='User Profile' />
        <section className='cart-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>User Profile</h5>
                            <button className='btn btn-bd-download' onClick={()=>setEdit(false)} >Edit User <LiaUserEditSolid className='fs-4' /></button>
                        </div>
                    </div>
                    <div className='col-12'>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="mb-3">
                                <label htmlFor="firstname" className="form-label">First Name</label>
                                <input type='text'
                                    name='firstname'
                                    className='form-control'
                                    onChange={formik.handleChange('firstname')}
                                    value={formik.values.firstname}
                                    disabled={edit} />
                                <div className='error'>
                                    {formik.touched.firstname && formik.errors.firstname ? (
                                        <div>{formik.errors.firstname}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                <input type='text'
                                    name='lastname'
                                    className='form-control'
                                    onChange={formik.handleChange('lastname')}
                                    value={formik.values.lastname} 
                                    disabled={edit} />
                                <div className='error'>
                                    {formik.touched.lastname && formik.errors.lastname ? (
                                        <div>{formik.errors.lastname}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type='email'
                                    name='email'
                                    placeholder='example@yopmail.com'
                                    className='form-control'
                                    onChange={formik.handleChange('email')}
                                    value={formik.values.email} 
                                    disabled={edit} />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                <input type='tel'
                                    name='mobile'
                                    placeholder='+91-9999999999'
                                    className='form-control'
                                    onChange={formik.handleChange('mobile')}
                                    value={formik.values.mobile} 
                                    disabled={edit} />
                                <div className='error'>
                                    {formik.touched.mobile && formik.errors.mobile ? (
                                        <div>{formik.errors.mobile}</div>
                                    ) : null}
                                </div>
                            </div>
                            {/* <div class="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="button signup">Save</button>
                        </form>
                    </div>
                    <div className='col-12 py-2'>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Profile