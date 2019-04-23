import React, { Component } from 'react'

export default class EditItem extends Component {


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });

        const updatedItem = { ...this.props.items, [e.target.name]: e.target.value };

        this.props.updateItem(this.props.llave, updatedItem);
    }


    render() {


        const { item, llave } = this.props;

        return (
            <div className="item-edit">
                <input type="text" name="name" value={item.name} onChange={this.handleChange} />
                <input type="text" name="price" value={item.price} onChange={this.handleChange} />
                <select required name="status" value={item.status} onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea required name="desc" value={item.desc} onChange={this.handleChange} />
                <input type="text" name="image" value={item.image} onChange={this.handleChange} />
                <button className="warning" onClick={() => this.props.deleteItem(llave)}>Delete item</button>
            </div>
        )
    }
}
