import React from 'react';
import { VideoItem, MainVideo } from '.';

const VideoList = ({ videos, mainVideo, onVideoSelect }) => {
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
    <div className='screen'>
      <MainVideo video={mainVideo} />
      <div className='video-list'>
        {videoMap}
      </div>
    </div>
  );
}

export default VideoList;