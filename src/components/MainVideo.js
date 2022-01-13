import React from 'react';

const MainVideo = ({ video }) => {
  return (
      <iframe 
        src={`https://www.youtube.com/embed/${video.id.videoId}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      ></iframe>
  );
}

export default MainVideo;
