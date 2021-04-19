import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from '../components/detail/index';
import Card from '../components/layout/index'
import NotFound from '../components/404'

const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Card />
            </Route>
            <Route path="/detail/:id" exact>
               <Detail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
    </Router>
    )
}

export default Routes;
