import * as React from 'react';
import Nav from "../../components/Navigation";
import OrderForm from '../../components/OrderForm';
import {ThemeProvider} from "@material-ui/core";
import theme from '../../themes/main'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const Order: React.FC = () => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
        }))

    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Nav/>
                <div className={classes.root}>
                <OrderForm/>
                </div>
            </ThemeProvider>
        </div>
    );

}