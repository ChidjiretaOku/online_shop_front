import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {fetchAuthData} from "../../utils/API";
import IconButton from "@material-ui/core/IconButton";
import {Favorite} from "@material-ui/icons";
import {TextField} from "@material-ui/core";
import {changeCount} from "./@slice";
import {useAppDispatch, useAppSelector} from "../../hooks";

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": any,
}

const TeaItem: React.FC<ITeaItem> = ({id, name, description, price, count, photos}) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            media: {
                height: 140,
            },
            card: {
                width: "100%",
            },
            fav: {
                color: theme.palette.secondary.main,
            },
        }),
    )

    const dispatch = useAppDispatch();

    const classes = useStyles();

    const buyCount = useAppSelector(state => state.teaItem.count);

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">
                        ₽{price}
                    </Typography>
                    <Typography variant="caption" color={count ? "textSecondary" : "error"} component="p">
                        {count ? `На складе ${count} штук` : "Нет на складе"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{marginBottom: "1rem"}}>
                <TextField
                    label="Count"
                    type="number"
                    // defaultValue={1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={buyCount}
                    onChange={(event => dispatch(changeCount(event.target.value)))}
                />
                <Button disabled={!count} size="small" color="secondary" variant="outlined" onClick={() => {
                fetchAuthData('api/cart/add', {
                    method: 'POST',
                    headers: {'accept': '*/*', 'Content-Type': 'application/json'},
                    body: JSON.stringify({article_id: id,count: buyCount})
                });
            }}>
                Add to cart
            </Button>
                <IconButton onClick={() => {
                    fetchAuthData('api/favorites/follow', {
                        method: 'POST',
                        headers: {'accept': '*/*', 'Content-Type': 'application/json'},
                        body: JSON.stringify({article_id: id})
                    });
                }}>
                    <Favorite className={classes.fav}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default TeaItem;