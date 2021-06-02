import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';

export interface props {
    text: string;
}

const BigHeaderBar: React.FC = ({children}) => {

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
                fontSize: "40",
            },
        }),
    )

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <h1>{children}</h1>
        </div>
    )
}

export default BigHeaderBar;