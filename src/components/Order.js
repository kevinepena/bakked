import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Order extends Component {

    renderOrder = key => {
        const item = this.props.items[key];
        const count = this.props.order[key];
        const isAvailable = item && item.status === 'available';
        if (!item) return null;

        if (!isAvailable) {
            return <li key={key}>Sorry, {item ? item.name : 'item'} is no longer available <button className="warning" onClick={() => this.props.deleteFromCart(key)}>&times;</button></li>
        }
        return (
            <CSSTransition classNames="order" key={key} timeout={{ enter: 250, exit: 250 }}>
                <li key={key} >
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={count} timeout={{ enter: 250, exit: 250 }}>
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        {item.name} -
                        <span className="price">
                            {formatPrice(count * item.price)}
                        </span>
                        <button className="warning" onClick={() => this.props.deleteFromCart(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
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
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}
