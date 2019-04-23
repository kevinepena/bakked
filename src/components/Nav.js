import React, { Component } from 'react';
import Logo from './Logo';

export default class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <Logo />
                <ul>
                    <li><button className="nav-button">About</button></li>
                    <li><button className="nav-button">Menu</button></li>
                    <li><button className="nav-button">Locations</button></li>
                    <li><button className="nav-button">Contact</button></li>
                    <li><button className="nav-button">Login</button></li>
                </ul>
            </nav>
        )
    }
}
