﻿import React from 'react';
import HomeRouter from '../routers/HomeRouter';
import Navbar from './Navbar';

export default class Login extends React.Component{

    render(){

        return(
            <div className="comp-home">
                <Navbar></Navbar>  
                <HomeRouter></HomeRouter>
                
            </div>
            
        )
        
    }

}