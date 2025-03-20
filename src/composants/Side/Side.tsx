import React from 'react';
import ResponsiveCarousel from './Carousel/ResponsiveCarousel';
import Carousel from './Carousel/Carousel';

const Side: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen text-center">
        <div className='block xl:hidden'>
          <Carousel />
        </div>
        <div className='hidden xl:block'>
          <ResponsiveCarousel />
        </div>
      </div>
  );
};

export default Side;
