import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSub = () => {
        alert('sub');
    }
    render() {
        return (
            <div className="modal">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSub}>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <buttton type="submit">Sign In</buttton>
                </form>
                <div className="modal-overlay"></div>
            </div>
        )
    }
}
