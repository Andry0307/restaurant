import React, {useEffect} from 'react';
import {Route, Switch, useRouteMatch} from "react-router";
import {connect} from 'react-redux';
import WaitersList from "./WaitersList";
import WaiterForm from "./WaiterForm";
import {getWaiters} from "../../store/actions/waitersActions";
import {setLoading} from "../../store/actions/loadingAction";

function Waiters({getWaitersList, setLoading, isLoading}) {

    useEffect(()=>{
        setLoading(true);
        getWaitersList();
    }, []);

    const {path} = useRouteMatch();
    return (
        <div>
            { isLoading ? 'LOADING...' :
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
    getWaitersList: getWaiters,
    setLoading: setLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiters);