import React, {useEffect} from 'react';
import {List, ListItem} from "@material-ui/core";
import {useAppDispatch, useAppSelector} from "../../hooks";
import CategoryItem, {ICategoryItem} from "../CategoryItem";
import {getCategories} from "./@slice";

const CategoryList: React.FC = () => {

    const dispatch = useAppDispatch();

    const categoryList = useAppSelector(state => state.categoryList.categoryList);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch, categoryList]);

    return (
        <List>
            {
                categoryList.map((item) =>
                    <CategoryItem  id={item.id} name={item.name} />)}
    </List>

);
}
    export default CategoryList;