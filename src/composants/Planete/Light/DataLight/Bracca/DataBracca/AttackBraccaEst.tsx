import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DefenseCoruscantEstVague1 from '../../Coruscant/DataCoruscant/SelectionTeam/TeamEst/DefenseCoruscantEstVague1';
import DefenseCoruscantEstVague2 from '../../Coruscant/DataCoruscant/SelectionTeam/TeamEst/DefenseCoruscantEstVague2';
import AttackBraccaEstTeam1 from './SelectionTeam/Team Est/AttackBraccaEstTeam1';
import AttackBraccaEstTeam2 from './SelectionTeam/Team Est/AttackBraccaEstTeam2';
import AttackBraccaEstTeam3 from './SelectionTeam/Team Est/AttackBraccaEstTeam3';
import AttackBraccaEstTeam4 from './SelectionTeam/Team Est/AttackBraccaEstTeam4';
import AttackBraccaEstTeam5 from './SelectionTeam/Team Est/AttackBaccaEstTeam5';

const AttackBraccaEst: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-est") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-est") {
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
          id="attack-est"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille EST {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-2 leading-relaxed text-center'>
              5x Côté Lumineux ou Neutre (Relique 6+)
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackBraccaEstTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/rR5JBVxwdL8" start={982} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (hors GL)</p>
                <AttackBraccaEstTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/qsnjQTzB9XQ" />
                <AttackBraccaEstTeam3 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/w4zNLvN_ndI" start={293} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (GL)</p>
                <AttackBraccaEstTeam4 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/5gZy6Mq8rIE" />
                <AttackBraccaEstTeam5 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/tuijX4-bWP8" start={207} />
              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Les ennemis commencent avec 5 cumuls de Rangs Infinis.
                </p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Invoque des droïdes sondes dès qu'ils sont disponibles.
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseCoruscantEstVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseCoruscantEstVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 125 000 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 250 000 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackBraccaEst;