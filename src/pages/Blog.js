import { React, useEffect, useState } from 'react';
import { BreadCrum } from '../components/BreadCrum'
import { Meta } from '../components/Meta'
import BlogCard from '../components/BlogCard'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice'
const Blog = () => {
  const blogState = useSelector(state => state?.blog?.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogsList()
  }, []);
  const getBlogsList = () => {
    dispatch(getBlogs());
  };

  return <>
    <Meta title={"Blogs"} />
    <BreadCrum title='Blogs' />
    <div className='blog-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>
                Shop By Categories
              </h3>
              <div>
                <ul className='ps-0'>
                  <li>Dry Fruits</li>
                  <li>Chocolate</li>
                  <li>Biscuits</li>
                  <li>Candies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='row'>
              <div className='col-6 mb-3'>
                <BlogCard data={blogState ? blogState : []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Blog