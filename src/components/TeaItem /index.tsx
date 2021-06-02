import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface ITeaItem {
    "id": number,
    "name": string,
    "description": string | null,
    "price": number,
    "count": number,
    "photos": any,
}

const TeaItem: React.FC<{ tea: ITeaItem }> = ({tea}) => {

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
                maxWidth: 300,
            },
        }),
    )

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title={tea.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {tea.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {tea.description}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">
                        ${tea.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" variant="outlined">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default TeaItem;