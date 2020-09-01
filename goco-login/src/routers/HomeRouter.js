import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Login from '../components/Login'
import Training from '../components/Training'
import Games from '../components/Games';
import Social from '../components/Social'

const HomeRouter = () => (

    <div>

        <BrowserRouter>

            <div className="navbar-body">

                <div className="navbar-item"> <NavLink className="navbar-link" activeClassName="navbar-link-active" to="/home/games">Games</NavLink> </div>
                <div className="navbar-item"> <NavLink className="navbar-link" activeClassName="navbar-link-active" to="/home/social">Social</NavLink> </div>
                <div className="navbar-item"> <NavLink className="navbar-link" activeClassName="navbar-link-active" to="/home/training">Training</NavLink></div>
            
            </div>

                <Switch>
                    <Route path="/home/training" component={Training}/>
                    <Route path="/home/games" component={Games}/>
                    <Route path="/home/social" component={Social}/>
                    <Route path="/login" component={Login}/>
                </Switch>

        </BrowserRouter>

    </div>
);

export default HomeRouter;