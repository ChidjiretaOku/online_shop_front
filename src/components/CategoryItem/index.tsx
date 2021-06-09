import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Spa} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Routes from "../../pages/routes";
import {useHistory} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {drawerToggle, setCategory} from "../Navigation/@slice"

export interface ICategoryItem {
    "id": number,
    "name": string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

const CategoryItem: React.FC<ICategoryItem> = ({id, name}) => {
    const classes = useStyles();
    const dispatch = useAppDispatch()
    const history = useHistory();

    return (
        <ListItem button className={classes.nested} onClick={() => {
            dispatch(setCategory({id, name}))
            dispatch(drawerToggle())
            history.push(Routes.CATEGORY)
        }}>
            <ListItemIcon>
                <Spa fontSize={"small"}/>
            </ListItemIcon>
            <ListItemText primary={name}/>
        </ListItem>
    );
}

export default CategoryItem;