import React from 'react';
import Banner from './Banner';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects from={'home'} />
    </div>
  );
};

export default Home;
