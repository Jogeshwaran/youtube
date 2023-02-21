import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSideBar } from '../utils/SideBarSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeSideBar());
    },[])

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));

  return (
    <div className='flex flex-col'>
    <div className='px-10'>
      <iframe width="585" height="315" 
      src={"https://www.youtube.com/embed/"+searchParams.get('v')+"?autoplay=1"} title="YouTube video player"
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen >
       </iframe>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage
