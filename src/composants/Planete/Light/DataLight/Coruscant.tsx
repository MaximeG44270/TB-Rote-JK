import React from 'react';
import Header from '../../Header2/Header';

const Coruscant: React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="relative flex flex-col min-h-screen bg-gray-900 text-white">
        {/* ------------------------------------------- Image principale ------------------------------------------- */}
        <img 
          src="/Planet-main-mobile/Light/1-Coruscant.webp" 
          alt="Coruscant" 
          className="w-full xl:w-1/2 max-w-lgrounded-lg mt-8 mx-auto"
        />

        {/* ------------------------------------------- Image superposée (Fleet) ------------------------------------------- */}
        <img 
          src="/public/picto/mission_fleet.png" 
          alt="Superposée" 
          className="absolute top-12 left-12 md:top-20 md:left-20 lg:top-28 lg:left-28 xl:top-20 xl:left-96 2xl:left-[31rem] w-1/12 xl:w-[3rem] 3xl:w-[4rem] 3xl:left-[38rem] object-contain pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Coruscant;
