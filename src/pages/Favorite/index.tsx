import React, { useEffect } from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import Favorite from "../../components/Favorite";

export const favorite: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={"Избранное"}/>
                <Favorite/>
            </ThemeProvider>
        </div>
    )
}