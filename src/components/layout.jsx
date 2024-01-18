import React from 'react';
import Sidebar from '../pages/sidebar';
import Trends from '../pages/trends';
import { Outlet } from 'react-router-dom';



function Layout({children}) {
    return (
        <>
            <Sidebar/>
              <Outlet />
            <Trends />

        </>
    );
}

export default Layout;