import React from 'react'

const VideoCard = ({info}) => {
    //console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,thumbnails,title} = snippet;
     const {viewCount} = statistics;
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
