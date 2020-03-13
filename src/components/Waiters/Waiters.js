import React, {useEffect} from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import {connect} from 'react-redux';
import WaitersList from "./WaitersList";
import WaiterForm from "./WaiterForm";
import {getWaiters} from "../../store/actions/waitersActions";

function Waiters({getWaitersList}) {

    useEffect(()=>{
        getWaitersList();
    }, [getWaitersList]);

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

const mapDispatchToProps = {
    getWaitersList: getWaiters
};

export default connect(null, mapDispatchToProps)(Waiters);