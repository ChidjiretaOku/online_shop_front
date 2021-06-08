import {createBrowserHistory} from "history";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {connectRouter} from "connected-react-router";
import loginFormReducer from './components/LoginForm/@slice';
import registerFormReducer from './components/RegisterForm/@slice';
import navBarReducer from './components/Navigation/@slice'
import teaListReducer from './components/TeaList/@slice'
import teaItemReducer from "./components/TeaItem/@slice";
import categoryListReducer from './components/CategoryList/@slice'
import orderFormReducer from "./components/OrderForm/@slice";
import OrderReducer from "./components/Order/@slice"
import cartReducer from "./components/Cart/@slice"
import cartItemReducer from "./components/CartItem/@slice"
import favoriteReducer from "./components/Favorite/@slice"
import favoriteItemReducer from "./components/FavoriteItem/@slice"
import categoryReducer from "./components/Category/@slice"
import searchReducer from "./components/Search/@slice"

export const history = createBrowserHistory();

const middleware = getDefaultMiddleware({thunk: true})

const reducer = {
  router: connectRouter(history),
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  orderForm: orderFormReducer,
  NavBar: navBarReducer,
  teaList: teaListReducer,
  teaItem: teaItemReducer,
  order: OrderReducer,
  cart: cartReducer,
  cartItem: cartItemReducer,
  favorite: favoriteReducer,
  favoriteItem: favoriteItemReducer,
  categoryList: categoryListReducer,
  category: categoryReducer,
  search: searchReducer,
  // auth:
}

export const store = configureStore({
  reducer,
  middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
