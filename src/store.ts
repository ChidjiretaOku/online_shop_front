import {createBrowserHistory} from "history";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {connectRouter} from "connected-react-router";
import loginFormReducer from './components/LoginForm/@slice';
import registerFormReducer from './components/RegisterForm/@slice';
import navBarReducer from './components/Navigation/@slice'
import teaListReducer from './components/TeaList/@slice'
import categoryListReducer from './components/CategoryList/@slice'
import orderFormReducer from "./components/OrderForm/@slice";
import OrderReducer from "./components/Order/@slice"
import cartReducer from "./components/Cart/@slice"
import favoriteReduce from "./components/Favorite/@slice"

export const history = createBrowserHistory();

const middleware = getDefaultMiddleware({thunk: true})

const reducer = {
  router: connectRouter(history),
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  orderForm: orderFormReducer,
  NavBar: navBarReducer,
  teaList: teaListReducer,
  order: OrderReducer,
  cart: cartReducer,
  favorite: favoriteReduce,
  categoryList: categoryListReducer,
  // auth:
}

export const store = configureStore({
  reducer,
  middleware
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
