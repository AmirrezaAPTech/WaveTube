import {useState} from 'react'
import {formatNumber} from '../utils/formatNumber';
const ChannelHeader = ({channelDetail}) => {
    const [subscribed, setSubscribed ] = useState(false)

    function toggleSubscribe() {
        setSubscribed(!subscribed)
      }
  return (
    <div className='max-w-[1285px] w-[90%] flex flex-col justify-center items-center mt-6'>

    {channelDetail?.items?.[0]?.brandingSettings?.image?.bannerExternalUrl && (
      <img
        src={channelDetail.items[0].brandingSettings.image.bannerExternalUrl}
        alt="channelBanner"
        className='w-full max-h-[207px] h-[30vw] object-cover rounded-2xl'
      />
    )}

    {channelDetail.items && channelDetail.items[0].snippet.thumbnails.high.url && (
  <div className='max-w-[1285px] w-[100%] flex mt-11'>
      <img
        src={channelDetail.items[0].snippet.thumbnails.high.url}
        alt="channelProfile"
        className='xl:w-[160px] lg:w-[140px] md:w-[120px] max-md:w-[100px] max-sm:w-[80px] xl:h-[160px] lg:h-[140px] md:h-[120px] max-md:h-[100px] max-sm:h-[80px] rounded-full mt-4 mr-6'
      />
    
    <div className="flex flex-col gap-3">
      <p className='lg:text-4xl sm:text-3xl max-sm:text-2xl font-bold text-white'>{channelDetail.items[0].snippet.title}</p>
      <div className='flex max-sm:text-[10px] max-[350px]:text-[9px]'>
        <p className='text-[#AAAAAA]'>{channelDetail.items[0].snippet.customUrl} .</p>
        <p className='text-[#AAAAAA] pl-1'>{formatNumber(channelDetail.items[0].statistics.subscriberCount)} subscribers .</p>
        <p className='text-[#AAAAAA] pl-1'>{formatNumber(channelDetail.items[0].statistics.videoCount)} videos</p>
      </div>
      <p className='text-[#AAAAAA] max-[350px]:text-[16px]'>More about this channel</p>
      <button className={` text-sm xl:w-[170px] md:w-[140px] max-md:w-[120px] py-2 font-semibold rounded-full flex justify-center items-center ${subscribed ? 'bg-[#3F3F3F] text-white' : 'bg-white text-[#3F3F3F]'}`} onClick={() => toggleSubscribe()}>{subscribed ? <><i className="fa-regular fa-bell text-white bg-transparent text-xl pr-3"></i> Subscribed</> : 'Subscribe'}</button>
    </div>
  </div>
)}
<div className='max-w-[1285px] w-[100%] h-[1px] bg-[#3F3F3F] xl:mt-12 sm:mt-8 max-sm:mt-3 '></div>
</div>
  )
}

export default ChannelHeader