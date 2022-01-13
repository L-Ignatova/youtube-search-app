import React from 'react';
import { VideoItem } from '.';

const VideoList = ({ videos }) => {
  const videoMap = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video}/>
  })

  return (
    <div>
      {videoMap}
    </div>
  );
}

export default VideoList;