import React from 'react';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import SidebarCard from './SidebarCard';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';


const Body = () => {
    const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen)

    return(
        <div className=' flex'>
      { isSideBarOpen === true ? <SidebarCard /> : <Sidebar />}
        <Outlet />
        </div>
    )
}

export default Body;