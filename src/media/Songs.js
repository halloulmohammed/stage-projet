import React, { useState } from 'react';
import { songs } from '../data/songs'; // Assuming you have a songs data file
import '../style/VideoGallery.css'; // Adjust the CSS file path as per your project

export const Songs = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  const handleCloseModal = () => {
    setSelectedSong(null);
  };

  return (
    <div className="video-gallery">
      {songs.map((song) => (
        <div className='video-container' key={song.id}>
          <button onClick={() => handleSongClick(song)}>
            <img src={song.thumbnailUrl} alt={song.title} />
          </button>
          <p>{song.title}</p>
        </div>
      ))}

      {selectedSong && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <div className='lyrics'>
              <h3>{selectedSong.title}</h3>
              <p>{selectedSong.lyrics}</p>
            </div>
            <div className='audio-player'>
              <audio controls>
                <source src={selectedSong.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


