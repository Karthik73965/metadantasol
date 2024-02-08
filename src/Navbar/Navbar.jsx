import React, { useState, useEffect } from 'react';
import { NavSmall } from "./Navsmall/NavSmall"
import { NavBig } from './NavBIg/NavBig';

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Add an event listener to detect screen width changes
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 970);
    };

    // Initial check and set state
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar-main'>

      <div className="small-nav lg:hidden block">
        <NavSmall />
      </div>
      <div className="big-nav hidden lg:block">
        <NavBig />
      </div>
    </div>
  );
};

export default Navbar;
