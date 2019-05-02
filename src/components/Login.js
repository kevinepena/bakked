import React, { Component } from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../base';

export default class Login extends Component {

    state = {
        signin: true,
        email: '',
        password: ''
    }

    componentDidMount() {
        console.log(firebase.auth().currentUser)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleAuthChange = e => {
        e.preventDefault();
        this.setState({ signin: !this.state.signin })
    }

    handleSub = e => {
        e.preventDefault();

        const { email, password } = this.state;

        this.props.userLogin(this.state.signin, email, password);

    }

    render() {
        return (
            <div aria-hidden={this.props.open ? 'false' : 'true'} aria-live="polite" aria-controls="modal" id="modal" className={`modal ${this.props.open ? 'modal-open' : 'modal-closed'}`}>
                <div aria-hidden="true" className="modal-overlay">
                </div>
                <div className="interior">
                    <span onClick={this.props.toggleLogin} className='close-modal'>&times;</span>
                    <h2>{this.state.signin ? 'Sign In' : 'Sign Up'}</h2>
                    <form className="login-form" onSubmit={this.handleSub}>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        <button type="submit">{this.state.signin ? 'Sign In' : 'Sign Up'}</button>
                        <span>or</span>
                        <button onClick={this.handleAuthChange}>{!this.state.signin ? 'Sign In' : 'Sign Up'}</button>
                    </form>
                </div>
            </div>
        )
    }
}
