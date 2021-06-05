import * as React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
    changeAddress,
    changeFirst_name,
    changePhone,
    changeSurname,
    CreateOrder,
} from './@slice';
import {Button, TextField, Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';


const OrderForm: React.FC = () => {
    const first_name = useAppSelector(state => state.orderForm.first_name);
    const surname = useAppSelector(state => state.orderForm.surname);
    const phone = useAppSelector(state => state.orderForm.phone);
    const address = useAppSelector(state => state.orderForm.address);

    const dispatch = useAppDispatch();

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '5px',
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
        }),
    );

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h2 className={classes.n}>Введите данные для заказа</h2>
            <div>{status}</div>
            <div><TextField
                id="standard-firstname-input"
                label="First name"
                type="first-name"
                autoComplete="current-first-name"
                variant="filled"
                value={first_name}
                onChange={(event) => dispatch(changeFirst_name(event.target.value))}
            /></div>
            <div><TextField
                id="standard-surname-input"
                label="Surname"
                type="surname"
                autoComplete="current-surname"
                variant="filled"
                value={surname}
                onChange={(event) => dispatch(changeSurname(event.target.value))}
            /></div>
            <div><TextField
                id="standard-phone-input"
                label="Phone"
                type="phone"
                autoComplete="current-phone"
                variant="filled"
                value={phone}
                onChange={(event) => dispatch(changePhone(event.target.value))}
            /></div>
            <div><TextField
                id="standard-address-input"
                label="Address"
                type="address"
                autoComplete="current-address"
                variant="filled"
                value={address}
                onChange={(event) => dispatch(changeAddress(event.target.value))}
            /></div>
            <Button color="secondary" variant='contained'
                    onClick={
                        () => {
                            dispatch(CreateOrder({first_name, surname, phone, address}));
                        }}>Заказать</Button>
        </form>

    )
}

export default OrderForm;