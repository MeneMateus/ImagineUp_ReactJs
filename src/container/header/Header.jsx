import React from 'react';
import './header.css';
import ai from '../../assets/boneco.png';
import { FiHeart } from "react-icons/fi";
import Typical from 'react-typical';


// import { Container } from './styles';

const Header = () => {
  return (
    <>
  <div className='imagineUp__header section__padding'>
      <div className='imagineUp__header-content'>
        <h1 className='gradient_text'>Ferramenta de impusionamento para o seu <Typical
        steps={['Facebook', 1000, 'Instagram', 1000, 'Twitter', 1000, 'Linkedin', 1000]}
        loop={Infinity}
        wrapper="h1"
      /></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div className='imagineUp__header-content__input'>
        <button type="button">Vamos tentar <FiHeart /></button>
        </div>
      </div>
      <div className='imagineUp__header-image pulsate-bck'>
          <img src={ai} alt='moça segurando notebook'/>
      </div>
  </div>
  <div className='imagineUp__spacer layer1'>
  </div>
  </>
  );
}

export default Header;