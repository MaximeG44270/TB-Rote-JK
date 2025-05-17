import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DefenseKashyyykSudVague2 from '../../Kashyyyk/Data Kashyyyk/Team Kashyyyk/Team SUD/DefenseKashyyykSudVague2';
import AttackLothalSudTeam1 from './Team Lothal/Team SUD/AttackLothalSudTeam1';
import AttackLothalSudTeam2 from './Team Lothal/Team SUD/AttackLothalSudTeam2';
import AttackLothalSudTeam3 from './Team Lothal/Team SUD/AttackLothalSudTeam3';
import AttackLothalSudTeam4 from './Team Lothal/Team SUD/AttackLothalSudTeam4';
import AttackLothalSudTeam5 from './Team Lothal/Team SUD/AttackLothalSudTeam5';
import DefenseLothalEstVague1 from './Team Lothal/Team EST/DefenseLothalEstTeam1';

const AttackLothalSud: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-sud") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-sud") {
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
          id="attack-sud"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille SUD {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-2 leading-relaxed text-center'>
              5x Jedi (Relic 8+)
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackLothalSudTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/zXfD449EcQ0" start={651} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (hors GL)</p>
                <AttackLothalSudTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/NmBF2Gdn_g8" />
                <AttackLothalSudTeam4 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/mdD49UZrJ_0" />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (GL)</p>
                <AttackLothalSudTeam3 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/vSpe8CJAHoU" />
                <AttackLothalSudTeam5 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/gJ2qVa6d7Mc" start={631} />
              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - À chaque fois qu'un allié utilise une capacité spéciale pendant son tour, appelez un autre allié au hasard pour assister. Chaque fois qu'un personnage attaque hors de son tour, il gagne une pile de Rébellion. À 20 piles de Rébellion, ils obtiennent un bonus de 30 % d'Offense.
                </p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Les ennemis commencent avec 5 piles de Rangs Sans Fin.
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseLothalEstVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseKashyyykSudVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 219 375 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 493 594 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackLothalSud;