import React, {useEffect} from 'react';
import s from '../TeaList/TeaList.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getFavorite} from "./@slice";
import FavoriteItem from "../FavoriteItem";

const Favorite: React.FC = () => {

    const dispatch = useAppDispatch();
    const favoriteList = useAppSelector(state => state.favorite.favoriteList);
    const delBtn = useAppSelector(state => state.favoriteItem.clickDelete);

    useEffect(() => {
        dispatch(getFavorite());
    }, [delBtn]);

    return (
        <div className={s.root}>
            <div className={s.centering}>
                {
                    favoriteList.map((item) =>
                        <FavoriteItem name={item.name} count={item.count} description={item.description} id={item.id}
                                      photos={item.photos} price={item.price}/>)}
            </div>
        </div>
    );
}

export default Favorite;