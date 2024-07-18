import React, { useState } from 'react';
import { videos } from '../data/vedios'; // Assuming you have a videos data file
import '../style/VideoGallery.css'; // Adjust the CSS file path as per your project

export  const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div className='video-container' key={video.id}>
          <button onClick={() => handleVideoClick(video)}>
            <img src={video.thumbnailUrl} alt={video.title} />
          </button>
          <p>{video.title}</p>
        </div>
      ))}

      {selectedVideo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <video controls className='vedio-size'>
              <source src={selectedVideo.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className='vid-title'>{selectedVideo.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};


