//import React from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./Component/searchbar";
import React, { useState, useEffect } from "react";
import VideoList from "./Component/VideoLists";
import VideoDetail from "./Component/VideoDetail";
import useVideos from "./hooks/useVideos";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Master");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList vi={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
