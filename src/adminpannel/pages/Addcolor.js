import { React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput'
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createColor, resetState } from '../../features/color/colorSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let schema = Yup.object().shape({
  title: Yup.string().required('*Title is required'),
});

const Addcolor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, isLoading, createdColor } = newColor;
  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading])
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(createColor(values));
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
        navigate('/admin/list-color');
      }, 3000)
    },
  });
  return (
    <div>
      <AdminMeta title={"Add Color"} />
      <AdminBreadCrum title='Add Color' />
      <div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput
            type='color'
            label='Enter Product Color'
            name='title'
            onCh={formik.handleChange('title')}
            val={formik.values.title}            
          />
          <div className='error'>
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </div>
          <button className='btn btn-success border-0 rounded-3 my-5'
            type='submit'
            style={{ background: "#F06331" }}>Add Blog</button>
        </form>
      </div>
    </div>
  )
}

export default Addcolor