import React from 'react';
import AttackCoruscantNordTeam1 from './SelectionTeam/TeamNord/AttackCoruscantNordTeam1';
import YouTubeEmbed from '../../../../YouTubeEmbed';
import AttackCoruscantNordTeam2 from './SelectionTeam/TeamNord/AttackCoruscantNordTeam2';
import AttackCoruscantNordTeam3 from './SelectionTeam/TeamNord/AttackCoruscantNordTeam3';
import DefenseCoruscantNordVague1 from './SelectionTeam/TeamNord/DefenseCoruscantNordVague1';
import DefenseCoruscantNordVague2 from './SelectionTeam/TeamNord/DefenseCoruscantNordVague2';

const AttackCoruscantNord: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className='p-4 md:p-10 border border-gray-600 bg-gray-700 text-white font-poppins text-center w-full rounded-lg h-auto'>
        <p id="attack-nord" className='text-4xl font-bold mt-4'>Bataille NORD</p>
        <p className='text-xl md:text-3xl font-bold mt-10'>Prérequis</p>
        <p className='text-lg md:text-xl text-slate-300 italic mt-2 text-justify leading-relaxed'>5x Jedis (Relic 5+)</p>
        <p className='text-xl md:text-3xl font-bold mt-8'>Coup de coeur de la communauté</p>
        <AttackCoruscantNordTeam1 />
        <YouTubeEmbed videoUrl="https://www.youtube.com/embed/zUWJGU0fHbI" start={128} />
        <p className='text-xl md:text-3xl font-bold mt-8'>Équipes variante</p>
        <AttackCoruscantNordTeam2 />
        <p className='text-xl md:text-3xl font-bold mt-8'>Équipes alternative</p>
        <AttackCoruscantNordTeam3 />
        <YouTubeEmbed videoUrl="https://www.youtube.com/embed/wvU3g6gjpcs" start={499} />
        <p className='text-xl md:text-3xl font-bold mt-8'>Modificateurs importants</p>
        <p className='text-lg md:text-xl text-slate-300 italic mt-4 text-justify leading-relaxed'>- Si le Leader allié est vaincu, un allié Clone Trooper aléatoire est vaincu à sa place.</p>
        <p className='text-lg md:text-xl text-slate-300 italic mt-4 text-justify leading-relaxed'>- Tous les personnages obtiennent la capacité accordée par la Démocratie. Chaque fois qu'un allié obtient un bonus ou inflige un malus à un ennemi, l'énergie de tous les alliés augmente de 5 %. À 100 %, infligez 1 accumulation de Manque de Confiance au Leader ennemi et étourdissez-le pendant 1 tour. Lorsque le Leader ennemi atteint 3 accumulations de Manque de Confiance, il est instantanément vaincu.</p>
        <p className='text-xl md:text-3xl font-bold mt-8'>/!\ IMPORTANT /!\</p>
        <p className='text-lg md:text-xl text-slate-300 italic mt-4 text-justify leading-relaxed'>- Lord Vader est sans Ultimate.</p>
        <p className='text-lg md:text-xl text-slate-300 italic mt-4 text-justify leading-relaxed'>- Utilisez la capacité Démocratie dès que possible pour contrôler l'équipe ennemie, puis les éliminer.</p>
        <p className='text-lg md:text-xl text-slate-300 italic mt-4 text-justify leading-relaxed'>- Si vous utilisez JML, gardez l'ultime jusqu'à la phase 2.</p>
        <p className='text-xl md:text-3xl font-bold mt-8'>Équipes enemies</p>
        <p className='text-lg md:text-xl text-white italic mt-4 text-justify leading-relaxed'>Vague 1 :</p>
        <DefenseCoruscantNordVague1 />
        <p className='text-lg md:text-xl text-white italic mt-4 text-justify leading-relaxed'>Vague 2 :</p>
        <DefenseCoruscantNordVague2 />
        <p className='text-xl md:text-3xl font-bold mt-8'>Les points</p>
        <p className='text-lg md:text-xl text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 100 000 PG</p>
        <p className='text-lg md:text-xl text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 200 000 PG</p>
      </div>
    </div>
  );
};

export default AttackCoruscantNord;