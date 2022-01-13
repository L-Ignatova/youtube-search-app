import React from 'react';

const VideoItem = ({ video, video: { snippet }, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-card'>
      <img src={snippet.thumbnails.medium.url} alt={snippet.description} className='video-image' />
      <h4 className='video-title'>{snippet.title}</h4>
    </div>
  );
}

export default VideoItem;