import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';
import Training from '../components/Training';
import Games from '../components/Games';
import Social from '../components/Social';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact={true} path="/home" component={Home}/>
                <Route exact={true} path="/login" component={Login}/>
                <Route exact={true} path="/training" component={Training}/>
                <Route exact={true} path="/games" component={Games}/>
                <Route exact={true} path="/social" component={Social}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;