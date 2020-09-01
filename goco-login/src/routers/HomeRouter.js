import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Training from '../components/Training'

const HomeRouter = () => (
    <BrowserRouter>
        <div>
                <Route path="/training" component={Training}/>
                <Route path="/games" component={Training}/>
                <Route path="/social" component={Training}/>
        </div>
    </BrowserRouter>
);

export default HomeRouter;