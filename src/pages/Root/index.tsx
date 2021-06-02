import * as React from 'react';
import Navigation from "../../components/Navigation";
import BigHeaderBar from "../../components/BigHeader";
import {ThemeProvider} from "@material-ui/core";
import theme from "../../themes/main";
import Nav from "../../components/Navigation";
import LoginForm from "../../components/LoginForm";
import TeaItem, {ITeaItem} from "../../components/TeaItem ";

const teeee : ITeaItem= {
    "id": 2,
    "name": "Чай черный с облепихой",
    "description": "kekimek",
    "price": 100,
    "count": 100,
    "photos": []
}

export const Root: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <BigHeaderBar message={"kekik"}/>
                <TeaItem tea={teeee} />
            </ThemeProvider>
        </div>
    )
}
