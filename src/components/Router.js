import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import App from '../App';
import Inventory from './Inventory';
import base, { firebaseApp } from '../base';
import Login from './Login';
import Nav from './Nav';
import Footer from './Footer';



export default class RouterComp extends Component {

    state = {
        items: {},
        order: {},
        user: null,
        scroll: false,
        mobile: null,
        login: false
    }

    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.menu = React.createRef();
        this.location = React.createRef();
        this.contact = React.createRef();
    }




    componentDidMount() {
        this.resize();

        window.addEventListener('scroll', this.scroll);
        window.addEventListener('resize', this.resize);

        const localStorageRef = localStorage.getItem('order');
        const user = localStorage.getItem('uid');

        if (user) {
            let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            if (new Date().getTime() < expiresAt) {
                localStorage.removeItem('uid');
                localStorage.removeItem('expires_at');
            } else {
                this.setState({ user: user });
            }

        }

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
        window.removeEventListener('scroll', this.scroll);
        window.removeEventListener('resize', this.resize);
    }

    scroll = (e) => {

        if (!document.querySelector('.header')) return;
        if (window.pageYOffset > document.querySelector('.header').clientHeight - 69) {
            this.setState({ scroll: true })
        } else {
            this.setState({ scroll: false })
        }
    }

    resize = (e) => {
        if (window.outerWidth < 768) {
            this.setState({ mobile: true })
        } else {
            this.setState({ mobile: false })
        }
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

    login = (loginState, email, password) => {

        if (loginState) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(data => {
                    let expiresAt = JSON.stringify(86400 + new Date().getTime());
                    console.log(expiresAt)
                    localStorage.setItem('uid', data.user.uid);
                    localStorage.setItem('expires_at', expiresAt);
                    this.toggleLogin();
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(data => {
                    console.group(data);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        }
    }

    scopeCheck = async () => {

        const store = await base.fetch('/admin', { context: this });

        return this.state.user === store;
    }

    scrollToTop = () => window.scrollTo(0, 0);

    scrollToMyAbout = () => window.scrollTo(0, this.about.current.offsetTop - 78);

    scrollToMyMenu = () => window.scrollTo(0, this.menu.current.offsetTop - 78);

    scrollToMyLocation = () => window.scrollTo(0, this.location.current.offsetTop - 78);

    scrollToMyContact = () => window.scrollTo(0, this.contact.current.offsetTop - 78);

    toggleLogin = () => {
        this.setState({ login: !this.state.login });
    }


    render() {
        // const authenticate = new firebase.auth.EmailAuthProvider.credential();
        // firebaseApp.auth().signInWithEmailAndPassword

        // console.log(auth);
        return (
            <BrowserRouter>
                <Switch>
                    <>
                        <Nav scroll={this.state.scroll} mobile={this.state.mobile}
                            scrollToTop={this.scrollToTop}
                            scrollToMyMenu={this.scrollToMyMenu}
                            scrollToMyAbout={this.scrollToMyAbout}
                            scrollToMyLocation={this.scrollToMyLocation}
                            scrollToMyContact={this.scrollToMyContact}
                            toggleLogin={this.toggleLogin}
                            user={this.state.user}
                            scopeCheck={this.scopeCheck}
                        />
                        <Route exact path='/' render={props => {
                            return <App about={this.about} menu={this.menu} location={this.location} contact={this.contact} mobile={this.state.mobile} items={this.state.items} order={this.state.order} addToCart={this.addToCart} deleteFromCart={this.deleteFromCart} />
                        }
                        } />

                        <Route exact path='/inventory' render={props => {
                            return <Inventory items={this.state.items} addItem={this.addItem} updateItem={this.updateItem} deleteItem={this.deleteItem} />
                        }} />
                        <Login
                            userLogin={this.login}
                            toggleLogin={this.toggleLogin}
                            open={this.state.login} />
                        <Footer />
                    </>
                </Switch>
            </BrowserRouter>
        )
    }
}