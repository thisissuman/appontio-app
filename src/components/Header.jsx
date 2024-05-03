import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="container">
        <div className="logo"></div>
        <div className="nav-links">
          <a href="#" className="nav-link">Menu</a>
          <a href="#" className="nav-link">Contact Us</a>
          <button className="share-link-btn">
            <span>📩 Share Link</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
