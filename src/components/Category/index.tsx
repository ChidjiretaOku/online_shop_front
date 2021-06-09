import React, {useEffect} from 'react';
import TeaItem from "../TeaItem";
import s from '../TeaList/TeaList.module.scss';
import {getTeasByCategory} from "./@slice";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Category: React.FC<{ c_id: number }> = ({c_id}) => {

    const dispatch = useAppDispatch();

    const drawer = useAppSelector(state => state.NavBar.isDrawerOpen);
    const teaList = useAppSelector(state => state.category.teaList);

    useEffect(() => {
        dispatch(getTeasByCategory(c_id));
    }, [drawer]);

    return (
        <div className={s.root}>
            <div className={s.centering}>
                {
                    teaList.map((item) =>
                        <TeaItem name={item.name} count={item.count} description={item.description} id={item.id}
                                 photos={item.photos} price={item.price}/>)}
            </div>
        </div>
    );
}

export default Category;