import { React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput'
import AdminBreadCrum from '../components/AdminBreadCrum';
import { AdminMeta } from '../components/AdminMeta';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createNewblogCat, resetState } from '../../features/bcategory/bcategorySlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let schema = Yup.object().shape({
  title: Yup.string().required('*Title is required'),
});
const Addblogcat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBCategory = useSelector((state) => state.bCategory);
  const { isSuccess, isError, isLoading, createdBlogCategory } = newBCategory;
  useEffect(() => {
    if (isSuccess && createdBlogCategory) {
      toast.success("Brand Added Successfullly!");
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
      dispatch(createNewblogCat(values));
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
        navigate('/admin/blog-category-list');
      }, 3000)
    },
  });

  return (
    <div>
      <AdminMeta title={"Add Blog Category"} />
      <AdminBreadCrum title='Add Blog Category' />
      <div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput
            type='text'
            label='Enter Blog Category'
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

export default Addblogcat