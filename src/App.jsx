import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';

const App = () => {
  const [videos, setVideos] = useState([]);

  return (
    <BrowserRouter>
      <Navbar videos={videos} setVideos={setVideos} />
      <Routes>
        <Route path="/" exact element={<Feed setVideos={setVideos} videos={videos} />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
