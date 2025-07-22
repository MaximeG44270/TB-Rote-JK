import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DefenseCorelliaNordVague1 from './SelectionTeam/TeamNord/DefenseCorelliaNordVague1';
import AttackCorelliaMissionTeam1 from './SelectionTeam/TeamMission/AttackCorelliaMissionTeam1';
import AttackCorelliaMissionTeam2 from './SelectionTeam/TeamMission/AttackCorelliaMissionTeam2';
import DefenseCorelliaMissionVague2 from './SelectionTeam/TeamMission/DefenseCorelliaMissionVague2';

const AttackCorelliaMission: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-mission") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-mission") {
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
          id="attack-mission"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille MISSION {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-2 leading-relaxed text-center'>
                5x personnages (Relique 5+), Qi'ra, Young Han Solo
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackCorelliaMissionTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/CXmBvll3_SU?start=289" start={289} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives</p>
                <AttackCorelliaMissionTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/g-5NNZKiEMM?start=447" start={447} />
              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseCorelliaNordVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseCorelliaMissionVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Récompenses</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- 15 GET3 </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackCorelliaMission;