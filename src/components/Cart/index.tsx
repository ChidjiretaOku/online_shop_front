import React, {useEffect} from 'react';
import CartItem from "../CartItem";
import s from './Cart.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getCart} from "./@slice";
import {fetchAuthData} from "../../utils/API";
import Routes from "../../pages/routes";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import List from "@material-ui/core/List";

const Cart: React.FC = () => {

    const dispatch = useAppDispatch();

    const cartList = useAppSelector(state => state.cart.cartList);

    const history = useHistory();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch,  cartList]);

    return (
        <div className={s.root}>
            <List className={s.centering}>
                {
                    cartList.map((item) =>
                        <CartItem  name={item.name}  count={item.count} description={item.description} id={item.id} photos={item.photos} price={item.price}/>)}
            </List>
            <Button size="medium" color="secondary" variant="contained" onClick={()=>history.push(Routes.ORDER)}>
                Оформить заказ
            </Button>
        </div>
    );
}

export default Cart;