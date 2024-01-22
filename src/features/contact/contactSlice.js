import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import contactService from "./contactService";

export const getQueries = createAsyncThunk(
    "contact/get-queries",
    async (thunkAPI) => {
        try {
            return await contactService.getQueries();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const createQuery = createAsyncThunk(
    "contact/create-query",
    async (query, thunkAPI) => {
        try {
            return await contactService.createQuery(query);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetState = createAction("Reset_all");

const initialState = {
    queries: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};
export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQueries.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getQueries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.queries = action.payload;
            })
            .addCase(getQueries.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createQuery.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdQuery = action.payload;
            })
            .addCase(createQuery.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default contactSlice.reducer;
