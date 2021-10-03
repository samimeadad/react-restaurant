import React from 'react';
import { NavLink } from 'react-router-dom';

const anchorStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'white'
}

const activeStyle = {
    fontWeight: "bold",
    color: "yellow"
}

const Header = () => {
    return (
        <div>
            <NavLink
                style={ anchorStyle }
                to="/home"
                activeStyle={ activeStyle }>
                Home
            </NavLink>
            <NavLink
                style={ anchorStyle }
                to="/menu"
                activeStyle={ activeStyle }>
                Menu
            </NavLink>
        </div>
    );
};

export default Header;