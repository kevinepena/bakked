import React, { Component } from 'react'

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleChange = e => {
        this.setState({ [e.target]: e.value })
    }

    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="contact" ref={this.props.contactref}>
                <h2>Contact</h2>

                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <p>Please submit any custom orders at least 48 hours in advance</p>
                    <label htmlFor="name">
                        Name:
                </label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <label htmlFor="email">
                        Email:
                </label>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <label htmlFor="subbject">
                        Subject:
                </label>
                    <input type="text" name="subject" onChange={this.handleChange} />
                    <label htmlFor="message">
                        Message:
                </label>
                    <textarea type="text" name="message" onChange={this.handleChange} />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}
