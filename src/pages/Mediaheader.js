import React from "react";
import { Link } from "react-router-dom";
import "../style/mediaheader.css";
import { Tifo } from "../media/Tifo";

export const Mediaheader = () => {
  return (
    <div>
      <div id="media-header">
      <div id="headerbg">
        <ul>
          <li>
            <Link to="/media/tifo">Tifo</Link>
          </li>
          <li>
            <Link to="/article">Songs</Link>
          </li>
          <li>
            <Link to="/article">Vedios</Link>
          </li>
        </ul>
      </div>
      </div>
      <Tifo />
    </div>
    
  );
};
