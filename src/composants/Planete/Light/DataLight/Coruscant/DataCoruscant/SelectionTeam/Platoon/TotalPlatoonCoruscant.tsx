import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const TotalPlatoonCoruscant: React.FC = () => {
  const orders = [
    ['GAS', 'Mando', 'Rey-training', 'Greef', 'YodaHermit', 'JKL', 'BB-8', 'Cls', 'Cody', 'barriss', 'GAS', 'R2D2', 'JKR', 'L3-37', 'Phantom'],
    ['GAS', 'BB-8', 'Chebacca', 'X-wing-resistance', 'YodaHermit', 'GAS', 'BB-8', 'Mando', 'Jyn', 'Sana', 'GAS', 'Mando', 'Chebacca', 'Sana', 'Home-one'],
    ['JKL', 'Rey-training', 'GMY', '3po-Chewie', 'YodaHermit', 'JKL', 'R2D2', 'BB-8', 'umbaran', 'Fulcrum', 'JKL', 'Padme', 'C-3po', 'Sana', 'Armorer'],
    ['JKL', 'JKR', 'GK', 'Lobot', 'HanSolo', 'GAS', 'Mando', 'Logray', 'Chasseur-plo', 'Visas', 'GAS', 'C-3po', 'HanSolo', 'ohnaka', 'Eta-2'],
    ['JKL', 'BB-8', 'HanSolo', 'Jolee', 'Logray', 'JKL', 'Cls', 'YodaHermit', 'Teebo', 'Kuiil', 'JKL', 'Mando', 'GK', '3po-Chewie', 'Phantom'],
    ['GAS', 'C-3po', 'KAM', 'Sabine', 'YodaHermit', 'GAS', 'GMY', 'YodaHermit', 'Holdo', 'Zaalbar', 'GAS', 'JKR', 'Leia-rebelle', 'Sana', 'Raven-claw'],
  ];

  // Compter les occurrences des personnages dans toutes les opérations
  const personnageCount: { [key: string]: number } = {};

  orders.forEach(order => {
    order.forEach(personnage => {
      personnageCount[personnage] = (personnageCount[personnage] || 0) + 1;
    });
  });

  const getPersonnage = (name: string) => {
    return personnages.find(p => p.alt === name);
  };

  const sortedPersonnages = Object.keys(personnageCount)
    .map(alt => {
      const details = getPersonnage(alt);
      return {
        name: details?.name || alt,
        src: details?.src || '',
        count: personnageCount[alt],
      };
    })
    // Trier par ordre décroissant en fonction du nombre d'occurrences
    .sort((a, b) => b.count - a.count);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mt-4">
      <div className="flex flex-wrap justify-center gap-4">
        {sortedPersonnages.map((personnage, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-700 rounded-lg p-4 w-40">
            <img
              src={personnage.src}
              alt={personnage.name}
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:border-6 xl:w-20 xl:h-20 xl:border-3 2xl:w-24 2xl:h-24 2xl:border-3 object-contain rounded-full border-2 md:border-4 border-blue-400"
            />
            <div className="bg-gray-600 h-1 w-full mb-2 mt-4"></div>
            <p className="text-sm font-bold">{personnage.name}</p>
            <div className="bg-gray-600 h-1 w-full mt-4"></div>
            <p className="text-sm font-semibold mt-4">Utilisé {personnage.count} fois</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalPlatoonCoruscant;