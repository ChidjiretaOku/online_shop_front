import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchData} from "../../utils/API";

// Define a type for the slice state
interface NavBarState {
    isLogged: boolean
    isCategoriesOpen: boolean
    isDrawerOpen: boolean
    isMenuOpen: boolean
    isMobileMenuOpen: boolean
    categoryId: number
    categoryName: string
}

interface Response {
    type: string;
    message: {
        isLogged: boolean;
    }
}

const checkLog = createAsyncThunk(
    'login/auth',
    async (data: {}, thunkAPI) => {
        const postOptions = {
            body: JSON.stringify({}),
            method: 'POST',
        };
        const response = await fetchData('api/login/', postOptions);
        return await (response.json()) as Response;
    })


// Define the initial state using that type
const initialState: NavBarState = {
    isLogged: false,
    isCategoriesOpen: false,
    isDrawerOpen: false,
    isMobileMenuOpen: false,
    isMenuOpen: false,
    categoryId: -1,
    categoryName: '',
}


export const navBarSlice = createSlice({
    name: 'NavBar',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCategory: (state,action:PayloadAction<{id:number,name:string}>)=> {
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
        mobileMenuToggle: state => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen
        }
    },
    extraReducers: builder => {
        builder.addCase(checkLog.fulfilled, (state, action) => {
            state.isLogged = action.payload.message.isLogged;
        });
        builder.addCase(checkLog.rejected,(state,action)=>{
            state.isLogged = false;
        });
    }
})

export const {drawerToggle, menuToggle, setCategory, categoriesToggle} = navBarSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default navBarSlice.reducer
