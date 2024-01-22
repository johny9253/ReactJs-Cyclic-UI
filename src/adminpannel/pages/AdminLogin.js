import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlice';

const AdminLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let schema = Yup.object().shape({
    email: Yup.string().email('*Invalid email address').required('*Email is required'),
    password: Yup.string().required('*Password is required')
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values))
      // alert(JSON.stringify(values, null, 2));
    },
  });
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user===null || isSuccess) {
      navigate("/admin");
    }
    // else {
    //   alert("not ")
    // }
  },[user, isLoading, isError, isSuccess, message]);
  return (
    <div className='py-5' style={{ background: "#001529", minHeight: "100vh" }}>
      <br /><br /><br />
      <div className='py-4 w-25 bg-white rounded-3 mx-auto p-4'>
        <img src='images/ecomupdatedlogo.png' className='img-fluid adminlogo mb-2 rounded mx-auto d-block' alt='logo' />
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your account to continue</p>
        <div className='error text-center'>
          {message.message == "Rejected" ? "You are not an admin":""}
        </div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput type='text'
            name='email'
            label='Email address' id='email'
            onCh={formik.handleChange('email')}
            val={formik.values.email} />
          <div className='error'>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <CustomInput type='password'
            name='password'
            label='Password' id='pass'
            onCh={formik.handleChange('password')}
            val={formik.values.password} />
          <div className='error'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className='mb-3 text-end'>
            <Link to='/admin-forgot-password' className=''>Forgot password?</Link>
          </div>
          <button to='/admin' className='border-0 px-3 py-2 text-white text-center fw-bold w-100' style={{ background: "#F06331" }} type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin