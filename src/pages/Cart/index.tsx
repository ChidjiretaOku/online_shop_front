import React, { useEffect } from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import Cart from "../../components/Cart";

export const cart: React.FC = () => {


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={"Корзина"}/>
                <Cart/>
            </ThemeProvider>
        </div>
    )
}
