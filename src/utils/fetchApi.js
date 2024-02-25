import axios from "axios";
export const fetchingData = async (activeTopic, type, order) => {
  let url;
  let params = {};

  if (type === 'search') {
    url = 'https://youtube-v31.p.rapidapi.com/search';
    params = {
      q: activeTopic === "Home" ? "" : activeTopic,
      part: 'id,snippet',
      maxResults: '50'
    };
  } else if (type === 'videos') {
    url = 'https://youtube-v31.p.rapidapi.com/videos';
    params = {
      part: 'contentDetails,snippet,statistics',
      id: activeTopic
    }
  } else if (type === 'channels') {
    url = 'https://youtube-v31.p.rapidapi.com/channels';
    params = {
      part: 'snippet,statistics',
      id: activeTopic
    }
  }else if (type === 'related') {
    url= 'https://youtube-v31.p.rapidapi.com/search',
    params = {
      relatedToVideoId: activeTopic,
      part: 'snippet',
      type: 'video',
      maxResults: '50'
    }
  }else if (type === 'comment') {
    url= 'https://youtube-v31.p.rapidapi.com/commentThreads',
    params = {
      part: 'snippet',
      videoId: activeTopic,
      maxResults: '100'
    }
  }else if (type === 'channelVideos') {
    url= 'https://youtube-v31.p.rapidapi.com/search'
    params= {
      channelId: activeTopic,
      part: 'snippet,id',
      order: order,
      maxResults: '50'
    }
  }else {
    throw new Error('Invalid type specified');}

  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Key': '6605e7639emsh68fc06f3883887fp1a67e1jsn4c33e4e17d63',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
