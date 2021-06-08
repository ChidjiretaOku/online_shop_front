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

export const getTeasBySearch = createAsyncThunk(
    'search/get',
    async (data:string, thunkAPI) => {
        const getOptions = {
            method: 'GET',
        };
        let url = `api/articles/search/${data}`;
        const response = await fetchData(url, getOptions);
        return await (response.json()) as Array<ITeaItem>;
    })


const searchSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTeasBySearch.pending, (state) => {
        });
        builder.addCase(getTeasBySearch.rejected, (state) => {
        });
        builder.addCase(getTeasBySearch.fulfilled, (state, action) => {
            state.teaList = action.payload
        });
    }
})

export default searchSlice.reducer