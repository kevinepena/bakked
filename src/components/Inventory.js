import React, { Component } from 'react';
import AddItemForm from './AddItemForm';
import EditItem from './EditItem';


export default class Inventory extends Component {
    render() {

        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.items).map(key => <EditItem key={key} llave={key} item={this.props.items[key]} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />)}
                <AddItemForm addItem={this.props.addItem} />
                {/* <button onClick={this.loadItems}></button> */}
            </div>
        )
    }
}
