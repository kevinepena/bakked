import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';

export default class Nav extends Component {

    state = {
        open: false,
        admin: false
    }

    componentDidMount() {
        this.test()
    }

    test = () => {
        /* write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. At each position of the grid there is either a spae or a "#" character. The charactrs should form a chess board. 
Passing the string to the console should show the grid.
When you have a program that generates this pattern, define a variable size = 8 and change the program so it works for any size, ouputting a grid of the given width and height. 
*/


//authors solution
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);
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
                {this.props.scopeCheck(this.props.user) && <li><button className="nav-button"><Link className="nav-button" to="/inventory">Inventory</Link></button></li>}
                {!this.props.user ? <li><button onClick={this.props.toggleLogin} className="nav-button">Login</button></li> : <li><button onClick={this.props.logout} className="nav-button">Logout</button></li>}
            </ul>
        </nav>
    )
}
}
