import React from 'react';
import TopNavbar from './TopNavbar';
import ButtonNavbar from './ButtonNavbar';

const Header = () => {
  return (
    <div className='sticky top-0 z-50'>
      <TopNavbar></TopNavbar>
      <ButtonNavbar></ButtonNavbar>
    </div>
  );
};

export default Header;