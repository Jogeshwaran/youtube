import React from 'react'
import logo from '../assets/ytlogo.png'
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Hamburger from '../assets/HamburgerMenu.png'
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/AppSlice';
const Header = () => {
    const dispatch = useDispatch();
    const toggleSidebarHandler = () => {
        dispatch(toggleSideBar());
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
      <img onClick={() => toggleSidebarHandler()} className=' h-6 w-6 mt-4 cursor-pointer' alt='icon' src={Hamburger} />
        <img className=' object-contain w-24 mx-2' alt='youtube-logo' src={logo} />
      </div>
      <div className=' col-span-10 px-10 mt-2'>
        <input type='text' placeholder='search' className='px-5 w-1/2 p-2 border border-gray-400 rounded-l-full' />
        <button className='border border-gray-400 p-2 rounded-r-full '>🔍</button>
      </div>
      <div className='col-span-1 flex justify-between mt-2'>
      `<NotificationsNoneIcon className='h-10 w-10' />
        <Avatar />
        
      </div>
    </div>
  )
}

export default Header;
