import {createStyles, makeStyles} from "@material-ui/core/styles";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import {ThumbDown} from "@material-ui/icons";
import theme from "../../themes/main";
import {clickDelete} from "./@slice";
import {useAppDispatch} from "../../hooks";

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": any,
}

const FavoriteItem: React.FC<ITeaItem> = ({id, name, description, price, count, photos}) => {

    const useStyles = makeStyles(() =>
        createStyles({
            media: {
                height: 140,
            },
            card: {
                width: "100%",
            },
        }),
    )

    const img = `/api/download/${photos[0].photo}`
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const handleDelete = () => {
        dispatch(clickDelete(id))
    }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
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
                        ${price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton onClick={handleDelete}>
                    <ThumbDown style={{color: theme.palette.secondary.dark}}/>
                </IconButton>

            </CardActions>
        </Card>
    );
}

export default FavoriteItem;