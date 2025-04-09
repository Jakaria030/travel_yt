'use client';
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
    
    const [showNave, setShowNav] = useState(false);

    const handleShowNav = () => setShowNav(true);
    const handleCloseNav = () => setShowNav(false);

    return (
        <div>
            <Nav handleShowNav={handleShowNav} />
            <MobileNav showNave={showNave} handleCloseNav={handleCloseNav} />
        </div>
    );
};

export default ResponsiveNav;