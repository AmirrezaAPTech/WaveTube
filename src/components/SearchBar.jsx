import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const SearchBar = ({ inputValue, setInputValue, fetchingData, setVideos, videos }) => {


  const handleKeyDown = () => {
    inputValue !== "" && fetchingData(inputValue, 'search').then((data) => setVideos(data.items))
      setInputValue('');
  };
console.log(videos);
  return (
    <div className='flex justify-center items-center xl:w-[20%] lg:w-[25%] sm:w-[40%] max-[370px]:w-[60%]'>
    <input
      type="text"
      name="searchBar"
      className="rounded-l-xl border border-solid border-[#FFFFFFE0] w-full p-1 text-white pl-3"
      placeholder='Search'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <Link to={"/"}>
    <button onClick={handleKeyDown}><i class="fa-solid fa-magnifying-glass bg-transparent text-2xl text-[#FFFFFFE0] border border-solid rounded-r-xl border-[#FFFFFFE0] px-2 ml-0"></i></button>
    </Link>
    </div>
  );
};

export default SearchBar;
