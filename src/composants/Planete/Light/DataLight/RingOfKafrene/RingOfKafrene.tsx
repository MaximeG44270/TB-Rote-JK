import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from '../../../Header2/Header';
import MissionImagesRok from './MissionImageROK';
import StarRequireRok from './Data ROK/StarRequireRok';
import AttackRokEst from './Data ROK/AttackRokEst';
import AttackRokNord from './Data ROK/AttackRokNord';
import AttackRokSud from './Data ROK/AttackRokSud';
import AttackRokOuest from './Data ROK/AttackRokOuest';
import AttackRokFleet from './Data ROK/AttackRokFleet';
import RokPlatoon from './Data ROK/PlatoonRok';

const RingOfKafrene: React.FC = () => {
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
          src="/Planet-main-mobile/Light/5-Ring-of-Kafrene.webp"
          alt="Rok" 
          className="w-10/12 xl:w-1/2 rounded-lg mt-8 mx-auto"
        />

        {/* ------------------------------------------- Images superposées ------------------------------------------- */}
        <MissionImagesRok />

        <p id="star-require" className="text-center text-7xl mt-8 font-bold font-poppins">Ring of Kafrene</p>
        <div className="p-4">
          <StarRequireRok />
        </div>
        <div className="p-4 md:p-8 lg:p-12 mb-8">
          <AttackRokEst />
          <AttackRokNord />
          <AttackRokOuest />
          <AttackRokSud />
          <AttackRokFleet />
          <RokPlatoon />
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

export default RingOfKafrene;