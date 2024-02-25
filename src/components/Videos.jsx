import React, { useState, useEffect } from 'react';
import { fetchingData } from '../utils/fetchApi'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Feed = ({activeTopic,setVideos, videos}) => {

  useEffect(() => {
    fetchingData(activeTopic, 'search')
    .then((data) => setVideos(data.items))
    console.log(videos);
  }, [activeTopic]);
  return (
    <div className='grid min-[2220px]:grid-cols-6 min-[1870px]:grid-cols-5 min-[1530px]:grid-cols-4 min-[1180px]:grid-cols-3 min-[840px]:grid-cols-2 grid-cols-1 gap-6'>
        {videos && videos.map(item => (
        item.id.kind === "youtube#channel" ? (
          <ChannelCard title={item.snippet.title} thumbnail={item.snippet.thumbnails?.high?.url} channel={item.snippet.channelTitle} channelId={item.id.channelId} />
        ) : (
          <VideoCard title={item.snippet.title} thumbnail={item.snippet.thumbnails?.high?.url} channel={item.snippet.channelTitle} videoId={item.id.videoId} />
        )
        ))}
    </div>
  );
};

export default Feed;
