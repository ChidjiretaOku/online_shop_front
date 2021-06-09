import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchAuthData} from "../../utils/API";

interface FavoriteState {
    isLoading: boolean
    favoriteList: Array<ITeaItem>,
}

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": string
}

const initialState: FavoriteState = {
    isLoading: false,
    favoriteList: [],
}

export const getFavorite = createAsyncThunk(
    'favorite',
    async (thunkAPI) => {
        const postOptions = {
            method: 'GET',
        };
        const response = await fetchAuthData('api/profile/favorites', postOptions);
        return await (response.json()) as Array<ITeaItem>;
    })

const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFavorite.fulfilled, (state, action) => {
            state.favoriteList = action.payload
        });
    }
})

export default FavoriteSlice.reducer