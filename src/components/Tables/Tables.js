import React, {useEffect} from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import {connect} from 'react-redux';
import TablesList from "./TablesList";
import TableForm from "./TableForm";
import {getTables} from "../../store/actions/tablesActions";
import {setLoading} from "../../store/actions/loadingAction";

function Tables({getTablesList, setLoading, isLoading}) {

    useEffect(() => {
        setLoading(true);
        getTablesList();
    },[]);

    const {path} = useRouteMatch();
    return (
        <div>
            { isLoading ? 'LOADING...' :
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
            }
        </div>

    );
}

function mapStateToProps({loading}) {
    return {
        isLoading: loading.isLoading
    }
}

const mapDispatchToProps = {
    getTablesList: getTables,
    setLoading: setLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);