import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const TotalPlatoonBracca: React.FC = () => {
  const orders = [
  ["Boushh", "Razor", "Wedge-xwing", "L3-37", "Ghost", "Amiral-raddus", "CAT", "X-wing-poe", "Sergent-clone-1", "R2D2", "GL-rey", "Razor", "BTL", "Juhani", "Outrider"],
  ["Young-solo", "Razor", "PAO", "Chebacca", "MM", "secura", "Ben", "Jedi-stellaire", "BB-8", "C-3po", "Profundity", "Razor", "CRA", "JKR", "BTL"],
  ["Endurance", "Ben", "Echo-501", "GMY", "Ebon-hawk", "Greef", "Ben", "Kanan", "BB-8", "Rey-training", "JMK", "Ben", "Rose", "GMY", "Enfys"],
  ["3po-Chewie", "CAT", "Razor", "Bodhi", "Five", "Greef", "Ben", "CAT", "Ghost", "R2D2", "Profundity", "Razor", "Ben", "chew-veteran", "Omega"],
  ["U-wing-bistan", "Razor", "Ben", "Rey-training", "Ez-bridger", "Outrider", "CAT", "Razor", "Chebacca", "GMY", "JMK", "Razor", "Ben", "Faucon-han", "Kanan"],
  ["Rex-501", "Ben", "Razor", "Cls", "Raven-claw", "Vandor-chew", "Razor", "CAT", "GMY", "C-3po", "GL-rey", "Ben", "Razor", "Padme", "Teebo"],
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

export default TotalPlatoonBracca;