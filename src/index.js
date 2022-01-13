import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar, VideoList } from "./components";
import youtubeAPI from './apis/youtube';
import './index.css';

class App extends React.Component {
  state = { videos: [], mainVideo: {}, videoList: [], defaultQuery: "surfing" };

  componentDidMount() {
    this.onTermSubmit(this.state.defaultQuery);
  }

  onVideoSelect = video => {
    this.setState({
      mainVideo: video,
      videoList: this.state.videos.filter(vid => vid.id.videoId !== video.id.videoId),
    });
  };

  onTermSubmit = query => {
    youtubeAPI.get("/search", {
      params: {
        q: query,
      }
    }).then(response => {
      this.setState({
        videos: response.data.items,
        mainVideo: { ...response.data.items[0] },
        videoList: response.data.items.slice(1, 5),
      })
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} defaultQuery={this.state.defaultQuery} />
        <hr />
        {this.state.videos.length > 0
          ? <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videoList} mainVideo={this.state.mainVideo} />
          : <div>Results are loading ...</div>}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
