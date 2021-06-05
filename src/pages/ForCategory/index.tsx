import React, { useEffect } from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import TeaList from "../../components/TeaList";

export const ForCategory: React.FC = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={"CategoryList"}/>
            </ThemeProvider>
        </div>
    )
}
