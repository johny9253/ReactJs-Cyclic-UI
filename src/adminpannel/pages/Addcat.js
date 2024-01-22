import { React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput'
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, getCategories, resetState } from '../../features/pcategory/pcategorySlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let schema = Yup.object().shape({
  title: Yup.string().required('*Title is required'),
});
const Addcat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newCategory = useSelector((state) => state.pCategory);
  const { isSuccess, isError, isLoading, createdCategory } = newCategory;
  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Category Added Successfullly!");
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
      dispatch(createCategory(values));
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
        navigate('/admin/list-category');
      }, 3000)
    },
  });

  return (
    <div>
      <AdminMeta title={"Add Category"} />
      <AdminBreadCrum title='Add Category' />
      <div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput 
          type='text' 
          label='Enter Category' 
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
            style={{ background: "#F06331" }}>Add Category</button>
        </form>
      </div>
    </div>
  )
}

export default Addcat