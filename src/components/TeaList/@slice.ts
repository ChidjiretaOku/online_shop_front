import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchData} from "../../utils/API";

interface TeasState {
    isLoading: boolean
    teaList: Array<ITeaItem>
}

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": any,
}
export interface Response {
    type: string;
    message: Array<ITeaItem>
}

const initialState: TeasState = {
    isLoading: false,
    teaList: []
}

export const getTeas = createAsyncThunk(
    'teaList/get',
    async (thunkAPI) => {
        const postOptions = {
            method: 'GET',
        };
        const response = await fetchData('api/articles', postOptions);
        return await (response.json()) as Array<ITeaItem>;
    })




const teaListSlice = createSlice({
    name: 'teaList',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTeas.pending, (state) => {
        });
        builder.addCase(getTeas.rejected, (state) => {
        });
        builder.addCase(getTeas.fulfilled, (state, action) => {

            state.teaList = action.payload
        });
    }
})

export default teaListSlice.reducer