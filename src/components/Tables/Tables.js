import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import TablesList from "./TablesList";
import TableForm from "./TableForm";

function Tables() {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <TablesList/>
            </Route>
            <Route path={`${path}/:id`}
                render={route => {
                    return <TableForm id={route.match.params.id}/>
            }}>
            </Route>
        </Switch>
    );
}

export default Tables;