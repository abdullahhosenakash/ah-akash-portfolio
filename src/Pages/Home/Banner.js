import React, { useEffect, useState } from 'react';
import img from '../../assets/akash.png';

const Banner = () => {
  const [textState, setTextState] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTextState(!textState);
    }, 500);
    return () => clearInterval(interval);
  }, [textState]);
  return (
    <div className='min-h-screen'>
      <div className='hero '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={img} alt='' className='lg:max-w-sm rounded-lg shadow-2xl' />
          <div>
            <h3 className='text-xl uppercase text-secondary'>
              Hello, my name is Akash
            </h3>
            <h2 className='lg:text-7xl text-6xl dark:text-white'>
              I make websites.
            </h2>
            <p className='text-3xl mt-4 text-white'>
              I am a MERN stack developer. <br /> I love to code
              {textState && '_'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
