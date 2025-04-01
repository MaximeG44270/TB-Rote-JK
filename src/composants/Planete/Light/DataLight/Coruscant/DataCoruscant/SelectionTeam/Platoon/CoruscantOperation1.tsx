import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

type Personnage = {
  src: string;
  alt: string;
  name: string;
};

const CoruscantOperation1: React.FC = () => {
  const order = ['GAS', 'Mando', 'Rey-training', 'Greef', 'YodaHermit', 'JKL', 'BB-8', 'Cls', 'Cody', 'barriss', 'GAS', 'R2D2', 'JKR', 'L3-37', 'Phantom'];

  const orderedImages = order
    .map(alt => {
      // Trouver le personnage correspondant à l'alt
      return personnages.find(p => p.alt === alt);
    })
    .filter((personnage): personnage is Personnage => personnage !== undefined);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mt-4">
      {/* ------------------------------------------- Grille d'images et cartes avec espacement ------------------------------------------- */}
      <div className="flex flex-wrap justify-center gap-4">
        {orderedImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-700 rounded-lg p-4 w-40">
            {/* ------------------------------------------- Image du personnage ------------------------------------------- */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:border-6 xl:w-20 xl:h-20 xl:border-3 2xl:w-24 2xl:h-24 2xl:border-3 object-contain rounded-full border-2 md:border-4 border-blue-400"
            />
            {/* ------------------------------------------- Barre grise ------------------------------------------- */}
            <div className="bg-gray-600 h-1 w-full mb-2 mt-4"></div>
            {/* ------------------------------------------- Nom du personnage ------------------------------------------- */}
            <p className="text-sm font-bold">{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoruscantOperation1;