import React, {useEffect} from 'react';
import TeaItem from "../TeaItem";
import s from '../TeaList/TeaList.module.scss';
import {getTeasBySearch} from "./@slice";
import {useAppDispatch, useAppSelector} from "../../hooks";


const Search: React.FC<{ name: string }> = ({name}) => {

    const dispatch = useAppDispatch();
    const teaList = useAppSelector(state => state.search.teaList);

    useEffect(() => {
        dispatch(getTeasBySearch(name));
    }, [name]);

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

export default Search;