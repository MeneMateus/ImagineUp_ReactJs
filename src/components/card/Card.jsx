import React from 'react';
import './card.css';

// import { Container } from './styles';

const Card = ({imgUrl, creator, title}) => {
  return (
  <div className='imagineUp__blog-container_card'>
      <div className='imagineUp__blog-container_card-image'>
        <img src={imgUrl} alt='blog card' />
      </div>
      <div className='imagineUp__blog-container_card-content'>
        <div>
          <p>Criado por: {creator}</p>
          <h3>{title}</h3>
        </div>
        <button>Crie o seu!</button>
      </div>
  </div>
  );
}

export default Card;