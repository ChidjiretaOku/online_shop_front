import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';

const BigHeaderBar: React.FC<{message:string}> = ({message}) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "auto",
                minWidth: "auto",
                maxWidth: "100%",
                borderRadius: "5px",
                paddingBottom: theme.spacing(5),
                paddingTop: theme.spacing(5),
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastText,
                fontSize: "72",
            },
        }),
    )

    const classes = useStyles();


    return (
        <div className={classes.root}>
            {message}
        </div>
    )
}

export default BigHeaderBar;