import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from '../../../Header2/Header';
import MissionImagesZeffo from './MissionImageZeffo';
import StarRequireZeffo from './Data Zeffo/StarRequireZeffo';
import AttackZeffoFleet from './Data Zeffo/AttackZeffoFleet';
import AttackZeffoNord from './Data Zeffo/AttackZeffonord';
import AttackZeffoCentre from './Data Zeffo/AttackZeffoCentre';
import AttackZeffoSud from './Data Zeffo/AttackZeffoSud';
import AttackZeffoMission from './Data Zeffo/AttackZeffoMission';
import ZeffoPlatoon from './Data Zeffo/ZeffoPlatoon';

const Scarif: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden max-w-full">
      <Header />
      <div className="relative flex flex-col bg-gray-900 max-w-full overflow-hidden text-white">
        {/* ------------------------------------------- Image principale ------------------------------------------- */}
        <img 
          src="/public/Planet-main-mobile/Light/Bonus-Zeffo.webp"
          alt="Zeffo" 
          className="w-10/12 xl:w-1/2 rounded-lg mt-8 mx-auto"
        />

        {/* ------------------------------------------- Images superposées ------------------------------------------- */}
        <MissionImagesZeffo />

        <p id="star-require" className="text-center text-7xl mt-8 font-bold font-poppins">Zeffo</p>
        <div className="p-4">
          <StarRequireZeffo />
        </div>
        <div className="p-4 md:p-8 lg:p-12 mb-8">
          <AttackZeffoNord />
          <AttackZeffoCentre />
          <AttackZeffoSud />
          <AttackZeffoMission />
          <AttackZeffoFleet />
          <ZeffoPlatoon />
        </div>

        {/* ------------------------------------------- Bouton Scroll to Top ------------------------------------------- */}
        {showScrollButton && (
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-6 right-6 border-2 md:border-4 xl:border-3 text-white p-3 md:p-4 lg:p-5 rounded-full shadow-lg hover:bg-white hover:text-black transition md:bottom-8 md:right-8 md:text-xl"
            aria-label="Remonter en haut"
          >
            <ArrowUp className="w-6 h-6 md:w-8 md:h-8 lg:h-11 lg:w-11 xl:w-7 xl:h-7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Scarif;