import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchAuthData} from "../../utils/API";

interface CartItemState {
    clickDelete: boolean,
    id: number,
}

const initialState: CartItemState = {
    clickDelete: false,
    id: -1
}

export const clickDelete = createAsyncThunk(
    'cart/item',
    async (data: number, thunkAPI) => {
        fetchAuthData('api/cart/del', {
            method: 'POST',
            headers: {'accept': '*/*', 'Content-Type': 'application/json'},
            body: JSON.stringify({article_id: data})
        });
    })

const CartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(clickDelete.fulfilled, (state) => {
            state.clickDelete = !state.clickDelete;
        });
    }
})

export default CartItemSlice.reducer