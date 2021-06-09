import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LoginFormState {
    count: number;
}

const initialState: LoginFormState = {
    count: 0
}

export const teaItemSlice = createSlice({
    name: 'teaItem',
    initialState,
    reducers: {
        changeCount: (state, action: PayloadAction<string>) => {
            state.count = Number(action.payload)
        },
    }
})

export const {changeCount} = teaItemSlice.actions;

export default teaItemSlice.reducer
