import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import BlogCard from '../components/BlogCard'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { getABlog } from '../features/blogs/blogSlice'
const SingleBlog = () => {
  const blogState = useSelector(state => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    getSingleBlog()
  }, []);
  const getSingleBlog = () => {
    dispatch(getABlog(getBlogId));
  };
  return <>
    <Meta title={blogState?.title} />
    <BreadCrum title={blogState?.title}/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='single-blog-card'>
              <Link to='/blog' className='d-flex align-items-center gap10'>
                <HiOutlineArrowLeft className='fs-5' /> Go Back to Blogs
              </Link>
              <h3 className='title'>{blogState?.title}</h3>
              <img src={blogState?.images[0].url} alt='blog' className='img-fluid w-100 my-4' />
              <p dangerouslySetInnerHTML={{ __html: blogState?.description }}>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SingleBlog