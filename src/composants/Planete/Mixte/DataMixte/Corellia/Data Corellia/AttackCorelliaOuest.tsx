import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DefenseCorelliaNordVague1 from './SelectionTeam/TeamNord/DefenseCorelliaNordVague1';
import AttackCorelliaOuestTeam1 from './SelectionTeam/TeamOuest/AttackCorelliaOuestTeam1';
import AttackCorelliaOuestTeam2 from './SelectionTeam/TeamOuest/AttackCorelliaOuestTeam2';
import DefenseCorelliaOuestVague2 from './SelectionTeam/TeamOuest/DefenseCorelliaOuestVague2';
import AttackCorelliaOuestTeam3 from './SelectionTeam/TeamOuest/AttackCorelliaOuestTeam3';
import AttackCorelliaOuestTeam4 from './SelectionTeam/TeamOuest/AttackCorelliaOuestTeam4';

const AttackCorelliaOuest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-ouest") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-ouest") {
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
          id="attack-ouest"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille OUEST {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-2 leading-relaxed text-center'>
                5x personnages (Relique 5+)
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackCorelliaOuestTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/u2PvG_Vtga4" start={0} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives</p>
                <AttackCorelliaOuestTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/g-5NNZKiEMM?start=171" start={171} />
                <AttackCorelliaOuestTeam3 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/w4zNLvN_ndI" start={0} />
                <AttackCorelliaOuestTeam4 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/nkyUukehvR4" start={0} />
              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Coaxium : +25 % de dégâts critiques et de vitesse ; -15 % de précision ; sera touché de manière critique si possible ; les ennemis peuvent ignorer la Provocation pour cibler ce personnage ; si ce personnage est vaincu par un effet de statut, le Coaxium ne sera accordé à personne.
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>/!\ IMPORTANT /!\</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - C'est probablement la mission la plus facile dans ROTE TB - Tous les GL fonctionneront ici.
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseCorelliaNordVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseCorelliaOuestVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 100 000 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 200 000 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackCorelliaOuest;