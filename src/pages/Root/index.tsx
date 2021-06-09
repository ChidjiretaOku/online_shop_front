import React from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import TeaList from "../../components/TeaList";


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
