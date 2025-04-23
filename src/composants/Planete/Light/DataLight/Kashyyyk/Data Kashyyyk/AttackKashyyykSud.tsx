import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DefenseKashyyykVague1 from './Team Kashyyyk/Team EST/DefenseKashyyykEstVague1';
import AttackKashyyykEstTeam5 from './Team Kashyyyk/Team EST/AttackKashyyykEstTeam5';
import AttackKashyyykEstTeam4 from './Team Kashyyyk/Team EST/AttackKashyyykEstTeam4';
import AttackKashyyykSudTeam1 from './Team Kashyyyk/Team SUD/AttackKashyyykSudTeam1';
import AttackKashyyykEstTeam3 from './Team Kashyyyk/Team EST/AttackKashyyykEstTeam3';
import AttackKashyyykSudTeam2 from './Team Kashyyyk/Team SUD/AttackKashyyykSudTeam2';
import AttackKashyyykEstTeam2 from './Team Kashyyyk/Team EST/AttackKashyyykEstTeam2';
import DefenseKashyyykSudVague2 from './Team Kashyyyk/Team SUD/DefenseKashyyykSudVague2';

const AttackKashyyykSud: React.FC = () => {
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
              5x Côté Lumineux ou Neutre (Relique 7+)
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackKashyyykEstTeam5 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/tuijX4-bWP8" start={404} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (hors GL)</p>
                <AttackKashyyykSudTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/wh2Jq_MZl1Y" />
                <AttackKashyyykEstTeam3 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/w4zNLvN_ndI" start={293} />
                <AttackKashyyykEstTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/IRNnaG4W6oU" start={600} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (GL)</p>
                <AttackKashyyykEstTeam4 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/IRNnaG4W6oU" start={422} />
                <AttackKashyyykSudTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/-HaHCj_IYNs" start={1012} />
              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Invoque des droïdes sondes dès qu'ils sont disponibles.
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseKashyyykVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseKashyyykSudVague2 />
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

export default AttackKashyyykSud;