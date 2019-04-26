import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <div className="top" onClick={this.props.scrollToTop}>
                <Link to="/">
                    <h1>Bakked</h1>
                    <h3 className={`tagline ${this.props.tagline ? '' : 'none'}`}>
                        <span>Fresh Daily</span>
                    </h3>
                </Link>
            </div>
        )
    }
}
