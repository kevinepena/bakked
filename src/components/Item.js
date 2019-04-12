import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Item extends Component {

    render() {
        const { item } = this.props;

        const isAvailable = item.status === 'available';
        return (
            <li className="menu-item">
                <img src={item.image} alt={item.name} />
                <h3 className="item-name">
                    {item.name}
                    <span className="price">{formatPrice(item.price)}</span>
                </h3>
                <p>{item.desc}</p>
                <button onClick={() => this.props.addToCart(this.props.llave)} disabled={!isAvailable}>{isAvailable ? 'Add To Cart' : 'Sold Out'}</button>
            </li>
        )
    }
}
