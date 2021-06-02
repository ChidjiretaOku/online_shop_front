import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import TeaItem, {ITeaItem} from "../TeaItem ";
import {List, ListItem} from "@material-ui/core";

export interface ITeaList {
    list: any
}

const TeaList: React.FC<{ list: ITeaList }> = ({list}) => {

    return (
        <List>
            {/*{list.list.map((listItem, index) => {*/}
            {/*    let tea : ITeaItem = listItem;*/}

            {/*    return(*/}
            {/*    <ListItem key={index}>*/}
            {/*        <TeaItem tea={tea}/>*/}
            {/*    </ListItem>*/}
            {/*    )}*/}
            {/*)}*/}
        </List>
    )
}
