import React from 'react';
import { clsx } from 'clsx';
import personnages from '../../../../../../../../assets/Personnage.json';

const AttackCorelliaFleetTeam1: React.FC = () => {
  const order = ['Exe', 'Hound', 'faucon-lando', 'Razor', 'Xanadu', 'Slave', 'ig-2000'];

  const selectedImages = personnages.filter(
    (personnage): personnage is { src: string; alt: string } =>
      personnage.alt !== undefined && order.includes(personnage.alt)
  );

  const sortedImages = selectedImages.sort(
    (a, b) => order.indexOf(a.alt) - order.indexOf(b.alt)
  );

  return (
    <div className="flex flex-wrap justify-center space-x-3 mt-4">
      {sortedImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={clsx(
            'w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 object-contain rounded-full border-2 md:border-4',
            image.alt === 'faucon-lando' ? 'border-blue-400' : 'border-red-400'
          )}
        />
      ))}
    </div>
  );
};

export default AttackCorelliaFleetTeam1;