import * as React from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import Nav from "../../components/Navigation";
import LoginForm from "../../components/LoginForm";

export const Root: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar children={"Tea shop"}/>
            </ThemeProvider>
        </div>
    )
}
