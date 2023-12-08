import React from 'react';
import Sidebar from '../pages/sidebar';
import Trends from '../pages/trends';

function Layout({children}) {
    return (
        <>
            <Sidebar/>
            {children}
            <Trends />

        </>
    );
}

export default Layout;