import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Home from '../components/Home';


import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route exact={true} path="/" component={HomePage}/>
                <Route exact={true} path="/portfolio" component={PortfolioPage}/>
                <Route path="/portfolio/:id" component={Project}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;