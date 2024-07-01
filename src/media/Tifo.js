import React from 'react';
import {pictures} from '../data/tifo';
import './TifoPictures.css'; // Import your custom CSS file

export const Tifo = () => {
  return (
    <div className="container">
      <h2 className="my-4">Tifo Pictures</h2>
      <div className="card-container">
        {pictures.map(picture => (
          <div key={picture.id} className="card">
            <img src={picture.imageUrl} className="card-img" alt={picture.title} />
            <div className="card-body">
              <h5 className="card-title">{picture.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





