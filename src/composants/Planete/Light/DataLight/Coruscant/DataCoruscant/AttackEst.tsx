import React from 'react';
import AttackCoruscantEstTeam1 from './SelectionTeam/TeamEst/AttackCoruscantEstTeam1';
import AttackCoruscantEstTeam2 from './SelectionTeam/TeamEst/AttackCoruscantEstTeam2';
import DefenseCoruscantEstVague1 from './SelectionTeam/TeamEst/DefenseCoruscantEstVague1';
import DefenseCoruscantEstVague2 from './SelectionTeam/TeamEst/DefenseCoruscantEstVague2';
import YouTubeEmbed from '../../../../YouTubeEmbed';

const AttackCoruscantEst: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className='p-4 border border-gray-600 bg-gray-700 text-white font-poppins text-center w-full max-w-md rounded-lg h-auto'>
        <p id="attack-est" className='text-4xl font-bold mt-4'>Bataille EST</p>
        <p className='text-xl font-bold mt-10'>Prérequis</p>
        <p className='text-lg text-slate-300 italic mt-2 text-justify leading-relaxed'>5x Jedis (Relic 5+), Mace Windu et Kit Fisto</p>
        <p className='text-xl font-bold mt-8'>Coup de coeur de la communauté</p>
        <AttackCoruscantEstTeam1 />
        <YouTubeEmbed videoUrl="https://www.youtube.com/embed/wvU3g6gjpcs" start={729} />
        <p className='text-xl font-bold mt-8'>Équipes alternative</p>
        <AttackCoruscantEstTeam2 />
        <YouTubeEmbed videoUrl="https://www.youtube.com/embed/rR5JBVxwdL8" start={982} />
        <p className='text-xl font-bold mt-8'>Modificateurs importants</p>
        <p className='text-lg text-slate-300 italic mt-4 text-justify leading-relaxed'>- Si le Leader allié est vaincu, un allié Clone Trooper aléatoire est vaincu à sa place.</p>
        <p className='text-lg text-slate-300 italic mt-4 text-justify leading-relaxed'>- Tous les personnages obtiennent la capacité accordée par la Démocratie. Chaque fois qu'un allié obtient un bonus ou inflige un malus à un ennemi, l'énergie de tous les alliés augmente de 5 %. À 100 %, infligez 1 accumulation de Manque de Confiance au Leader ennemi et étourdissez-le pendant 1 tour. Lorsque le Leader ennemi atteint 3 accumulations de Manque de Confiance, il est instantanément vaincu.</p>
        <p className='text-xl font-bold mt-8'>/!\ IMPORTANT /!\</p>
        <p className='text-lg text-slate-300 italic mt-4 text-justify leading-relaxed'>- Utilisez la capacité Démocratie dès que possible pour contrôler l'équipe ennemie, puis les éliminer.</p>
        <p className='text-xl font-bold mt-8'>Équipes enemies</p>
        <p className='text-lg text-white italic mt-4 text-justify leading-relaxed'>Vague 1 :</p>
        <DefenseCoruscantEstVague1 />
        <p className='text-lg text-white italic mt-4 text-justify leading-relaxed'>Vague 2 :</p>
        <DefenseCoruscantEstVague2 />
        <p className='text-xl font-bold mt-8'>Les points</p>
        <p className='text-lg text-slate-300 italic mt-4 text-justify leading-relaxed'>- Vague 1 : 100 000 PG</p>
        <p className='text-lg text-slate-300 italic text-justify leading-relaxed'>- Vague 2 : 200 000 PG</p>
      </div>
    </div>
  );
};

export default AttackCoruscantEst;