import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar, VideoList } from "./components";
import youtubeAPI from './apis/youtube';
import './index.css';

class App extends React.Component {
  state = { videos: [] };
  
  onTermSubmit = query => {
    youtubeAPI.get("/search", {
      params: {
        q: query,
      }
    }).then(response => this.setState({ videos: response.data.items }));
  };

  onVideoResults = () => {
    return this.state.videos.length > 0;
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <hr/>
        {this.onVideoResults() && <VideoList videos={this.state.videos}/>}
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
