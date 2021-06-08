import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchData} from "../../utils/API";

interface TeasState {
    isLoading: boolean
    teaList: Array<ITeaItem>,
}

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": any,
}

const initialState: TeasState = {
    isLoading: false,
    teaList: [],
}

export const getTeasByCategory = createAsyncThunk(
    'category/get',
    async (data:number, thunkAPI) => {
        const getOptions = {
            method: 'GET',
        };
        let url = `http://localhost:3000/ainc/${data}/articles`;
        const response = await fetchData(url, getOptions);
        return await (response.json()) as Array<ITeaItem>;
    })


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTeasByCategory.pending, (state) => {
        });
        builder.addCase(getTeasByCategory.rejected, (state) => {
        });
        builder.addCase(getTeasByCategory.fulfilled, (state, action) => {
            state.teaList = action.payload
        });
    }
})

export default categorySlice.reducer