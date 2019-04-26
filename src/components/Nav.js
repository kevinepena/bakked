import React, { Component } from 'react';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';

export default class Nav extends Component {

    state = {
        open: false
    }

    toggle = () => {
        this.setState({ open: !this.state.open });
    }
    closeNav = () => {
        this.setState({ open: false });
    }
    render() {
        return (
            <nav className={`nav ${this.props.scroll ? 'scroll' : ''}`}>
                <div className="nav-toggle">
                </div>

                <Logo scrollToTop={this.props.scrollToTop} />
                <div className="nav-toggle" onClick={this.toggle}>
                    <HamburgerButton open={this.state.open} />
                </div>
                <ul onClick={this.closeNav} className={`${this.props.mobile ? 'closed' : 'closed'} ${this.state.open ? 'open' : ''}`}>
                    <li><button onClick={this.props.scrollToMyAbout} className="nav-button">About</button></li>
                    <li><button onClick={this.props.scrollToMyMenu} className="nav-button">Menu</button></li>
                    <li><button onClick={this.props.scrollToMyLocation} className="nav-button">Locations</button></li>
                    <li><button onClick={this.props.scrollToMyContact} className="nav-button">Contact</button></li>
                    <li><button onClick={this.props.toggleLogin} className="nav-button">Login</button></li>
                </ul>
            </nav>
        )
    }
}
