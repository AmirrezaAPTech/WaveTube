import {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom"
import {fetchingData} from "../utils/fetchApi"
import ReactPlayer from "react-player"
import VideoInfo from './VideoInfo'
import RelatedVideos from './relatedVideos'
import Comments from './Comments'


const VideoDetail = () => {
  const { id } = useParams()
  const [videos, setVideos] = useState("")
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await fetchingData(id, 'videos');
        if (data && data.items && data.items.length > 0) {
          setVideos(data.items);
          console.log(videos);
        } else {
          console.error("No videos found in the response data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchApi();
  }, [id]);
  
  return (
    
    <div className='flex flex-col justify-between items-start 2xl:flex-row bg-[#0F0F0F] max-w-[100vw] overflow-x-hidden min-h-screen md:px-8 max-md:px-2 max-[370px]:px-1 max-md:my-4'>
      <div className='w-full h-full'>
  { 
    videos &&
    <div className=' w-full max-w-[1280px] max-h-[720px] h-[43vw] rounded-2xl overflow-hidden mx-auto'>
     <ReactPlayer 
    url={`https://www.youtube.com/watch?v=${id}`}
    width="100%"
    height="100%"
    className='react-player'
    controls
    ></ReactPlayer></div>
  }
  <div className='w-[100%] max-w-[1280px] mx-auto'>

      {videos && <VideoInfo video={videos} />}
      {videos && <Comments video={videos} />}
  </div>
      </div>
  <div className='flex 2xl:flex-col justify-start items-center 2xl:w-[30%] max-2xl:mt-10 max-2xl:w-full'>
  {videos &&  <RelatedVideos videos={videos}/> }
  </div>
  </div>
  )
}

export default VideoDetail