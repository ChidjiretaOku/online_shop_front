import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchAuthData, fetchData} from '../../utils/API'

// Define a type for the slice state
export interface Form {
    first_name: string;
    surname: string;
    phone: string;
    address: string;
}

export interface LoginFormState {
    first_name: string;
    surname: string;
    phone: string;
    address: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: LoginFormState = {
    first_name: '',
    surname: '',
    phone: '',
    address: '',
    loading: 'idle'
}

export const CreateOrder = createAsyncThunk(
    'order',
    async (data: Form, thunkAPI) => {
        const postOptions = {
            body: JSON.stringify({first_name: data.first_name, surname: data.surname, phone: data.phone, address: data.address}),
            method: 'POST',
        };
        const response = await fetchAuthData('api/new-order', postOptions);

    })

export const orderFormSlice = createSlice({
    name: 'order',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeFirst_name: (state, action: PayloadAction<string>) => {
            state.first_name = action.payload
        },
        changeSurname: (state, action: PayloadAction<string>) => {
            state.surname = action.payload
        },
        changePhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload
        },
        changeAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(CreateOrder.pending, (state, action) => {
        });
        builder.addCase(CreateOrder.fulfilled, (state, action) => {
            state.first_name = '',
                state.surname = '',
                state.phone = '',
                state.address = ''
        });
    }
})

export const {changeFirst_name, changeSurname, changeAddress, changePhone} = orderFormSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectLogin = (state: RootState) => state.loginForm.login;
//export const selectPassword = (state: RootState) => state.loginForm.password;

export default orderFormSlice.reducer