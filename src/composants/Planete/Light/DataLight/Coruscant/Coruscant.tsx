import React from 'react';
import Header from '../../../Header2/Header';
import MissionImages from './MissionImages';
import StarRequire from './DataCoruscant/StarRequire';

const Coruscant: React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="relative flex flex-col min-h-screen bg-gray-900 text-white">
        {/* ------------------------------------------- Image principale ------------------------------------------- */}
        <img 
          src="/Planet-main-mobile/Light/1-Coruscant.webp" 
          alt="Coruscant" 
          className="w-full xl:w-1/2 rounded-lg mt-8 mx-auto"
        />

        {/* ------------------------------------------- Images superposées ------------------------------------------- */}
        <MissionImages />

        <p className='text-center text-7xl mt-8 font-bold font-poppins'>Bracca</p>
        <div className='p-4'>
          <StarRequire />
        </div>
      </div>
    </div>
  );
};

export default Coruscant;
