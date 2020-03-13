import React, {useEffect} from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import {connect} from 'react-redux';
import TablesList from "./TablesList";
import TableForm from "./TableForm";
import {getTables} from "../../store/actions/tablesActions";

function Tables({getTablesList}) {

    useEffect(() => {
        getTablesList();
    },[getTablesList]);

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

const mapDispatchToProps = {
    getTablesList: getTables
};

export default connect(null, mapDispatchToProps)(Tables);