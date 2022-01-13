import React from 'react';

const VideoItem = ({ video: {snippet} }) => {
  return (
    <div className='video-card'>
      <img src={snippet.thumbnails.medium.url} alt={snippet.description} className='video-image' />
      <h4 className='video-title'>{snippet.title}</h4>
    </div>
  );
}

export default VideoItem;