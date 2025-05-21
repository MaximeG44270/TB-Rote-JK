import React, { useState, useEffect, useRef } from 'react';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AttackRokNordTeam1 from './Team ROK/Team Nord/AttackRokNordTeam1';
import AttackRokNordTeam2 from './Team ROK/Team Nord/AttackRokNordTeam2';
import AttackRokNordTeam3 from './Team ROK/Team Nord/AttackRokNordTeam3';
import AttackRokNordTeam4 from './Team ROK/Team Nord/AttackRokNordTeam4';
import AttackRokNordTeam5 from './Team ROK/Team Nord/AttackRokNordTeam5';
import DefenseRokNordVague1 from './Team ROK/Team Nord/DefenseRokNordVague1';

const AttackRokNord: React.FC = () => {
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
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-10'>Prérequis</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-2 leading-relaxed text-center'>
              5x Côté Lumière ou Neutre (Relique 9+)
            </p>
            <div className='xl:flex w-full xl:gap-20 xl:p-12'>
              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>
                  Coup de coeur de la communauté
                </p>
                <AttackRokNordTeam4 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/QwFuECXntXs" />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (hors GL)</p>
                <AttackRokNordTeam2 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/BUnIM5oS0bA" />
                <AttackRokNordTeam5 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/VYhbEDmhWCo" />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternatives (GL)</p>
                <AttackRokNordTeam1 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/Ht9QVRQV1fg" />
                <AttackRokNordTeam3 />
                <YouTubeEmbed videoUrl="https://www.youtube.com/embed/p-oQYUL5jlI" />
              </div>

              <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

              <div className='flex flex-col flex-1'>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Au début de l'affrontement, un allié et un ennemi aléatoires reçoivent secrètement l'effet Informateur. Les coups critiques contre l'Informateur le révèlent. La première fois qu'un Informateur est vaincu, s'il reste un Informateur actif, cet Informateur et ses alliés obtiennent 50 % de Pénétration d'Armure/Chance de Coup Critique, 25 % de Dégâts Critiques, et 20 de Vitesse. Ensuite, l'effet Informateur est dissipé de tous les personnages.
                </p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Invoque la Sonde Droïde dès que possible.
                </p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>
                  - Si un allié de l'Empire est dans l'emplacement de Leader, ils gagnent 30 % de Santé/Protection maximale, et l'allié le plus fort provoque pendant 2 tours au début de l'affrontement. Chaque fois qu'un allié de l'Empire (à l'exception des invocations) utilise une capacité spéciale pendant son tour, tous les alliés de l'Empire augmentent les dégâts qu'ils infligent de 10 % jusqu'à la fin de l'affrontement, puis tous les autres alliés de l'Empire sont appelés pour assister.
                </p>
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes ennemies</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
                <DefenseRokNordVague1 />
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
                <DefenseRokNordVague1 />
                <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Les points</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 307 125 PG</p>
                <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 721 744 PG</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttackRokNord;