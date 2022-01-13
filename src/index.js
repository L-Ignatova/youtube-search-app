import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar, VideoList } from "./components";
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <hr/>
        <VideoList />
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
