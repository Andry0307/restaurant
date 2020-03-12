import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Tables from "./components/Tables/Tables";
import Waiters from "./components/Waiters/Waiters";

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
            <Route path={`/tables`}>
                <Tables/>
            </Route>
            <Route path={`/waiters`}>
                <Waiters/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
