import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="light-blue">
          <div class="nav-wrapper">
            <a href="/" className="brand-logo ml-3">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/login">Sing in</Link>
              </li>
              <li>
                <Link to="/register">Sing up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;