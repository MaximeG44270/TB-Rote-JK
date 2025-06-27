import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import AttackZeffoCentreTeam1 from './Team Zeffo/Team Centre/AttackZeffoCentreTem1';
import AttackZeffoCentreTeam2 from './Team Zeffo/Team Centre/AttackZeffoCentreTeam2';
import AttackZeffoCentreTeam3 from './Team Zeffo/Team Centre/AttackZeffoCentreTeam3';
import AttackZeffoCentreTeam4 from './Team Zeffo/Team Centre/AttackZeffoCentreTeam4';
import AttackZeffoCentreTeam5 from './Team Zeffo/Team Centre/AttackZeffoCentreTeam5';
import DefenseZeffoCentreVague1 from './Team Zeffo/Team Centre/DefenseZeffoCentreVague1';
import DefenseZeffoCentreVague2 from './Team Zeffo/Team Centre/DefenseZeffoCentreVague2';

const AttackZeffoCentre: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-centre") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-centre") {
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
          id="attack-centre"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille CENTRE {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-2 leading-relaxed text-center'>
              5x Côté Lumière ou Neutre (Relique 7+)
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackZeffoCentreTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/EkS1iNQyKTI?start=1238" />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes variante</p>
                <AttackZeffoCentreTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/EkS1iNQyKTI?start=1616" />
                <AttackZeffoCentreTeam3 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/ZG0vG58-j_0" />
                <AttackZeffoCentreTeam4 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/ivV6wmbjbOs" />
                <AttackZeffoCentreTeam5 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/EkS1iNQyKTI?start=1440" />

              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - L'unité attaquante avec un Noyau de Pouvoir Ancestral les étourdit, mais donne ensuite le Noyau de Pouvoir Ancestral à l'attaquant
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseZeffoCentreVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseZeffoCentreVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 162 500 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 341 250 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackZeffoCentre;