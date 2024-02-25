import { useState } from 'react'
import { Link } from 'react-router-dom'
import WaveTubeLogo from '../Img/WaveTube.png'
import SearchBar from './SearchBar'
import { fetchingData } from '../utils/fetchApi'


const Navbar = ({setVideos, videos}) => {
  const [inputValue, setInputValue] = useState("")

  return (
    <nav className='flex justify-between items-center px-4 pt-2 sticky top-0 overflow-x-hidden' >
      <div className='2xl:w-[8%] xl:w-[10%] lg:w-[12%] md:w-[15%] w-[22%]'>
      <Link to="http://localhost:5173/">
        <img src={WaveTubeLogo} alt="logo" width="100%"/>
      </Link>
      </div>
        <SearchBar 
        inputValue={inputValue}
        setInputValue={setInputValue}
        fetchingData={fetchingData}
        setVideos={setVideos}
        videos={videos}
        /> 
    </nav>
  )
}

export default Navbar