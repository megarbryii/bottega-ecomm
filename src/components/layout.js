import React from 'react';

import Header from './headernav/header';
import Navbar from './headernav/navbar';

const Layout = (props) => {
    return (
        <div className='layout'>
            {props.children}
            <Header />
            <Navbar />
        </div>
    )
}

export default Layout;