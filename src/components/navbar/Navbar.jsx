import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from '../../assets/logo.png'
import './navbar.css';

const Menu = () => (
<>
</>
)
// import { Container } from './styles';

//BEM ---> Block Element Modifier

const Navbar = () => {
  const [altMenu, setAltMenu] = useState(false);


  return (
  <div className='imagineUp__navbar'>
      <div className='imagineUp__navbar-links'>
          <div className='imagineUp__navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='imagineUp__navbar-links_container'>
            <Menu/>
          </div>
      </div>
      <div className='imagineUp__navbar-sign'>
        <button type='button'>Tente agora!</button>
      </div>
      <div className='imagineUp__navbar-menu'>
        {altMenu
        ? <RiCloseLine color='#fff' size={27} onClick={()=> setAltMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={()=> setAltMenu(true)}/>
        }
        {altMenu && (
          <div className='imagineUp__navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu/>
              <div className='imagineUp__navbar-menu_container-links-sign'>
                <button type='button'>Tente agora!</button>
              </div>
            </div>
          </div>
        )}
      </div>
  </div>
  );
}

export default Navbar;