import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {

  }
    render() {
      return (
        <div className="navbar">
          <h2>NFTium</h2>
          <ul>
            <li>Collection</li>
            <li>Prices</li>
            <li>Support</li>
          </ul>
        </div>
      );
    }
}

export default Navbar;
