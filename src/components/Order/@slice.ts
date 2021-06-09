import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchAuthData} from "../../utils/API";

interface OrderState {
    isLoading: boolean
    orderList: Array<IOrderItem>,
}

export interface IOrderItem {
    id: number;
    user_id: number;
    first_name: string;
    surname: string;
    phone: string;
    address: string,
    price: number,
    count: number,
    date: string,
    status: number
}

const initialState: OrderState = {
    isLoading: false,
    orderList: [],
}

export const getOrder = createAsyncThunk(
    'profile',
    async (thunkAPI) => {
        const postOptions = {
            method: 'GET',
        };
        const response = await fetchAuthData('api/profile/orders', postOptions);
        return await (response.json()) as Array<IOrderItem>;
    })

const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.orderList = action.payload
        });
    }
})

export default OrderSlice.reducer