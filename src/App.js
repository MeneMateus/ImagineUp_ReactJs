import React from 'react';

import { Footer, Blog, Possibility, Features, WhatImagine, Header } from './container';
import { CTA, Brand, Navbar } from './components';
import './App.css';

// import { Container } from './styles';
/*<Brand />
<WhatImagine />
<Possibility />
<CTA />

<Footer />*/

const App = () => {
  return (
  <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
        <Blog />
      </div>
  </div>
  );
}

export default App;