import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchAuthData} from "../../utils/API";

interface NavBarState {
    isLogged: boolean
    searchWord: string
    isCategoriesOpen: boolean
    isDrawerOpen: boolean
    isMenuOpen: boolean
    categoryId: number
    categoryName: string
}

interface Response {
    type: string;
    message: {
        active: boolean;
    }
}

export const checkLog = createAsyncThunk(
    'login/check',
    async (thunkAPI) => {
        const postOptions = {
            method: 'POST',
        };
        const response = await fetchAuthData('api/check/', postOptions);
        return await (response.json()) as Response;
    })

const initialState: NavBarState = {
    isLogged: false,
    searchWord: '',
    isCategoriesOpen: false,
    isDrawerOpen: false,
    isMenuOpen: false,
    categoryId: -1,
    categoryName: '',
}

export const navBarSlice = createSlice({
    name: 'NavBar',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<{ id: number, name: string }>) => {
            state.categoryId = action.payload.id;
            state.categoryName = action.payload.name;
        },
        categoriesToggle: state => {
            state.isCategoriesOpen = !state.isCategoriesOpen
        },
        drawerToggle: state => {
            state.isDrawerOpen = !state.isDrawerOpen
        },
        menuToggle: state => {
            state.isMenuOpen = !state.isMenuOpen
        },
        changeSearch: (state, action: PayloadAction<string>) => {
            state.searchWord = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(checkLog.fulfilled, (state, action) => {
            if (action.payload.message.active) {
                state.isLogged = action.payload.message.active;
            } else {
                state.isLogged = false
            }
        });
    }
})

export const {drawerToggle, menuToggle, setCategory, categoriesToggle, changeSearch} = navBarSlice.actions

export default navBarSlice.reducer
