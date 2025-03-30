import React from 'react';
import AttackCoruscantEstTeam1 from './SelectionTeam/TeamEst/AttackCoruscantEstTeam1';
import AttackCoruscantEstTeam2 from './SelectionTeam/TeamEst/AttackCoruscantEstTeam2';
import DefenseCoruscantEstVague1 from './SelectionTeam/TeamEst/DefenseCoruscantEstVague1';
import DefenseCoruscantEstVague2 from './SelectionTeam/TeamEst/DefenseCoruscantEstVague2';
import YouTubeEmbed from '../../../../YouTubeEmbed';

const AttackCoruscantEst: React.FC = () => {
  return (
    <div className="flex justify-center mt-4 md:mt-8 lg:mt-12">
      <div className='p-4 md:p-10 xl:p-5 border border-gray-600 bg-gray-700 text-white font-poppins text-center w-full rounded-lg md:rounded-2xl lg:rounded-3xl h-auto xl:flex xl:flex-col'>
        <p id="attack-est" className='text-4xl md:text-5xl lg:text-6xl font-bold mt-4 self-center'>Bataille EST</p>
        <div className='bg-gray-600 h-2 mt-6'></div>
        <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-10'>Prérequis</p>
        <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-2 leading-relaxed text-center'>5x Jedis (Relic 5+), Mace Windu et Kit Fisto</p>
        <div className='xl:flex w-full xl:gap-20 xl:p-12'>
          <div className='flex flex-col flex-1'>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10 lg:mb-8'>Coup de coeur de la communauté</p>
            <AttackCoruscantEstTeam1 />
            <YouTubeEmbed videoUrl="https://www.youtube.com/embed/wvU3g6gjpcs" start={729} />
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 lg:mb-8'>Équipes alternative</p>
            <AttackCoruscantEstTeam2 />
            <YouTubeEmbed videoUrl="https://www.youtube.com/embed/rR5JBVxwdL8" start={982} />
          </div>

          {/* ------------------------------------------- Barre de séparation ------------------------------------------- */}
          <div className="hidden xl:block w-2 bg-gray-600 mx-8 mt-10"></div>

          <div className='flex flex-col flex-1'>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14 xl:mt-10'>Modificateurs importants</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Si le Leader allié est vaincu, un allié Clone Trooper aléatoire est vaincu à sa place.</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Tous les personnages obtiennent la capacité accordée par la Démocratie...</p>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>/!\ IMPORTANT /!\</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Utilisez la capacité Démocratie dès que possible pour contrôler l'équipe ennemie, puis les éliminer.</p>
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mt-14'>Équipes enemies</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 1 :</p>
            <DefenseCoruscantEstVague1 />
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl text-white italic mt-4 lg:mb-4 lg:mt-8 text-justify leading-relaxed'>Vague 2 :</p>
            <DefenseCoruscantEstVague2 />
            <p className='text-xl md:text-3xl lg:text-5xl xl:text-3xl font-bold mt-8 lg:mb-8'>Les points</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 100 000 PG</p>
            <p className='text-lg md:text-xl lg:text-3xl xl:text-xl lg:mt-4 text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 200 000 PG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttackCoruscantEst;