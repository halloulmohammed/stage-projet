import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

export const Header = () => {
  return (
    <div id="header-container">
      <Link to="/">
        <img src="/images/logo.png" alt="logo" id="logo" />
      </Link>
      <ul id="nav-bar">
        <li id="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/article">Articles</Link>
        </li>
        <li>
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
