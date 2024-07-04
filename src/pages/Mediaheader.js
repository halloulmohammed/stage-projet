import React from "react";
import "../style/mediaheader.css";
import { Tifo } from "../media/Tifo";
import { VideoPlayer } from "../media/VideoPlayer";
import { Songs } from "../media/Songs";
export const Mediaheader = () => {
  return (
    <div>
      <div id="media-header">
          <ul>
            <li>
              <a href="#tifo">Tifo</a>
            </li>
            <li>
              <a href="#video">Vedios</a>
            </li>
            <li>
              <a href="#song">Songs</a>
            </li>
          </ul>
      </div>
      <div className="container-medias" id="tifo" >
        <h2>Tifo Pictures</h2>
        <Tifo />
      </div>
      <div className="container-medias" id="video">
        <h2>Vedios</h2>
        <VideoPlayer />
      </div>
      <div className="container-medias" id="song" >
        <h2>Songs</h2>
        <Songs />
      </div>

    </div>
    
  );
};
