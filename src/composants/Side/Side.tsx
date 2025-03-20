import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveCarousel from './Carousel/ResponsiveCarousel';
import Carousel from './Carousel/Carousel';

const Side: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen text-center">
      {/* ------------------------------------------- Bouton de redirection ------------------------------------------- */}
      <Link to="/" className="absolute z-50 top-5 left-5 p-3 text-white rounded-xl border-white border-2">
        Accueil
      </Link>

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