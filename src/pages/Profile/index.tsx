import React from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import Order from "../../components/Order"


export const Profile: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={"Заказы"}/>
                <Order/>
            </ThemeProvider>
        </div>
    );
}