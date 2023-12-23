import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='flex lg:flex-row flex-col justify-center items-center py-5 bg-primary text-secondary'>
      <p>
        <span className='text-lg mr-2'>&copy;</span>
        {year} Abdullah Hosen Akash{' '}
      </p>
      <div className='divider divider-horizontal' />
      All Rights Reserved
    </div>
  );
};

export default Footer;
