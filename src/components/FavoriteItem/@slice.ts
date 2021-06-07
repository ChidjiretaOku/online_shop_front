import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAuthData, fetchData} from "../../utils/API";

interface FavoriteItemState {
    clickDelete: boolean,
    id: number,
}

const initialState: FavoriteItemState = {
    clickDelete: false,
    id: -1
}

export const clickDelete = createAsyncThunk(
    'favorite/item',
    async (data:number,thunkAPI) => {
        fetchAuthData('api/favorites/remove', {
            method: 'POST',
            headers: {'accept': '*/*', 'Content-Type': 'application/json'},
            body: JSON.stringify({article_id: data})
        });
    })

const FavoriteItemSlice = createSlice({
    name: 'favoriteItem',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(clickDelete.fulfilled,(state)=>{
            state.clickDelete = !state.clickDelete;
        });
    }
})

export default FavoriteItemSlice.reducer