import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const TotalPlatoonZeffo: React.FC = () => {
  const orders = [
  ['CAT', 'JKL', 'GK', 'Kyle-katarn', 'Jedi-stellaire', 'JML', 'BB-8', 'HanSolo', 'Chirrut', 'Jolee', 'GL-rey', 'GAS', 'KAM', 'Jedi-consulaire', 'MG100'],
  ['Razor', 'JKL', 'YodaHermit', 'Kyle-katarn', 'Home-one', 'JMK', 'Chebacca', 'HanSolo', 'Sergent-clone-1', 'Chirpa', 'JMK', 'GAS', 'KAM', 'JKG', 'Rex-170'],
  ['Ben', 'JKL', 'GK', 'Jedi-consulaire', 'Raddus', 'JML', 'C-3po', 'HanSolo', 'Sergent-clone-1', 'Juhani', 'JML', 'GAS', 'KAM', 'MG100', 'Kyle-katarn'],
  ['Ben', 'JKL', 'Rey-training', 'Farmboy', 'QI-RA', 'GL-rey', 'JKR', 'Cls', 'Kit-Fisto', 'Jolee', 'JML', 'GAS', 'KAM', 'JKG', 'Wrecker'],
  ['Ben', 'JKL', 'Rey-training', 'Jedi-consulaire', 'Enfys', 'GL-rey', 'R2D2', 'Cls', 'Zeb', 'Chirpa', 'JML', 'GAS', 'KAM', 'Farmboy', 'Vao'],
  ['Razor', 'JKL', 'Rey-training', 'Plo-koon', 'Clone-170', 'JMK', 'Padme', 'Cls', 'Chirrut', 'Jolee', 'JMK', 'GAS', 'KAM', 'JKG', 'Visas'],
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

export default TotalPlatoonZeffo;