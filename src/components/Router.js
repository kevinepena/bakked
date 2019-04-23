import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import App from '../App';
import Inventory from './Inventory';
import base from '../base';
import Login from './Login';
import Nav from './Nav';



export default class RouterComp extends Component {

    state = {
        items: {},
        order: {},
        user: {}
    }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
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

    updateItem = (key, updatedItem) => {

        const items = { ...this.state.items };

        items[key] = updatedItem;

        this.setState({ items });
    }

    deleteItem = key => {
        const items = { ...this.state.items };

        items[key] = null;

        this.setState({ items });
    }

    addToCart = key => {

        const order = { ...this.state.order };

        order[key] = order[key] + 1 || 1;

        this.setState({ order });

    }

    deleteFromCart = key => {

        const order = { ...this.state.order };

        delete order[key];

        this.setState({ order });
    }

    SignUp() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
    }

    render() {
        // const authenticate = new firebase.auth.EmailAuthProvider.credential();
        // firebaseApp.auth().signInWithEmailAndPassword

        // console.log(auth);
        return (
            <BrowserRouter>
                <Switch>
                    <>
                        <Nav />
                        <Route exact path='/' render={props => {
                            return <App items={this.state.items} order={this.state.order} addToCart={this.addToCart} deleteFromCart={this.deleteFromCart} />
                        }
                        } />

                        <Route exact path='/inventory' render={props => {
                            return <Inventory items={this.state.items} addItem={this.addItem} updateItem={this.updateItem} deleteItem={this.deleteItem} />
                        }} />

                        <Route exact path='/login' render={props => {
                            return <Login />
                        }} />
                    </>
                </Switch>
            </BrowserRouter>
        )
    }
}