import { useState } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = ({ setVideos, videos }) => {
  const [activeTopic, setActiveTopic] = useState(videos || 'Home');
console.log(activeTopic);
  return (
    <div className='flex sm:flex-row max-sm:flex-col'>
      <div className='sm:border-r sm:border-r-gray-200 sm:h-screen overflow-y-hidden hover:overflow-y-auto'>
        <Sidebar 
          activeTopic={activeTopic}
          setActiveTopic={setActiveTopic}
        />
      </div>
      <div className='overflow-y-auto h-screen w-full flex justify-center'>
        <Videos activeTopic={activeTopic} setVideos={setVideos} videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
