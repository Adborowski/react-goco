import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1 className="header__headline">Dunkit Menu</h1>
        <div className="header__navbar">
            <div className="header__linkbox"><NavLink exact={true} activeClassName="header__navlink--active" className="header__navlink" to="/games">Your Games</NavLink></div>
            <div className="header__linkbox"><NavLink exact={true} activeClassName="header__navlink--active" className="header__navlink" to="/training">Training</NavLink></div>
            <div className="header__linkbox"><NavLink exact={true} activeClassName="header__navlink--active" className="header__navlink" to="/social">Social</NavLink></div>
        </div>
    </header>
);

export default Header;