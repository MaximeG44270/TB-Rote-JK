import React, { useState, useEffect, useRef } from 'react';
import AttackCoruscantNordTeam1 from './SelectionTeam/TeamNord/AttackCoruscantNordTeam1';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import AttackCoruscantNordTeam2 from './SelectionTeam/TeamNord/AttackCoruscantNordTeam2';
import AttackCoruscantNordTeam3 from './SelectionTeam/TeamNord/AttackCoruscantNordTeam3';
import DefenseCoruscantNordVague1 from './SelectionTeam/TeamNord/DefenseCoruscantNordVague1';
import DefenseCoruscantNordVague2 from './SelectionTeam/TeamNord/DefenseCoruscantNordVague2';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AttackCoruscantNord: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#attack-nord") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#attack-nord") {
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
          id="attack-nord"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Bataille NORD {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-2 text-center leading-relaxed'>5x Jedis (Relic 5+)</p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14 lg:mb-8'>Coup de coeur de la communauté</p>
                <AttackCoruscantNordTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/zUWJGU0fHbI" start={128} />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes variante</p>
                <AttackCoruscantNordTeam2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternative</p>
                <AttackCoruscantNordTeam3 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/wvU3g6gjpcs" start={499} />
              </div>

              {/* ------------------------------------------- Barre de séparation ------------------------------------------- */}
              <div className="hidden xl:block w-2 bg-gray-600 mx-8"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Si le Leader allié est vaincu, un allié Clone Trooper aléatoire est vaincu à sa place.</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Tous les personnages obtiennent la capacité Démocratie. Chaque fois qu'un allié obtient un bonus ou inflige un malus à un ennemi, augmentez l'énergie de tous les alliés de 5 %. À 100 %, infligez 1 accumulation de Perte de Confiance au Leader ennemi et étourdissez-le pendant 1 tour. Lorsque le Leader ennemi atteint 3 accumulations de Perte de Confiance, il est instantanément vaincu.</p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>/!\ IMPORTANT /!\</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Lord Vader est sans Ultimate.</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Utilisez la capacité Démocratie dès que possible pour contrôler l'équipe ennemie, puis éliminez-les.</p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mt-14'>Équipes enemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseCoruscantNordVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseCoruscantNordVague2 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 100 000 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl 2xl:text-2xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 200 000 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackCoruscantNord;