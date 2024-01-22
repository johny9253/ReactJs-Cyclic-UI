import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { OurStore } from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import AdminLayout from './adminpannel/components/AdminLayout';
import AdminLogin from './adminpannel/pages/AdminLogin';
import AdminForgotpassword from './adminpannel/pages/AdminForgotpassword';
import AdminResetpassword from './adminpannel/pages/AdminResetpassword';
import Dashboard from './adminpannel/pages/Dashboard';
import Enquiries from './adminpannel/pages/Enquiries';
import BlogList from './adminpannel/pages/BlogList';
import Blogcatlist from './adminpannel/pages/Blogcatlist';
import Orders from './adminpannel/pages/Orders';
import Customers from './adminpannel/pages/Customers';
import Colorlist from './adminpannel/pages/Colorlist';
import Categorylist from './adminpannel/pages/Categorylist';
import Brandlist from './adminpannel/pages/Brandlist';
import Productlist from './adminpannel/pages/Productlist';
import Scalelist from './adminpannel/pages/Scalelist';
import Addblog from './adminpannel/pages/Addblog';
import Addblogcat from './adminpannel/pages/Addblogcat';
import Addcolor from './adminpannel/pages/Addcolor';
import Addcat from './adminpannel/pages/Addcat';
import Addbrand from './adminpannel/pages/Addbrand';
import Addproduct from './adminpannel/pages/Addproduct';
import AddInventory from './adminpannel/pages/AddInventory';
import InventoryList from './adminpannel/pages/InventoryList';
import Addscale from './adminpannel/pages/Addscale';
import Addcoupon from './adminpannel/pages/Addcoupon';
import Couponlist from './adminpannel/pages/Couponlist';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import UserOrders from './pages/Orders';
import Checkout from './pages/Checkout';
import { PrivateRoute } from './routing/PrivateRoute';
import { OpenRoute } from './routing/OpenRoute';
import Profile from './pages/Profile';
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='product' element={<OurStore />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<SingleBlog />} />
          <Route path='cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path='my-orders' element={<PrivateRoute><UserOrders /></PrivateRoute>} />
          <Route path='checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path='compare-product' element={<CompareProduct />} />
          <Route path='wishlist' element={<PrivateRoute><Wishlist /></PrivateRoute>} />
          <Route path='login' element={<OpenRoute><Login /></OpenRoute>} />
          <Route path='my-profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='forgot-password' element={<Forgotpassword />} />
          <Route path='signup' element={<OpenRoute><Signup /></OpenRoute>} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />
          <Route path='term-conditions' element={<TermAndConditions />} />
        </Route>
        <Route>
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-forgot-password' element={<AdminForgotpassword />} />
          <Route path='/admin-reset-password' element={<AdminResetpassword />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='enquiries' element={<Enquiries />} />
            <Route path='blog-list' element={<BlogList />} />
            <Route path='blog-category-list' element={<Blogcatlist />} />
            <Route path='orders' element={<Orders />} />
            <Route path='customers' element={<Customers />} />
            <Route path='list-color' element={<Colorlist />} />
            <Route path='list-category' element={<Categorylist />} />
            <Route path='list-brand' element={<Brandlist />} />
            <Route path='list-product' element={<Productlist />} />
            <Route path='list-scale' element={<Scalelist />} />
            <Route path='scale' element={<Addscale />} />
            <Route path='blog' element={<Addblog />} />
            <Route path='blog-category' element={<Addblogcat />} />
            <Route path='color' element={<Addcolor />} />
            <Route path='category' element={<Addcat />} />
            <Route path='brand' element={<Addbrand />} />
            <Route path='brand/:id' element={<Addbrand />} />
            <Route path='product' element={<Addproduct />} />
            <Route path='inventory' element={<AddInventory />} />
            <Route path='inventory-list' element={<InventoryList />} />
            <Route path='coupon' element={<Addcoupon />} />
            <Route path='coupon-list' element={<Couponlist />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
