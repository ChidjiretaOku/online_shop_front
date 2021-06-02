import React, { useEffect } from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import TeaList from "../../components/TeaList";
import TeaItem, {ITeaItem} from "../../components/TeaItem ";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getTeas} from "../../components/TeaList/@slice";

const teeee : Array<ITeaItem>= [{
    "id": 2,
    "name": "Чай черный с облепихой",
    "description": "kekimek",
    "price": 100,
    "count": 100,
    "photos": []
},
    {
        "id": 1,
        "name": "Чай черный с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 2,
        "name": "qweqweый с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 1,
        "name": "Чай sdfdgdс облепихой",
        "description": "kekisdfgsdfgek",
        "price": 100,
        "count": 100,
        "photos": []
    },{
        "id": 2,
        "name": "Чай черный с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 1,
        "name": "Чай черный с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 2,
        "name": "qweqweый с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 1,
        "name": "Чай sdfdgdс облепихой",
        "description": "kekisdfgsdfgek",
        "price": 100,
        "count": 100,
        "photos": []
    },{
        "id": 2,
        "name": "Чай черный с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 1,
        "name": "Чай черный с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 2,
        "name": "qweqweый с облепихой",
        "description": "kekimek",
        "price": 100,
        "count": 100,
        "photos": []
    },
    {
        "id": 1,
        "name": "Чай sdfdgdс облепихой",
        "description": "kekisdfgsdfgek",
        "price": 100,
        "count": 100,
        "photos": []
    }
]
export const Root: React.FC = () => {



    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={"TeaList"}/>
                <TeaList/>
            </ThemeProvider>
        </div>
    )
}
