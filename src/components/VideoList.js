import React from 'react';
import { VideoItem } from '.';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoMap = videos.map(video => {
    return (
      <VideoItem 
        onVideoSelect={(video) => onVideoSelect(video)} 
        key={video.id.videoId} 
        video={video}
      />
    );
  })
  
  return (
      <div className='video-list'>
        {videoMap}
      </div>
  );
}

export default VideoList;