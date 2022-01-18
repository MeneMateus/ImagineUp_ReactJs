import React, { useEffect } from 'react';
import './blog.css';
import { Card } from '../../components'
import cardImg from '../../assets/card.png'
import choosing from '../../assets/guyChoosing.png'
import Aos from 'aos';
import "aos/dist/aos.css"

// import { Container } from './styles';

const Blog = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [])

  return (
  <div className='imagineUp__blog section__padding' id='blog'>
      <div className='imagineUp__blog-heading'>
        <h1 className="gradient__text">Simplifique! <br /> Escolha um banner.</h1>
      </div>
      <div className='imagineUp__blog-container'>
        <div className='imagineUp__blog-container_groupA'>
          <img data-aos="fade-up" src={choosing}/>
        </div>
      <div data-aos="fade-up" className="imagineUp__blog-container_groupB">
        <Card imgUrl={cardImg} data-aos="fade-up" creator="Sep 26, 2021" title="Forest Theme" />
        <Card imgUrl={cardImg} data-aos="fade-up" creator="Sep 26, 2021" title="Modern Skies" />
        <Card imgUrl={cardImg} data-aos="fade-up" creator="Sep 26, 2021" title="Party Fiesta" />
        <Card imgUrl={cardImg} data-aos="fade-up" creator="Sep 26, 2021" title="Futebol Propaganda" />
      </div>
      </div>
  </div>
  );
}

export default Blog;