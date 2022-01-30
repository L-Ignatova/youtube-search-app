import React, { useEffect, useState } from 'react';
import { VideoList, MainVideo } from "../index";

import SearchBar from './SearchBar';
import useVideos from './useVideos';

import './index.css';

const defaultQuery = "surfing";

const App = () => {
  const [videos, search] = useVideos(defaultQuery);
  const [mainVideo, setMain] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    // search(defaultQuery);
  }, [defaultQuery])

  useEffect(() => {
    setMain(videos[0]);
  }, [videos]);

  useEffect(() => {
    setList(videos.slice(1, 5));
  }, [videos]);

  const setMainVideo = (video) => {
    setMain(video);
    setList(videos.filter(v => v.id.videoId !== video.id.videoId))
  };
  
  return (
    <div>
      <SearchBar onFormSubmit={search} defaultQuery={defaultQuery} />
      <hr />
      {videos.length > 0 && mainVideo
        ? <div className='screen'>
            <MainVideo video={mainVideo} />
            <VideoList onVideoSelect={setMainVideo} videos={list} />
          </div>
        : <div>Results are loading ...</div>}
    </div>
  );
};

