import React, { useEffect } from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import TeaList from "../../components/TeaList";
import TeaItem, {ITeaItem} from "../../components/TeaItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getTeas} from "../../components/TeaList/@slice";
import CategoryFC from "../../components/Category";

export const Category: React.FC = () => {
    const categoryName = useAppSelector(state => state.NavBar.categoryName);
    const categoryId = useAppSelector(state => state.NavBar.categoryId);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={categoryName}/>
                <CategoryFC c_id={categoryId}/>
            </ThemeProvider>
        </div>
    )
}
