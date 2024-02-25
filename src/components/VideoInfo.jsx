import {useEffect, useState} from 'react'
import {fetchingData} from '../utils/fetchApi'
import {getTimeAgo} from '../utils/timeAgo'
import {formatNumber} from '../utils/formatNumber'

const VideoInfo = ({video}) => {
  const [channelData, setChannelData ] = useState("")
  const [subscribed, setSubscribed ] = useState(false)
  const [liked, setLiked ] = useState(false)
  useEffect(() => {
    const fetchData = async (video) => {
      if (!video || !video[0] || !video[0]?.snippet?.channelId) {
        console.error('Invalid video data:', video);
        return;
      }

      try {
        const data = await fetchingData(video[0].snippet.channelId, 'channels');
        setChannelData(data.items[0]);
        console.log(channelData);
        console.log(video);
      } catch (error) {
        console.error('Error fetching channel data:', error);
      }
    };


    fetchData(video);
    setLiked(false)
    setSubscribed(false)
  }, [video]);



  function toggleSubscribe() {
    setSubscribed(!subscribed)
  }
  function toggleLiked() {
    setLiked(!liked)
  }

  return (
    <div className='w-full'>
    <div className='pb-3'>
    <p className='text-white lg:text-2xl sm:text-xl max-sm:text-md font-semibold pt-2'>{video[0]?.snippet?.title}</p>
  </div>
  <div className='flex justify-between gap-3 max-sm:flex-col'>
    <div className='flex gap-2'>
    <img src={channelData?.snippet?.thumbnails?.high?.url} alt="channelTitle" width="50" height="50" className='rounded-[70%] sm:w-[50px] sm:h-[50px] max-sm:w-[40px] max-sm:h-[40px] object-cover'/>
    <div>
    <p className='text-[#F1F1F1] font-semibold sm:text-lg max-sm:text-md'>{channelData?.snippet?.title}</p>
    <p className='text-[#AAAAAA] max-sm:text-sm'>{formatNumber(channelData?.statistics?.subscriberCount)} subscribers</p>
    </div>
    </div>
    <div className='flex gap-3 overflow-hidden'>
    <button className={` text-sm  font-semibold xl:px-5 max-xl:px-3 rounded-full flex justify-center items-center ${subscribed ? 'bg-[#3F3F3F] hover:bg-[#5e5e5e] text-white' : 'bg-white hover:bg-slate-50 text-[#3F3F3F]'}`} onClick={() => toggleSubscribe()}>{subscribed ? <><i className="fa-regular fa-bell text-white bg-transparent lg:text-xl xl:pr-3 max-xl:pr-2"></i> Subscribed</> : 'Subscribe'}</button>
    <button className='bg-[#3F3F3F] hover:bg-[#5e5e5e] xl:text-sm lg:text-[12px] max-lg:text-[9px] text-white font-semibold xl:px-5 max-xl:px-3 max-sm:p-5 max-sm:py-3  rounded-full flex justify-center items-center' onClick={() => toggleLiked()}>{liked ? <><i class="fa-solid fa-thumbs-up text-white bg-transparent lg:text-xl xl:pr-3 max-xl:pr-2"></i> {formatNumber(parseInt(video[0]?.statistics?.likeCount) + 1)}</> : <><i class="fa-regular fa-thumbs-up text-white bg-transparent lg:text-xl xl:pr-3 max-xl:pr-2"></i> {formatNumber(video[0]?.statistics?.likeCount)} </>}</button>
    <button className='bg-[#3F3F3F] hover:bg-[#5e5e5e] xl:text-sm lg:text-[12px] max-lg:text-[9px] text-white font-semibold xl:px-5 max-xl:px-3 rounded-full flex justify-center items-center'><i class="fa-regular fa-share-from-square text-white bg-transparent lg:text-xl xl:pr-3 max-xl:pr-2"></i> Share</button>
    <button className='bg-[#3F3F3F] hover:bg-[#5e5e5e] xl:text-sm lg:text-[12px] max-lg:text-[9px] max-[500px]:hidden text-white font-semibold xl:px-5 max-xl:px-3 rounded-full flex justify-center items-center'><i class="fa-solid fa-download text-white bg-transparent lg:text-xl xl:pr-3 max-xl:pr-2"></i> Download</button>
    <button className='bg-[#3F3F3F] hover:bg-[#5e5e5e] xl:text-sm lg:text-[12px] max-lg:text-[9px] max-md:hidden text-white font-semibold xl:px-5 max-xl:px-3 rounded-full flex justify-center items-center'><i class="fa-solid fa-hand-holding-heart text-white bg-transparent lg:text-xl xl:pr-3 max-xl:pr-2"></i> Thanks</button>
    <button className='bg-[#3F3F3F] hover:bg-[#5e5e5e] xl:text-sm lg:text-[12px] max-lg:hidden text-white font-semibold xl:px-5 max-xl:px-3 rounded-full flex justify-center items-center'><i class="fa-solid fa-scissors text-white bg-transparent lg:text-xl xl:pr-3 max-xl:pr-2"></i> Clip</button>
    </div>
  </div>
  <div className=' text-white mt-5 bg-[#3F3F3F]'>
    <div className='flex justify-start items-center gap-5'>
    <p className='flex items-center text-lg font-semibold'>{formatNumber(video[0]?.statistics?.viewCount)} views</p>
    <p className='flex items-center text-lg font-semibold'>{getTimeAgo(video[0]?.snippet?.publishedAt)}</p>
    </div>
    <div className='overflow-hidden text-sm'>
    <p>{video[0]?.snippet?.description}</p>
    </div>
  </div>
  </div>
  )
}

export default VideoInfo