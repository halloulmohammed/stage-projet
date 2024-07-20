import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/header.css";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("/"); // State to keep track of active link
  const location = useLocation(); // Hook to get current location

  // Update active link when location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div id="header-container">
      <div>
        <img src="/images/logo.png" alt="logo" id="logo" />
      </div>
      <ul id="nav-bar">
        <li className={activeLink === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={activeLink === "/product" ? "active" : ""}>
          <Link to="/product">Products</Link>
        </li>
        <li className={activeLink === "/article" ? "active" : ""}>
          <Link to="/article">Articles</Link>
        </li>
        <li className={activeLink === "/media" ? "active" : ""}>
          <Link to="/media">Media</Link>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div id="search-bar">
        <input placeholder="searching for..." />
        <a href="searching">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </div>
    </div>
  );
};
