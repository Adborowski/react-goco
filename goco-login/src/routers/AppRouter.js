import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact={true} path="/home" component={Home}/>
                <Route path="/" component={Login}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;