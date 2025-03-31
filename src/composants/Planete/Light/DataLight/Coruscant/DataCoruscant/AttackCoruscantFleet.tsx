import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AttackCoruscantFleetTeam1 from './SelectionTeam/TeamFleet/AttackCoruscantFleetTeam1';
import AttackCoruscantFleetTeam2 from './SelectionTeam/TeamFleet/AttackCoruscantFleetTeam2';
import DefenseCoruscantFleetTeam1 from './SelectionTeam/TeamFleet/DefenseCoruscantFleet';

const AttackCoruscantFleet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-fleet") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-fleet") {
        setIsOpen(true);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex justify-center mt-4 md:mt-8 lg:mt-12">
      <div className='p-4 md:p-10 xl:p-5 border border-gray-600 bg-gray-700 text-white font-poppins text-center w-full rounded-lg md:rounded-2xl lg:rounded-3xl h-auto'>
        <button 
          id="attack-fleet"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille FLEET {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-2 text-center leading-relaxed'>Vaisseaux du Côté Lumineux (7 étoiles), Outrider</p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14 lg:mb-8'>Coup de coeur de la communauté</p>
                <AttackCoruscantFleetTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/aoP5GEUjL7I" />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes variante</p>
                <AttackCoruscantFleetTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/wvU3g6gjpcs" start={1521} />
              </div>

              {/* ------------------------------------------- Barre de séparation ------------------------------------------- */}
              <div className="hidden xl:block w-2 bg-gray-600 mx-8"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Au début du combat, un vaisseau aléatoire est affligé par Marqué jusqu'à ce qu'il subisse des dégâts. Chaque fois qu'un vaisseau est Marqué, tous les autres vaisseaux obtiennent Provocation pour le reste de l'affrontement. Chaque fois qu'un vaisseau affligé par Marqué est attaqué (à l'exception du Vaisseau Amiral), le vaisseau attaquant est affligé par Marqué pour le reste de l'affrontement.</p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>Équipes enemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseCoruscantFleetTeam1 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 400 000 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackCoruscantFleet;