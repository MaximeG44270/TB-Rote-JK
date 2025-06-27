import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import AttackZeffoSudTeam1 from './Team Zeffo/Team Sud/AttackZeffoSudTeam1';
import DefenseZeffoSudVague1 from './Team Zeffo/Team Sud/DefenseZeffoSudVague1';
import DefenseZeffoSudVague2 from './Team Zeffo/Team Sud/DefenseZeffoSudVague2';

const AttackZeffoSud: React.FC = () => {
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
              5x Côté Lumière ou Neutre (Relique 7+), Chevalier Jedi Cal Kestis
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackZeffoSudTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/EkS1iNQyKTI?start=834" />
              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Invoque un Droïde sonde dès que possible
                </p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - L'unité attaquante avec un Noyau de Pouvoir Ancestral les étourdit, mais donne ensuite le Noyau de Pouvoir Ancestral à l'attaquant
                </p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Chaque fois qu'un ennemi de l'Empire utilise une capacité spéciale, il augmente les dégâts qu'il inflige de 10 % jusqu'à la fin de l'affrontement. Ensuite, tous les alliés de l'Empire sont appelés à assister.
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseZeffoSudVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseZeffoSudVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 487 500 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 1 023 750 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackZeffoSud;