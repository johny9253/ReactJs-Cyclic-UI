import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import scaleService from "./scaleService";

export const getScales = createAsyncThunk(
  "brand/get-scales",
  async (thunkAPI) => {
    try {
      return await scaleService.getScales();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const getAScale = createAsyncThunk(
//   "brand/get-scale",
//   async (id, thunkAPI) => {
//     try {
//       return await brandService.getBrand(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
export const createScale = createAsyncThunk(
  "brand/create-scale",
  async (scaleData, thunkAPI) => {
    try {
      return await scaleService.createScale(scaleData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const updateABrand = createAsyncThunk(
//   "brand/update-brand",
//   async (brand, thunkAPI) => {
//     try {
//       return await brandService.updateBrand(brand);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const deleteABrand = createAsyncThunk(
//   "brand/delete-brand",
//   async (id, thunkAPI) => {
//     try {
//       return await brandService.deleteBrand(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const resetState = createAction("Reset_all");

const initialState = {
  scales: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const scaleSlice = createSlice({
  name: "scales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getScales.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScales.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getScales.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createScale.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createScale.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdBrand = action.payload;
      })
      .addCase(createScale.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
    //   .addCase(getABrand.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getABrand.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.isSuccess = true;
    //     state.brandName = action.payload.title;
    //   })
    //   .addCase(getABrand.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.error;
    //   })
    //   .addCase(updateABrand.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateABrand.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.isSuccess = true;
    //     state.updatedBrand = action.payload;
    //   })
    //   .addCase(updateABrand.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.error;
    //   })
    //   .addCase(deleteABrand.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteABrand.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = false;
    //     state.isSuccess = true;
    //     state.deletedBrand = action.payload;
    //   })
    //   .addCase(deleteABrand.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.isSuccess = false;
    //     state.message = action.error;
    //   })
      .addCase(resetState, () => initialState);
  },
});

export default scaleSlice.reducer;
