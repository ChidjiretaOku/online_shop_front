import React, {useEffect} from 'react';
import s from '../TeaList/TeaList.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getOrder} from "./@slice";
import OrderItem, {IOrderItem} from "../OrderItem";


const Order: React.FC = () => {

    const dispatch = useAppDispatch();

    const ordersList = useAppSelector(state => state.order.orderList);

    useEffect(() => {
        dispatch(getOrder());
    }, [dispatch, ordersList]);

    return (
        <div className={s.root}>
            <div className={s.centering}>
                {
                    ordersList.map((item) =>
                        <OrderItem  id={item.id}  first_name={item.first_name} surname={item.surname} user_id={item.user_id} phone={item.phone}  count={item.count} price={item.price} status={item.status} date={item.date} address={item.address}/>)}
            </div>
        </div>
    );
}

export default Order;