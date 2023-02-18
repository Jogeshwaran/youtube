import React from 'react';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import SidebarCard from './SidebarCard';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';


const Body = () => {
    const isSideBarCardOpen = useSelector((store) => store.app.isSideBarCardOpen)

    return(
        <div className=' flex'>
      { isSideBarCardOpen === true ? <SidebarCard /> : <Sidebar />}
        <Outlet />
        </div>
    )
}

export default Body;