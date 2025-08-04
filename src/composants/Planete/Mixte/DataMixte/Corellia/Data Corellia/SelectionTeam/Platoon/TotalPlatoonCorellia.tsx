import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const TotalPlatoonCorellia: React.FC = () => {
  const orders = [
    ["CAT", "Chebacca", "JKR", "Eeth", "Traya", "boba-heritie", "Thrawn", "C-3po", "Ima-gun", "Trooper-sith", "boba-heritie", "R2D2", "DR", "hyena", "Eta-2"],
    ["Ben", "GMY", "Cls", "Hunter", "HanSolo", "DM", "C-3po", "DR", "Jolee", "Poe", "boba-heritie", "Cls", "Mandobeskar", "Bt-1", "Alpha"],
    ["Tie-interceptor", "Padme", "GMY", "Ghost", "Wat", "Tie-interceptor", "Cls", "DR", "Paploo", "bossk", "boba-heritie", "Chebacca", "Rey-training", "3po-Chewie", "Clone-170"],
    ["Ben", "DR", "Leia-rebelle", "Dark-vador", "KAM", "DM", "BB-8", "Traya", "Navette-kylo", "Sergent-clone-1", "CAT", "C-3po", "Traya", "Chasseur-plo", "T3-M4"],
    ["Razor", "Chebacca", "GK", "Tie-silencer", "Logray", "CAT", "Chimaera", "Wat", "Malveillant", "Darth-maul", "boba-heritie", "R2D2", "HanSolo", "Alpha", "Colo-starck"],
    ["Tie-interceptor", "Mandobeskar", "Sonde-imp", "Talia", "KAM", "Tie-interceptor", "Palpa", "YodaHermit", "Piett", "Sion", "Tie-interceptor", "DR", "GK", "Sana", "Jawa-engineer"]
  ];

  // Personnages avec une bordure rouge personnalisée
  const customRedBorder = ['DR', 'boba-heritie', 'Tie-interceptor', 'Tie-silencer', 'Traya', 'DM', 'Alpha', 'Wat', 'Thrawn', 'Trooper-sith', 'hyena', 'Bt-1', 'bossk', 'Dark-vador', 'Navette-kylo', 'Chimaera', 'Malveillant', 'Darth-maul', 'Colo-starck', 'Talia', 'Piett', 'Sion', 'Palpa'];

  // Comptage des occurrences
  const personnageCount: { [key: string]: number } = {};
  orders.forEach(order => {
    order.forEach(personnage => {
      personnageCount[personnage] = (personnageCount[personnage] || 0) + 1;
    });
  });

  // Récupération des données depuis le JSON
  const getPersonnage = (alt: string) => {
    return personnages.find(p => p.alt === alt);
  };

  // Liste triée par nombre d'utilisations
  const sortedPersonnages = Object.keys(personnageCount)
    .map(alt => {
      const details = getPersonnage(alt);
      return {
        alt,
        name: details?.name || alt,
        src: details?.src || '',
        count: personnageCount[alt],
      };
    })
    .sort((a, b) => b.count - a.count);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mt-4">
      <div className="flex flex-wrap justify-center gap-4">
        {sortedPersonnages.map((personnage, index) => {
          const borderColor = customRedBorder.includes(personnage.alt)
            ? 'border-red-400'
            : 'border-blue-400';

          return (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-700 rounded-lg p-4 w-40"
            >
              <img
                src={personnage.src}
                alt={personnage.name}
                className={`w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:border-6 xl:w-20 xl:h-20 xl:border-3 2xl:w-24 2xl:h-24 2xl:border-3 object-contain rounded-full border-2 md:border-4 ${borderColor}`}
              />
              <div className="bg-gray-600 h-1 w-full mt-4"></div>
              <p className="text-sm font-bold mt-4">{personnage.name}</p>
              <div className="bg-gray-600 h-1 w-full mt-4"></div>
              <p className="text-sm font-semibold mt-4">Utilisé {personnage.count} fois</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TotalPlatoonCorellia;