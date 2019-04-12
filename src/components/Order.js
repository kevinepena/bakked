import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Order extends Component {

    renderOrder = key => {
        const item = this.props.items[key];
        const count = this.props.order[key];
        const isAvailable = item && item.status === 'available';
        if(!item) return null;
        
        if (!isAvailable) {
            return <li key={key}>Sorry, {item ? item.name : 'item'} is no longer available</li>
        }
        return (
            <li key={key} >
                {count} {item.name};
                {formatPrice(count * item.price)}
            </li>
        );
    }

    render() {

        const orderIds = Object.keys(this.props.order);

        const total = orderIds.reduce((prevTotal, key) => {
            const item = this.props.items[key];
            const count = this.props.order[key];
            const isAvailable = item && item.status === 'available';

            if (isAvailable) {
                return prevTotal + (count * item.price);
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}
