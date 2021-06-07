import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define a type for the slice state
export interface Form {
    email: string;
    password: string;
}

export interface LoginFormState {
    count: number;
}

// Define the initial state using that type
const initialState: LoginFormState = {
    count: 0
}

export const teaItemSlice = createSlice({
    name: 'teaItem',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeCount: (state, action: PayloadAction<string>) => {
            state.count = Number(action.payload)
        },
    }
})

export const {changeCount} = teaItemSlice.actions;

export default teaItemSlice.reducer
