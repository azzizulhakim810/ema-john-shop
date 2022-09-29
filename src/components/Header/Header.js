import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='header'>

        <div className='logo'>
          <a href="#">
          <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="menus">
          <a href="#">Shop</a>
          <a href="#">Orders</a>
          <a href="#">Inventory</a>
          <a href="#">About</a>
        </div>

      </nav>
    </div>
  );
};

export default Header;
