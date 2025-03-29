import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from '../../../Header2/Header';
import MissionImages from './MissionImages';
import StarRequire from './DataCoruscant/StarRequire';
import AttackCoruscantEst from './DataCoruscant/AttackEst';
import AttackCoruscantNord from './DataCoruscant/AttackNord';

const Coruscant: React.FC = () => {
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
          src="/Planet-main-mobile/Light/1-Coruscant.webp" 
          alt="Coruscant" 
          className="w-full xl:w-1/2 rounded-lg mt-8 mx-auto"
        />

        {/* ------------------------------------------- Images superposées ------------------------------------------- */}
        <MissionImages />

        <p id="star-require" className="text-center text-7xl mt-8 font-bold font-poppins">Coruscant</p>
        <div className="p-4">
          <StarRequire />
        </div>
        <div className="p-4 mb-8">
          <AttackCoruscantEst />
          <AttackCoruscantNord />
        </div>

        {/* ------------------------------------------- Bouton Scroll to Top ------------------------------------------- */}
        {showScrollButton && (
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-6 right-6 border-2 text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-black transition"
            aria-label="Remonter en haut"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Coruscant;