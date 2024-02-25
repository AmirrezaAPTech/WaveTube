import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({title, thumbnail, channelId}) => {
  console.log(channelId);
  return (
    <Link to={`/channel/${channelId}`}>
    <div className='md:w-[310.98px] md:h-[350px] flex flex-col justify-start items-center'>
    <img src={thumbnail} alt={title} className='w-[180px] h-[180px] object-cover rounded-full'/>
    <p className='text-[#F1F1F1] text-md font-bold  p-6'>{title} <i class="fa-solid fa-circle-check text-xs"></i></p>
    </div></Link>
  )
}

export default ChannelCard