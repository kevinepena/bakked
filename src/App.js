import React, { Component } from 'react';
import Order from './components/Order';
import Menu from './components/Menu';
import Logo from './components/Logo';

class App extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }


    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);



    render() {
        return (
            <div className="app">
                <header className="header">
                    {/* <div className="header">
                    </div> */}
                    <div className="context">
                        <Logo tagline />
                        <h2>Artisan Bakery</h2>
                    </div>
                </header>
                <div className="about">
                    <h2>
                        About Us
                </h2>
                    <div className="wooden-bread">
                        <div className="about-content">
                            <p>Based out of <strong>SMTX</strong>, we specialize in artisan bread and baked goods, crafted by hand in small batches. We use local and organic ingredients because we care about the products we put on your table.</p>
                        </div>
                    </div>
                </div>
                <section className="bakked-order-menu">
                    <Menu items={this.props.items} addToCart={this.props.addToCart} />
                    <Order items={this.props.items} order={this.props.order} deleteFromCart={this.props.deleteFromCart} />
                </section>
            </div>
        )
    }
}

export default App;