import React from 'react';
import { ReactComponent as ShopIcon } from '../img/shop-svgrepo-com.svg';

const Header = () => {
  return (
    <header>
      <div className="presentation">
        <ShopIcon className="shop-icon" /> 
        <h1>Technoshop</h1> 
      </div>
    </header>
  );
};

export default Header;
