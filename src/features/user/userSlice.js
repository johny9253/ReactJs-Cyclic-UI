import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { userService } from './userService';
import { toast } from 'react-toastify';
const getUserFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
export const resetState = createAction("Reset_all");
const initialState = {
    user: getUserFromLocalStorage,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
};

export const registerUser = createAsyncThunk('user/register', async (user, thunkAPI) => {
    try {
        return await userService.register(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
    try {
        return await userService.updateUser(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const login = createAsyncThunk('user/user-login', async (user, thunkAPI) => {
    try {
        return await userService.login(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getUserWishlist = createAsyncThunk('user/wishlist', async (thunkAPI) => {
    try {
        return await userService.getUserWishlist();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getUserCart = createAsyncThunk(
    "user/getUserCart",
    async (thunkAPI) => {
        try {
            return await userService.getUserCart();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addToCart = createAsyncThunk(
    "user/addToCart",
    async (cartData, thunkAPI) => {
        try {
            return await userService.addToCart(cartData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const removeCartItem = createAsyncThunk(
    "user/removeCartItem",
    async (cartItemId, thunkAPI) => {
        try {
            return await userService.removeCartItem(cartItemId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateCartItem = createAsyncThunk(
    "user/updateCartItem",
    async (cartData, thunkAPI) => {
        try {
            return await userService.updateCartItem(cartData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const createOrder = createAsyncThunk(
    "user/createOrder",
    async (orderData, thunkAPI) => {
        try {
            return await userService.createOrder(orderData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getOrders = createAsyncThunk(
    "user/getOrders",
    async (thunkAPI) => {
        try {
            return await userService.getOrders();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.createdUser = action.payload;
            })
            .addCase(registerUser.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.user = null;
            })
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.updatedUser = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.user = null;
                state.message = action.error;
            })
            .addCase(getUserCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.userCart = action.payload;
            })
            .addCase(getUserCart.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.user = null;
            })
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.createdCart = action.payload;
                if (state.createdCart) {
                    toast.success("Added to Cart Successfullly!");
                }
            })
            .addCase(addToCart.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.user = null;
            })
            .addCase(removeCartItem.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeCartItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.removedCart = action.payload;
                if (state.removedCart) {
                    toast.success("Cart Item Removed Successfullly!");
                    resetState();
                }
            })
            .addCase(removeCartItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateCartItem.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCartItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.updatedCart = action.payload;
                if (state.updatedCart) {
                    toast.success("Cart Item updated Successfullly!");
                    resetState();
                }
            })
            .addCase(updateCartItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.createdOrder = action.payload;
                if (state.createdOrder) {
                    toast.success("Order placed Successfully!");
                    resetState();
                }
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;                
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.user = null;
            })
            .addCase(getUserWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.wishlist = action.payload;
            })
            .addCase(getUserWishlist.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
                state.isSuccess = false;
                state.wishlist = null;
            })
            // .addCase(getOrders.pending , (state)=>{
            //     state.isLoading = true;
            // })
            // .addCase(getOrders.fulfilled ,(state, action)=>{
            //     state.isLoading = false;
            //     state.isSuccess=true;
            //     state.orders=action.payload;
            // })
            // .addCase(getOrders.rejected ,(state)=>{
            //     state.isLoading = false;
            //     state.isError=true
            //     state.isSuccess=false;
            //     state.orders=null;
            // });
            .addCase(resetState, () => initialState);
    }
});

export default userSlice.reducer;