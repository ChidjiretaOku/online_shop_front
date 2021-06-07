import React, { useEffect } from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import TeaList from "../../components/TeaList";
import TeaItem, {ITeaItem} from "../../components/TeaItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getTeas} from "../../components/TeaList/@slice";

export const Root: React.FC = () => {


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={"Каталог"}/>
                <TeaList/>
            </ThemeProvider>
        </div>
    )
}
