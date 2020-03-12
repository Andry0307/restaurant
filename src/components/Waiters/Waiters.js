import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import WaitersList from "./WaitersList";

function Waiters(props) {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <WaitersList/>
            </Route>
        </Switch>
    );
}

export default Waiters;