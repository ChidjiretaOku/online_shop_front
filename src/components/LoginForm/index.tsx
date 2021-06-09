import * as React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeEmail, changePassword, loginUser} from './@slice';
import {Button, TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Redirect} from "react-router-dom";
import Routes from "../../pages/routes";

const LoginForm: React.FC = () => {
    const email = useAppSelector(state => state.loginForm.email);
    const password = useAppSelector(state => state.loginForm.password);
    const status = useAppSelector(state => state.loginForm.loading)
    const dispatch = useAppDispatch();

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: theme.spacing(1),
                '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    width: '70ch',
                },
            },
            badge: {
                backgroundColor: theme.palette.secondary.light,
                borderRadius: "10px",
                padding: theme.spacing(1),
            }
        }),
    );

    const classes = useStyles();

    if (status == "succeeded") {
        return <Redirect to={Routes.ROOT}/>
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.badge}>Status: {status}</div>
            <div><TextField
                id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="filled"
                value={email}
                onChange={(event) => dispatch(changeEmail(event.target.value))}
            /></div>
            <div><TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                value={password}
                onChange={(event) => dispatch(changePassword(event.target.value))}
            /></div>
            <Button color="secondary" variant='contained'
                    onClick={
                        () => {
                            dispatch(loginUser({email, password}));
                        }}>Войти</Button>
        </form>

    )
}

export default LoginForm;
