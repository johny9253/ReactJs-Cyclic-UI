import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import inventoryService from "./inventoryService";

export const getInventories = createAsyncThunk("inventory/get-inventories", async (thunkAPI) => {
  try {
    return await inventoryService.getInventories();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const createInventory = createAsyncThunk(
  "inventory/create-inventory",
  async (inventoryData, thunkAPI) => {
    try {
      return await inventoryService.createInventory(inventoryData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const getAInventory = createAsyncThunk(
//   "blog/get-inventory",
//   async (id, thunkAPI) => {
//     try {
//       return await inventoryService.getInventory(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const updateABlog = createAsyncThunk(
//   "inventory/update-inventory",
//   async (inventory, thunkAPI) => {
//     try {
//       return await inventoryService.updateBlog(inventory);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const deleteAInventory = createAsyncThunk(
//   "blog/delete-inventory",
//   async (id, thunkAPI) => {
//     try {
//       return await inventoryService.deleteInventory(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
export const resetState = createAction("Reset_all");

const initialState = {
  inventories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const inventorySlice = createSlice({
  name: "inventories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInventories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInventories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.inventories = action.payload;
      })
      .addCase(getInventories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createInventory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createInventory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdInventory = action.payload;
      })
      .addCase(createInventory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
    //   .addCase(getAInventory.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getAInventory.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.isSuccess = true;
    //     state.inventoryName = action.payload.title;
    //     state.inventoryDesc = action.payload.description;
    //     state.inventoryAddress1 = action.payload.address1;
    //     state.inventoryAddress2 = action.payload.address2;
    //     state.inventoryAddress2 = action.payload.address2;
    //     state.inventoryCountry = action.payload.country;
    //     state.inventoryState = action.payload.state;
    //     state.inventoryCity = action.payload.city;
    //     state.inventoryPostalcode = action.payload.postalCode;
    //     state.blogImages = action.payload.images;
    //   })
    //   .addCase(getAInventory.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.error;
    //   })
    //   .addCase(updateABlog.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateABlog.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.isSuccess = true;
    //     state.updatedBlog = action.payload;
    //   })
    //   .addCase(updateABlog.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.error;
    //   })
    //   .addCase(deleteABlog.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteABlog.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.isSuccess = true;
    //     state.deletedBlog = action.payload;
    //   })
    //   .addCase(deleteABlog.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.error;
    //   })
      .addCase(resetState, () => initialState);
  },
});
export default inventorySlice.reducer;
