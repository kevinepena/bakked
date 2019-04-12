import React, { Component } from 'react';
import AddItemForm from './AddItemForm';

export default class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddItemForm addItem={this.props.addItem} />
                {/* <button onClick={this.loadItems}></button> */}
            </div>
        )
    }
}
