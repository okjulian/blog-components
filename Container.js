import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "purecss/build/pure.css";
import "purecss/build/grids-responsive.css";
import "@fortawesome/fontawesome/styles.css";

import "./medius.css";
import "./index.css";

const Square = props => (
  <svg viewBox="0 0 100 100" {...props}>
    <rect x="0" y="0" width="100" height="100" fill="#333" />
  </svg>
);

const Container = ({ children, user }) => (
  <Router>
    <div className="writer main-container">
      <div className="pure-g">
        <div className="pure-u-1">
          <nav className="nav">
            <Link to="/">
              <Square style={{ width: 30 }} />
            </Link>
            <div>
              <Link to="/posts">
                <button className="pure-button" disabled={!user}>
                  Posts
                </button>
              </Link>
              <Link to="/new-post">
                <button className="pure-button button-success" disabled={!user}>
                  Write
                </button>
              </Link>
            </div>
          </nav>
          {children}
        </div>
      </div>
    </div>
  </Router>
);

export default Container;
