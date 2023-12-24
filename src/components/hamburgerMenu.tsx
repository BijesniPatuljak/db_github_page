import React from 'react';
import '../assets/stylesheets/hamburger_menu.scss';
import { useDispatch } from 'react-redux';
import { toggleNavigation } from '../store/navigationSlice';

interface HamburgerMenuProps {
  active?: boolean;
}

function HamburgerMenu({active = false}: HamburgerMenuProps) {
  const dispatch = useDispatch();
  return(
    <div className="hamburger-menu" onClick={() => dispatch(toggleNavigation())}>
      <div className="bar"></div>
    </div>
  );
}

export default HamburgerMenu;