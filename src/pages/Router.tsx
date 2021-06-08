import * as React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes from "./routes";

import {Root} from "./Root";
import {Login} from "./Login";
import {TestPage} from "./TestPage"
import {Register} from "./Register";
import {Order} from "./Order"
import {Profile} from "./Profile"
import {cart} from "./Cart"
import {favorite} from "./Favorite"
import {Category} from "./Category";

export const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <React.Suspense fallback={<div/>}>
        <Switch>
          <Route exact path={Routes.ROOT} component={Root}/>
          <Route exact path={Routes.LOGIN} component={Login}/>
          <Route exact path={Routes.REGISTER} component={Register}/>
          <Route exact path={Routes.ORDER} component={Order}/>
          <Route exact path={Routes.PROFILE} component={Profile}/>
          <Route exact path={Routes.CART} component={cart}/>
          <Route exact path={Routes.FAVORITE} component={favorite}/>
          <Route exact path={Routes.TEST} component={TestPage}/>
          <Route exact path={Routes.CATEGORY} component={Category}/>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}
