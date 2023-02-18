import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GET_YOUTUBE_VIDEOS } from '../utils/Constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  useEffect(() => {
   
    const getVideos = async() => {
      const data = await fetch(GET_YOUTUBE_VIDEOS);
      const json = await data.json()
      console.log(json.items);
      setVideos(json.items)
    }
    getVideos();
  },[])


  return (
    <div className='flex flex-wrap'>
      {videos.map((video) =>(
       <Link to={"/watch?v="+video.id}> <VideoCard key={video.id} info = {video} /></Link>
      )
)}
      
    </div>
  )
}

export default VideoContainer
