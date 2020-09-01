import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const HomeRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact={true} path="/trainings" component={}/>
                <Route exact={true} path="/games" component={}/>
                <Route exact={true} path="/social" component={}/>
                <Route path="/" component={Login}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default HomeRouter;