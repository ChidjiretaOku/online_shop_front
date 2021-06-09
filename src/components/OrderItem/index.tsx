import {createStyles, makeStyles} from "@material-ui/core/styles";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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

const OrderItem: React.FC<IOrderItem> = ({
                                             id,
                                             user_id,
                                             first_name,
                                             surname,
                                             phone,
                                             address,
                                             price,
                                             count,
                                             date,
                                             status
                                         }) => {

    const useStyles = makeStyles(() =>
        createStyles({
            card: {
                width: "100%",
            },
        }),
    )

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="inherit" component="p">
                        Заказ №{id} от {date.substring(0, date.indexOf('T'))}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ₽{price}
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