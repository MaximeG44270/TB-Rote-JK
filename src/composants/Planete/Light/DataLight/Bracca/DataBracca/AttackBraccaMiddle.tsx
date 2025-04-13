import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AttackBraccaMiddleTeam1 from './SelectionTeam/Team Middle/AttackBraccaMiddleTeam1';
import DefenseBraccaMiddleVague2 from './SelectionTeam/Team Middle/DefenseBraccaMiddleVague2';
import DefenseBraccaMiddleVague1 from './SelectionTeam/Team Middle/DefenseBraccaMiddleVague1';

const AttackBraccaMiddle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-middle") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-middle") {
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
          id="attack-middle"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille CENTRE {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-2 text-center leading-relaxed'>5x Côté Lumineux ou Neutre (Relique 5+)</p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14 lg:mb-8'>Coup de coeur de la communauté</p>
                <AttackBraccaMiddleTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/s34PRPeJKsQ" start={323} />
              </div>

              {/* ------------------------------------------- Barre de séparation ------------------------------------------- */}
              <div className="hidden xl:block w-2 bg-gray-600 mx-8"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Les ennemis commencent avec 5 cumuls de Rangs Infinis.</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Invoque des droïdes sondes dès qu'ils sont disponibles.</p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>/!\ IMPORTANT /!\</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- La capacité de meneuse de la Neuvième Sœur empêche les effets limitant la vitesse, par exemple ceux de Jedi Knight Luke.</p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>Équipes enemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseBraccaMiddleVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseBraccaMiddleVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 125 000 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 250 000 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackBraccaMiddle;