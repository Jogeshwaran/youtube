import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeSideBar } from '../utils/SideBarSlice';

const WatchPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeSideBar());
    },[])

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));

  return (
    <div className='px-10'>
      <iframe width="1000" height="500" 
      src={"https://www.youtube.com/embed/"+searchParams.get('v')+"?autoplay=1"} title="YouTube video player"
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen >
       </iframe>
    </div>
  )
}

export default WatchPage
