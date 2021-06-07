import React, {useEffect} from 'react';
import CartItem from "../CartItem";
import s from './Cart.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getCart} from "./@slice";
import {fetchAuthData} from "../../utils/API";
import Routes from "../../pages/routes";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";
import {isEmpty} from "lodash-es";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.light,
        },
        button: {},
    }),
);

const Cart: React.FC = () => {

    const classes = useStyles();
    const dispatch = useAppDispatch();
    const cartList = useAppSelector(state => state.cart.cartList);
    const delBtn = useAppSelector(state => state.cartItem.clickDelete);
    const history = useHistory();

    useEffect(() => {
        dispatch(getCart());
    }, [delBtn]);

    const cart = () => {
        if (isEmpty(cartList)) {
            return (<div style={{fontSize: "large", backgroundColor: "inherit", width: "100%"}}> В корзине нет
                товаров </div>)
        } else {
            return (
                <ol>
                    {cartList.map((item) =>
                        <CartItem name={item.name} count={item.count} id={item.id}
                                  price={item.price}/>)}
                </ol>
            )
        }
    }

    const button = () => {
        if (isEmpty(cartList)) {
            return (<Button className={classes.button} size="medium" color="secondary" variant="contained"
                            onClick={() => history.push(Routes.ROOT)}>
                Перейти в каталог
            </Button>)
        } else {
            return (<Button className={classes.button} size="medium" color="secondary" variant="contained"
                            onClick={() => history.push(Routes.ORDER)}>
                Оформить заказ
            </Button>)
        }
    }

    return (
        <div className={classes.root}>
            {cart()}
            {button()}
        </div>
    );
}

export default Cart;