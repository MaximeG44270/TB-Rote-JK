import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const TotalPlatoonKashyyyk: React.FC = () => {
  const orders = [
    ["CAT", "R2D2", "Teebo", "Mace-windu", "HanSolo", "JML", "Padme", "YodaHermit", "Razor", "C-3po", "GL-rey", "R2D2", "YodaHermit", "Razor", "Anakin"],
    ["Razor", "Cls", "KAM", "BB-8", "Logray", "JMK", "Faucon-han", "KAM", "CAT", "JKR", "JMK", "BB-8", "Logray", "CAT", "Raven-claw"],
    ["CAT", "Greef", "KAM", "Sergent-clone-1", "GK", "JML", "Faucon-han", "Leia-rebelle", "Ben", "GMY", "JML", "R2D2", "Leia-rebelle", "Razor", "skiff-lando"],
    ["CAT", "BB-8", "R2D2", "Five", "Logray", "GL-rey", "C-3po", "Ben", "faucon-lando", "Greef", "GL-rey", "Faucon-han", "Razor", "soldat-resistance", "Eclaireur-hoth"],
    ["Ben", "C-3po", "Rey-training", "Greef", "Logray", "GL-rey", "Greef", "CAT", "Padme", "Cls", "JML", "GMY", "Ben", "Greef", "K-2so"],
    ["Razor", "Cls", "Faucon-han", "Negociateur", "HanSolo", "GL-rey", "JKR", "Ben", "soldat-resistance", "Faucon-han", "JML", "Padme", "Ben", "eclaireur-ewok", "Phantom"]
  ];


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

export default TotalPlatoonKashyyyk;