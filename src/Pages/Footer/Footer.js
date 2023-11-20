import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='flex justify-center items-center py-8 bg-primary text-secondary'>
      <span className='text-2xl mr-2'>&copy;</span> Abdullah Hosen Akash {year}
      <div className='divider divider-horizontal' />
      All Rights Reserved
    </div>
  );
};

export default Footer;
