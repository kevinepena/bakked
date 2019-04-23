import React, { Component } from 'react';
import Item from './Item';


export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
            <h2>Menu</h2>
                <ul className="items">
                    {Object.keys(this.props.items).map((key, i) => <Item key={i} llave={key} item={this.props.items[key]} addToCart={this.props.addToCart} />)}
                </ul>
            </div>
        )
    }
}
