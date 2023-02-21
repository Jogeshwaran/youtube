import React from 'react'
import { useDispatch } from 'react-redux';
import { addTags } from '../utils/TagSlice';

const VideoCard = ({info}) => {
    //console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,thumbnails,title,tags} = snippet;
     const {viewCount} = statistics;
      console.log(tags);
     const dispatch = useDispatch();
     dispatch(addTags(tags))

  return (
    <div className='p-2 m-2 w-64 '>
       
     <img className='rounded-lg' src= {thumbnails.medium.url} alt="video" />
        <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
         <li>{viewCount} views</li> 
        </ul> 
    </div>
  )
}

export default VideoCard
