import React from 'react';
import AttackCoruscantEstTeam1 from './SelectionTeam/AttackCoruscantEstTeam1';
import AttackCoruscantEstTeam2 from './SelectionTeam/AttackCoruscantEstTeam2';

const AttackCoruscantEst: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className='p-4 border border-gray-600 bg-gray-700 text-white font-poppins text-center w-full max-w-md rounded-lg h-auto'>
        <p className='text-xl font-bold mt-4'>Prérequis</p>
        <p className='text-lg text-slate-300 italic mt-2 text-justify leading-relaxed'>5x Jedis (Relic 5+), Mace Windu et Kit Fisto</p>
        <p className='text-xl font-bold mt-8'>Équipes préférées</p>
        <AttackCoruscantEstTeam1 />
        <p className='text-xl font-bold mt-8'>Équipes alternative</p>
        <AttackCoruscantEstTeam2 />
        <p className='text-xl font-bold mt-8'>Modificateurs importants</p>
        <p className='text-lg text-slate-300 italic mt-4 text-justify leading-relaxed'>- Si le Leader allié est vaincu, un allié Clone Trooper aléatoire est vaincu à sa place.</p>
        <p className='text-lg text-slate-300 italic mt-4 text-justify leading-relaxed'>- Tous les personnages obtiennent la capacité accordée par la Démocratie. Chaque fois qu'un allié obtient un bonus ou inflige un malus à un ennemi, l'énergie de tous les alliés augmente de 5 %. À 100 %, infligez 1 accumulation de Manque de Confiance au Leader ennemi et étourdissez-le pendant 1 tour. Lorsque le Leader ennemi atteint 3 accumulations de Manque de Confiance, il est instantanément vaincu.</p>
      </div>
    </div>
  );
};

export default AttackCoruscantEst;