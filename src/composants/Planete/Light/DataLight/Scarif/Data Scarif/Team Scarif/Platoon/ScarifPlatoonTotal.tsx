import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const TotalPlatoonScarif: React.FC = () => {
  const orders = [
  ["JMK", "CAT", "X-wing-dark", "GK", "Bastila-light", "JML", "CAT", "Poe", "Leia-rebelle", "Dash-rendar", "JMK", "CAT", "Police", "YodaHermit", "Raven-claw"],
  ["GL-rey", "Ben", "Mando", "Kanan", "Ima-gun", "GL-rey", "Razor", "Rey-scavenger", "Lobot", "Bastila-light", "JML", "Razor", "Dash-rendar", "Outrider", "Raven-claw"],
  ["GL-rey", "Leia-rebelle", "Ben", "Padme", "Bastila-light", "JML", "KAM", "Razor", "Chebacca", "Dash-rendar", "JMK", "YodaHermit", "Razor", "GMY", "Raven-claw"],
  ["JML", "KAM", "L3-37", "CAT", "Bastila-light", "GL-rey", "YodaHermit", "Xanadu", "Razor", "Mara", "JMK", "KAM", "Rey-scavenger", "Ben", "Dash-rendar"],
  ["JML", "HanSolo", "Ben", "Tech", "Ima-gun", "JML", "Logray", "Ben", "Zaalbar", "Bastila-light", "GL-rey", "HanSolo", "Razor", "X-wing-resistance", "skiff-lando"],
  ["GL-rey", "HanSolo", "Razor", "Faucon-han", "Bastila-light", "JMK", "Leia-rebelle", "Ben", "JKR", "skiff-lando", "JML", "YodaHermit", "Ben", "BB-8", "Dash-rendar"]
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

export default TotalPlatoonScarif;