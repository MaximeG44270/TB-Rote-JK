import React from 'react';
import Header from '../../../Header2/Header';
import MissionImages from './MissionImages';
import StarRequire from './DataCoruscant/StarRequire';
import AttackCoruscantEst from './DataCoruscant/AttackEst';

const Coruscant: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-full">
      <Header />
      <div className="relative flex flex-col bg-gray-900 max-w-full overflow-hidden text-white">
        {/* ------------------------------------------- Image principale ------------------------------------------- */}
        <img 
          src="/Planet-main-mobile/Light/1-Coruscant.webp" 
          alt="Coruscant" 
          className="w-full xl:w-1/2 rounded-lg mt-8 mx-auto"
        />

        {/* ------------------------------------------- Images superposées ------------------------------------------- */}
        <MissionImages />

        <p id="star-require" className='text-center text-7xl mt-8 font-bold font-poppins'>Coruscant</p>
        <div className='p-4'>
          <StarRequire />
        </div>
        <div className='p-4 mb-8'>
          <AttackCoruscantEst />
        </div>
      </div>
    </div>
  );
};

export default Coruscant;
