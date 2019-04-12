import React, { Component } from 'react';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Order from './components/Order';
import Item from './components/Item';
import base from './base';

class App extends Component {

    state = {
        items: {},
        order: {}
    }

    componentDidMount() {
        const localStorageRef = localStorage.getItem('order');

        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        
        this.ref = base.syncState('items', {
            context: this,
            state: 'items',
            isArray: false
        });
    }

    componentDidUpdate() {
        localStorage.setItem('order', JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addItem = item => {

        const items = { ...this.state.items };

        items[`item${Date.now()}`] = item;

        this.setState({ items });
    }

    addToCart = key => {

        const order = { ...this.state.order };

        order[key] = order[key] + 1 || 1;

        this.setState({ order });

    }

    render() {
        return (
            <div className="app">
                <div className="menu">
                    <Header />
                    <ul className="items">
                        {Object.keys(this.state.items).map((key, i) => <Item key={i} llave={key} item={this.state.items[key]} addToCart={this.addToCart} />)}
                    </ul>
                </div>
                <Order items={this.state.items} order={this.state.order} />
                <Inventory addItem={this.addItem} />
            </div>
        )
    }
}

export default App;