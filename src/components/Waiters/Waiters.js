import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import WaitersList from "./WaitersList";
import WaiterForm from "./WaiterForm";

function Waiters(props) {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <WaitersList/>
            </Route>
            <Route path={`${path}/:id`}
                render={route => {
                    return <WaiterForm id={route.match.params.id}/>
                }}>
            </Route>
        </Switch>
    );
}

export default Waiters;