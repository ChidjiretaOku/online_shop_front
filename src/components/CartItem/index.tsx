import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {fetchAuthData, fetchData} from "../../utils/API";
import {TextField} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Simulate} from "react-dom/test-utils";
import compositionStart = Simulate.compositionStart;
import {useAppDispatch} from "../../hooks";
import {clickDelete} from "./@slice"

export interface ICartItem {
    "id": number,
    "name": string,
    "price": number,
    "count": number,
}



const CartItem: React.FC<ICartItem> = ({id, name, price, count}) => {

    const dispatch = useAppDispatch();
    const handleDelete = () => {
        dispatch(clickDelete(id))
    }

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            card: {
                display: "flex",
                alignItems:"center",
                justifyContent: "space-around"
            },
            hrStyle: {
                margin: "0",
                padding: "0",
                height: "0",
                border: "none",
                borderTop: "2px dotted #ddd",
            },
        }),
    )

    const classes = useStyles();

    return (
        <li key={id}>
            <div className={classes.card}>
                <Typography>{name} </Typography>
                <Typography>${price} </Typography>

                <TextField
                    id = "textfield"
                    style={{maxWidth:"150px"}}
                    defaultValue={count}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />

                <Typography>${price * count} </Typography>

                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </div>
            <hr className={classes.hrStyle}/>
        </li>
    );
}

export default CartItem;