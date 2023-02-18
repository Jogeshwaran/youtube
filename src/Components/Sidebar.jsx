import React from 'react';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    //Early Return
    
   return (
        <div className='flex flex-col p-5 m-2'>
           <Link to="/"> <HomeSharpIcon  className=' mb-5' /></Link>
            <SubscriptionsSharpIcon className='mb-5'/>
            <SmartDisplayOutlinedIcon className='mb-5' />
            <VideoLibraryOutlinedIcon className='mb-5'/>
        </div>
    )
}

export default Sidebar;