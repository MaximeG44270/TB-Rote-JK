import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const AttackCorelliaNordTeam1: React.FC = () => {
  const order = ['Aphra', 'Bt-1', '0-0-0', 'ig-88', 'Dark-vador'];

  const borderColors: Record<string, string> = {
    Aphra: 'border-red-400',
    'Bt-1': 'border-red-400',
    '0-0-0': 'border-red-400',
    'ig-88': 'border-red-500',
    'Dark-vador': 'border-red-500',
  };

  const selectedImages = personnages.filter(
    (personnage): personnage is { src: string; alt: string } =>
      personnage.alt !== undefined && order.includes(personnage.alt)
  );

  const sortedImages = selectedImages.sort(
    (a, b) => order.indexOf(a.alt) - order.indexOf(b.alt)
  );

  const getBorderColor = (alt: string): string => {
    return borderColors[alt] || 'border-gray-300';
  };

  return (
    <div className="flex flex-wrap justify-center space-x-3 mt-4">
      {sortedImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 
            object-contain rounded-full border-2 md:border-4 lg:border-6 xl:border-3 2xl:border-3
            ${getBorderColor(image.alt)}`}
        />
      ))}
    </div>
  );
};

export default AttackCorelliaNordTeam1;