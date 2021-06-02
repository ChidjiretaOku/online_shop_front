import * as React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeEmail, changePassword, loginUser} from './@slice';
import {Button, TextField, Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

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
                // borderStyle: "solid",
                // borderWidth: '2px',
                borderRadius: '5px',
                // borderColor: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.dark,
                width: '30%',
                padding: theme.spacing(6),
                '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    width: "97%",
                },
            },
            n: {
                color: theme.palette.primary.contrastText,
            }
            // box: {
            //     borderColor: theme.palette.primary.dark,
            //     borderStyle: "solid",
            //     borderWidth: '2px',
            //     borderRadius: '5px',
            //     display: 'flex',
            //     flexDirection: 'column',
            //     width: '30%',
            //     alignItems: 'center',
            //     '& .MuiTextField-root': {
            //         width: '97%',
            //         margin: theme.spacing(1),
            //     },
            //     // '& .MuiButton-root':{
            //     //     margin: theme.spacing(10),
            //     // },
            // },
        }),
    );

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h2 className={classes.n}>Sign in</h2>
            <div>{status}</div>
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
