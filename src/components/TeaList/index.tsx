import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React, {useEffect} from 'react';
import TeaItem, {ITeaItem} from "../TeaItem ";
import {List, ListItem} from "@material-ui/core";
import s from './TeaList.module.scss';
import {getTeas} from "./@slice";
import {useAppDispatch, useAppSelector} from "../../hooks";



const TeaList: React.FC = () => {

    const dispatch = useAppDispatch();

    const teaList = useAppSelector(state => state.teaList.teaList);

    useEffect(() => {
        dispatch(getTeas());
    }, [dispatch, teaList]);

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

export default TeaList;