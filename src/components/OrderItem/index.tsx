import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface IOrderItem {
    id: number;
    user_id: number;
    first_name: string;
    surname: string;
    phone: string;
    address: string,
    price: number,
    count: number,
    date: string,
    status: number
}

const OrderItem: React.FC<IOrderItem> = ({id, user_id , first_name, surname, phone, address, price, count, date, status}) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "auto",
                minWidth: "auto",
                maxWidth: "60%",
                borderRadius: "5px",
                paddingBottom: theme.spacing(5),
                paddingTop: theme.spacing(5),
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastText,
                fontSize: "72",
            },
            media: {
                height: 140,
            },
            card:{
                width: "100%",
            },
        }),
    )

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">
                        {status}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default OrderItem;