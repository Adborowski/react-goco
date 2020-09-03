import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Login from '../components/Login'
import Training from '../components/Training'
import Challenge from '../components/Challenge';
import Tracker from '../components/Tracker'

const HomeRouter = () => (

    <div>

        <BrowserRouter>

            <div className="navbar-body">

                <div className="navbar-item"> <NavLink className="navbar-link" activeClassName="navbar-link-active" to="/home/tracker">Tracker</NavLink> </div>
                <div className="navbar-item"> <NavLink className="navbar-link" activeClassName="navbar-link-active" to="/home/challenge">Challenge</NavLink> </div>
                <div className="navbar-item"> <NavLink className="navbar-link" activeClassName="navbar-link-active" to="/home/training">Training</NavLink></div>
            
            </div>

                <Switch>
                    <Route path="/home/training" component={Training}/>
                    <Route path="/home/challenge" component={Challenge}/>
                    <Route path="/home/tracker" component={Tracker}/>
                    <Route path="/home" component={Tracker}/>
                    <Route path="/login" component={Login}/>
                </Switch>

        </BrowserRouter>

    </div>
);

export default HomeRouter;