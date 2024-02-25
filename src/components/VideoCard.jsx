import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({title, thumbnail, channel, videoId }) => {
  return (
    <div className='min-[840px]:w-[310.98px] min-[840px]:h-[350px] max-[840px]:w-[422px] max-sm:w-[90%] max-sm:mx-auto'>
      <Link to={videoId ? `/video/${videoId}` : ""}>
    <img src={thumbnail} alt={title} className='w-[100%] min-[840px]:h-[174.92px] max-[840px]:h-[237px] max-sm:h-[65%] max-[565px]:h-[58%] md:rounded-2xl object-cover max-md:rounded-xl'/>
    <div className='p-2'>
    <p className='text-[#F1F1F1] text-md font-bold'>{title}</p>
    <p className='text-[#AAAAAA]'>{channel} <i class="fa-solid fa-circle-check text-xs"></i></p>
    </div>
    </Link>
    </div>
  )
}

export default VideoCard