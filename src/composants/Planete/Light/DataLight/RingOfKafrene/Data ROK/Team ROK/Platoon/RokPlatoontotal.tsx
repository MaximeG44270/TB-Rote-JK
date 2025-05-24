import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const TotalPlatoonRok: React.FC = () => {
  const orders = [
  ["JML", "GMY", "JKL", "50R-T", "Zaalbar", "JML", "Cls", "JKL", "Wedge-xwing", "Boushh", "JMK", "JKR", "GAS", "Bastila-light", "Eeth"],
  ["GL-rey", "Padme", "JKL", "GMY", "Lobot", "GL-rey", "GMY", "GAS", "Faucon-han", "Rex-501", "JMK", "GMY", "JKL", "Cls", "Eeth"],
  ["JMK", "JKR", "JKL", "Clone-170", "T3-M4", "GL-rey", "C-3po", "GAS", "Armorer", "Tech", "JML", "R2D2", "JKL", "Wedge-xwing", "Echo"],
  ["Profundity", "JKL", "barriss", "MM", "Baze-malbus", "JMK", "GAS", "Negociateur", "Chopper", "Clone-chew", "GL-rey", "GAS", "Holdo", "soldat-resistance", "C-3po"],
  ["JMK", "JKL", "chew-veteran", "GMY", "50R-T", "Profundity", "GAS", "Baze-malbus", "R2D2", "Bodhi", "JML", "JKL", "soldat-hoth", "JKR", "Chebacca"],
  ["JML", "JKL", "Omega", "Ima-gun", "Chirrut", "JMK", "GAS", "Lando-cal", "Tech", "Ghost", "JML", "JKL", "umbaran", "Rose", "Cls"]
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
            <div className="bg-gray-600 h-1 w-full mt-4"></div>
            <p className="text-sm font-bold mt-4">{personnage.name}</p>
            <div className="bg-gray-600 h-1 w-full mt-4"></div>
            <p className="text-sm font-semibold mt-4">Utilisé {personnage.count} fois</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalPlatoonRok;