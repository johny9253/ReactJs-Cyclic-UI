import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/customerSlice';
import productReducer from '../features/product/productSlice'
import brandReducer from '../features/brand/brandSlice'
import colorReducer from "../features/color/colorSlice";
import pCategoryReducer from '../features/pcategory/pcategorySlice'
import blogReducer from "../features/blogs/blogSlice";
import bCategoryReducer from "../features/bcategory/bcategorySlice";
import inventoryReducer from "../features/inventory/inventorySlice";
import uploadReducer from "../features/upload/uploadSlice";
import scaleReducer from "../features/scale/scaleSlice";
import couponReducer from "../features/coupon/couponSlice"
import userReducer from "../features/user/userSlice"
import contactReducer from "../features/contact/contactSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    color: colorReducer,
    pCategory: pCategoryReducer,
    blog: blogReducer,
    bCategory: bCategoryReducer,
    inventory: inventoryReducer,
    upload: uploadReducer,
    scale:scaleReducer,
    coupon: couponReducer,
    user: userReducer,
    contact: contactReducer,
  },
});
