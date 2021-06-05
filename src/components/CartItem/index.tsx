import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {fetchAuthData, fetchData} from "../../utils/API";
import {ListItem, ListItemText} from "@material-ui/core";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": any,
}

const CartItem: React.FC<ITeaItem> = ({id, name, description, price, count,photos}) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            card:{
                width: "300%",
            },
        }),
    )

    const classes = useStyles();

    return (
        <ListItem className={classes.card}>
            <ListItemText>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p">
                    ${price}
                </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => {
                    fetchAuthData('api/cart/del', {
                        method: 'POST',
                        headers: {'accept': '*/*', 'Content-Type': 'application/json'},
                        body: JSON.stringify({article_id: id})
                    });
                }}>
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default CartItem;