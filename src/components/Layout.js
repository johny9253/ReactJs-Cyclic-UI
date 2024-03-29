import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return <>
    <Header />
    <Outlet />
    <ToastContainer
      position="top-right"
      autoClose={400}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="dark"
    />
    <Footer />
  </>
}

export default Layout