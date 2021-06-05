import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAuthData, fetchData} from "../../utils/API";

interface CartState {
    isLoading: boolean,
    cartList: Array<ITeaItem>,
}

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": string
}

export interface Response {
    type: string;
    message: Array<ITeaItem>
}

const initialState: CartState = {
    isLoading: false,
    cartList: [],
}

export const getCart = createAsyncThunk(
    'cart',
    async (thunkAPI) => {
        const postOptions = {
            method: 'GET',
        };
        const response = await fetchAuthData('api/cart/find', postOptions);
        return await (response.json()) as Array<ITeaItem>;
    })

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCart.pending, (state) => {
        });

        builder.addCase(getCart.rejected, (state) => {
        });
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cartList = action.payload
        });
    }
})

export default CartSlice.reducer