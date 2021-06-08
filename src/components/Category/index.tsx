import React, {useEffect} from 'react';
import TeaItem from "../TeaItem";
import s from './TeaList.module.scss';
import {getTeasByCategory} from "./@slice";
import {useAppDispatch, useAppSelector} from "../../hooks";



const Category: React.FC<{c_id: number}> = ({c_id}) => {

    const dispatch = useAppDispatch();

    const teaList = useAppSelector(state => state.category.teaList);

    useEffect(() => {
        dispatch(getTeasByCategory(c_id));
    }, []); //dispatch, teaList

    return (
        <div className={s.root}>
            <div className={s.centering}>
                {
                    teaList.map((item) =>
                        <TeaItem  name={item.name}  count={item.count} description={item.description} id={item.id} photos={item.photos} price={item.price}/>)}
            </div>
        </div>
    );
}

export default Category;