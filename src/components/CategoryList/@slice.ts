import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchData} from "../../utils/API";

interface CategoriesState {
    isLoading: boolean
    categoryList: Array<ICategoryItem>
}

export interface ICategoryItem {
    "id": number,
    "name": string,
}
export interface Response {
    type: string;
    message: Array<ICategoryItem>
}

const initialState: CategoriesState = {
    isLoading: false,
    categoryList: []
}

export const getCategories = createAsyncThunk(
    'categoryList/get',
    async (thunkAPI) => {
        const postOptions = {
            method: 'GET',
        };
        const response = await fetchData('api/categories', postOptions);
        return await (response.json()) as Array<ICategoryItem>;
    })




const categoryListSlice = createSlice({
    name: 'categoryList',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCategories.pending, (state) => {
        });
        builder.addCase(getCategories.rejected, (state) => {
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categoryList = action.payload
        });
    }
})

export default categoryListSlice.reducer