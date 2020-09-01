import React from 'react';
import {NavLink, Link, Router} from 'react-router-dom';

export default class Login extends React.Component{

    render(){

        return(


                <div className="navbar">
                    <div className="navbar-body">

                        <div className="navbar-item">
                            <Link to="/training">Your Training</Link>
                        </div>

                        <div className="navbar-item">
                            <NavLink to="/games">Games</NavLink>
                        </div>

                        <div className="navbar-item">
                            <NavLink to="/social">Social</NavLink>
                        </div>
                    
                    </div>
                    
                </div>
            
        )
        
    }

}