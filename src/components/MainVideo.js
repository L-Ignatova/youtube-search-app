import React from 'react';

const MainVideo = ({ video }) => {
  return (
    <div className='main-video'>
      <iframe 
        src={`https://www.youtube.com/embed/${video.id.videoId}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      ></iframe>
      <div className='main-video-title'>{video.snippet.title}</div>
      <div className='main-video-description'>{video.snippet.description}</div>
    </div>
  );
}

export default MainVideo;
