import React, { Component } from 'react';

export default class AddItemForm extends Component {

    state = {
        name: '',
        price: '',
        status: 'available',
        desc: '',
        image: ''
    }

    createItem = (e) => {
        e.preventDefault();

        this.props.addItem(this.state);

        this.setState({
            name: '',
            price: '',
            status: 'available',
            desc: '',
            image: ''
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form className="item-edit" onSubmit={this.createItem}>
                <input required name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                <input required name="price" type="number" placeholder="Price" value={this.state.price} onChange={this.handleChange} />
                <select required name="status" value={this.state.status} onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea required name="desc" placeholder="Desc" value={this.state.desc} onChange={this.handleChange} />
                <input required name="image" type="text" placeholder="Image" value={this.state.image} onChange={this.handleChange} />
                <button type="submit">Add Item!</button>
            </form>
        )
    }
}
