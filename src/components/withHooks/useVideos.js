import { useState, useEffect } from "react";
import youtubeAPI from "../../apis/youtube";

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm])

  const search = async term => {
    const { items: videoItems } = await youtubeAPI.get("/search", {
      params: {
        q: term,
      }
    }).then(response => {
      return response.data;
    });

    setVideos(videoItems);
  };
  
  return [videos, search];
};

export default useVideos;