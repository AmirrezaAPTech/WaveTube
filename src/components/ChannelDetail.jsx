import React, { useEffect, useState } from 'react';
import { orderList } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { fetchingData } from '../utils/fetchApi';
import ChannelHeader from './ChannelHeader';
import VideoCard from './VideoCard'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState([]);
  const [videosDetail, setVideosDetail] = useState([]);
  const [order, setOrder] = useState('date');
  console.log(id);

  useEffect(() => {
    const fetchApi = async () => {
      const channelData = await fetchingData(id, 'channels');
      setChannelDetail(channelData);
      const VideosData = await fetchingData(id, 'channelVideos', order);
      setVideosDetail(VideosData);
      console.log(VideosData);
    };
    fetchApi();
  }, [id, order]);

  return (
   <div className='w-full flex flex-col justify-center items-center'>
   <ChannelHeader channelDetail={channelDetail}/>
   <div className='max-w-[1285px] w-[90%] flex flex-col justify-center items-start mt-4'>
    <div className="flex gap-2 mb-5">
      {orderList.map(item => (
        <button className={item.value === order ? 'bg-[#F1F1F1] px-2 py-1 text-[#272727] font-semibold rounded-md' :'bg-[#272727] px-2 py-1 text-white font-semibold rounded-md'} onClick={() => setOrder(item.value)}>{item.name}</button>
      ))}
    </div>
   <p className='text-2xl text-white font-semibold'>Videos</p>
   <div className='grid min-[1870px]:grid-cols-4 min-[1430px]:gap-6 min-[1430px]:grid-cols-4 min-[1080px]:grid-cols-3 min-[840px]:grid-cols-2 grid-cols-1 justify-between mt-3 w-full'>
   {videosDetail && videosDetail.items?.length > 0 && videosDetail.items.map(item => (
    <VideoCard title={item.snippet.title} thumbnail={item.snippet.thumbnails?.high?.url} channel={item.snippet.channelTitle} videoId={item.id.videoId} />))}
   </div>
   </div>
   </div>
  );
};

export default ChannelDetail;
