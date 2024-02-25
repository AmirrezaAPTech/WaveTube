import {useEffect, useState} from 'react'
import {fetchingData} from '../utils/fetchApi'
import VideoCard from './VideoCard'

const RelatedVideos = ({videos}) => {
  const [relatedVideos, setRelatedVideos] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
    const data = await fetchingData(videos[0]?.id, 'related')
    setRelatedVideos(data.items)
    console.log(relatedVideos)}

    fetchApi()
  }, [videos])
  
  return (
<div className='max-2xl:grid max-2xl:mx-auto max-[840px]:grid-cols-1 min-[1100px]:grid-cols-3 min-[840px]:grid-cols-2 max-2xl:gap-6'>
{ relatedVideos && relatedVideos.length > 0 ?
  relatedVideos.map(video => 
  (<VideoCard title={video.snippet.title} thumbnail={video.snippet.thumbnails?.high?.url} channel={video.snippet.channelTitle} videoId={video.id.videoId} />)
  ): ""
}
</div>
  )
}

export default RelatedVideos