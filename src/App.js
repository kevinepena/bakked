import React, { Component } from 'react';
import Order from './components/Order';
import Menu from './components/Menu';
import Logo from './components/Logo';
import Contact from './components/Contact';

class App extends Component {

    render() {

        return (
            <div className="app">
                <header className="header">
                    <div className="context">
                        <Logo tagline />
                        <h2>Artisan Bakery</h2>
                    </div>
                </header>
                <div className="about" ref={this.props.about}>
                    <h2>
                        About Us
                </h2>
                    <div className="wooden-bread">
                        <div className="about-content">
                            <p>Based out of <strong>SMTX</strong>, we specialize in artisan bread and baked goods, crafted by hand in small batches. We use local and organic ingredients because we care about the products we put on your table.</p>
                        </div>
                    </div>
                </div>
                <section className="bakked-order-menu" ref={this.props.menu}>
                    <Menu items={this.props.items} addToCart={this.props.addToCart} />
                    <Order items={this.props.items} order={this.props.order} deleteFromCart={this.props.deleteFromCart} />
                </section>
                <div className="map" ref={this.props.location}>
                    <h2>Location</h2>
                    <img src={`//maps.googleapis.com/maps/api/staticmap?center=San+Marcos,TX&zoom=13&scale=${this.props.mobile ? '1' : '2'}&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:🍞%7C29.882316, -97.940706&key=AIzaSyBic1yuPFoOLcXnyk0FRM4zPnsbxT4Yz0M`} alt="Google Maps" />
                    <br />
                    <h2>Hours</h2>
                    <p>Monday-Friday 6:30 am to 2:00 pm</p>
                    <p>Saturday-Sunday 7:30 am to 2:00 pm</p>

                </div>
                <Contact contactref={this.props.contact} />
            </div>
        )
    }
}

export default App;