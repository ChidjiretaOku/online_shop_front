import React from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import {useAppSelector} from "../../hooks";
import SearchFC from "../../components/Search";

export const Search: React.FC = () => {
    const searchName = useAppSelector(state => state.NavBar.searchWord);

    const ifNotNull = (name: string) => {
        if (name) {
            return(
                <><BigHeaderBar message={`Поиск по: ${name}`}/><SearchFC name={name}/></>
            );
        } else return(<BigHeaderBar message={`Введите запрос`}/>)
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                {ifNotNull(searchName)}
            </ThemeProvider>
        </div>
    )
}