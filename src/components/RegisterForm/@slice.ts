import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchData} from '../../utils/API'

export interface Form {
    email: string;
    username: string;
    password: string;
}

export interface RegisterFormState {
    email: string;
    username: string;
    password: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export interface Response {
    type: string;
    message: {
        token: string;
    }
}

const initialState: RegisterFormState = {
    email: '',
    username: '',
    password: '',
    loading: 'idle'
}

export const registerUser = createAsyncThunk(
    'register/auth',
    async (data: Form, thunkAPI) => {
        const postOptions = {
            body: JSON.stringify({name: data.username, email: data.email, password: data.password}),
            method: 'POST',
        };
        const response = await fetchData('/api/register/', postOptions);
        return await (response.json()) as Response;
    })

export const registerFormSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        changeUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.password = '';
            state.email = '';
        });
    }
})

export const {changeEmail, changePassword, changeUsername} = registerFormSlice.actions;

export default registerFormSlice.reducer
