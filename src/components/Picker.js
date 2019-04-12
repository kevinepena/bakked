import React, { Component } from "react";

class Picker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" placeholder="Store Name" />
        <button type="submit">Visit Store ➡</button>
      </form>
    );
  }
}

export default Picker;
