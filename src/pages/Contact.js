import { React, useEffect, useState } from 'react';
import { Meta } from '../components/Meta'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { BreadCrum } from '../components/BreadCrum'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import { createQuery, resetState } from '../features/contact/contactSlice';
let schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email should be valid'),
  mobile: Yup.string().required('Mobile Number is required'),
  comment: Yup.string().required('Comment is required'),
});
const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createdQuery, isLoading, isError, isSuccess, message } = useSelector((state) => state.contact);    
  useEffect(() => {
    if (isSuccess && createdQuery) {
      toast.success("Query Submited Successfullly!");
      formik.resetForm();
      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000)
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading])
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(createQuery(values));
      dispatch(resetState());
      alert(JSON.stringify(values, null, 2));
    },
  });
  return <>
    <Meta title={"Contact Us"} />
    <BreadCrum title='Contact Us' />
    <div className='contact-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6791.733314560731!2d78.24045186480132!3d30.075262385740935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093fb5b28146f9%3A0x89ed4628ef2d9eff!2sGumaniwala!5e0!3m2!1sen!2sin!4v1692080356314!5m2!1sen!2sin"
              width="600"
              height="450"
              className='border-0 w-100'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='col-12 mt-5'>
          <div className='contact-inner-wrapper d-flex justify-content-between'>
            <div>
              <h3 className='contact-title mb-4'>Contact Us</h3>
              <form action='' className='d-flex flex-column gap15' onSubmit={formik.handleSubmit}>
                <div>
                  <input type='text'
                    name='name'
                    className='form-control'
                    placeholder='Name'
                    onChange={formik.handleChange('name')}
                    value={formik.values.name} />
                  <div className='error'>
                    {formik.touched.name && formik.errors.name ? (
                      <div>{formik.errors.name}</div>
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
                <div>
                  <textarea
                    name='comment'
                    className='w-100 form-control'
                    placeholder='Comments..'
                    id=''
                    cols="30"
                    rows="10"
                    onChange={formik.handleChange('comment')}
                    value={formik.values.comment}></textarea>
                  <div className='error'>
                    {formik.touched.comment && formik.errors.comment ? (
                      <div>{formik.errors.comment}</div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <button className='button border-0' type='submit'>Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap15 align-items-center'>
                    <AiOutlineHome className='fs-5' />
                    <address className='mb-0'>Hno : 277 Near Vill Chopal, Sonipath, Haryana</address>
                  </li>
                  <li className='mb-3 d-flex gap15 align-items-center'>
                    <BiPhoneCall className='fs-5' />
                    <a href='tel:+91 9068351032'>+91 9068351032</a>
                  </li>
                  <li className='mb-3 d-flex gap15 align-items-center'>
                    <AiOutlineMail className='fs-5' />
                    <a href='mailto:deepaksingh@gmail.com'>deepaksingh@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap15 align-items-center'>
                    <BiInfoCircle className='fs-5' />
                    <p className='mb-0'>Monday - Friday 10am - 8PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Contact