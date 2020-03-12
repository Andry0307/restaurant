import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import TablesList from "./TablesList";

function Tables() {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <TablesList/>
            </Route>
        </Switch>
    );
}

export default Tables;