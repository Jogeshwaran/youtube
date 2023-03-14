import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSideBar } from '../utils/SideBarSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeSideBar());
    },[])

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));

  return (
    <div className='flex flex-col w-full'>
    <div className='px-10 flex w-full'>
      <div>
      <iframe width="800" height="450" 
      src={"https://www.youtube.com/embed/"+searchParams.get('v')+"?autoplay=1"} title="YouTube video player"
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen >
       </iframe>
       </div>
       <div className='w-full'>
        <LiveChat />
        </div>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage
