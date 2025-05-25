import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const AttackScarifSudEstTeam1: React.FC = () => {
  const order = ['JMK', 'GAS', 'CAT', 'Ahsoka-tano-chipie', 'GK'];

  const selectedImages = personnages.filter((personnage): personnage is { src: string; alt: string } => {
    return personnage.alt !== undefined && order.includes(personnage.alt);
  });

  // Trier les images selon l'ordre défini
  const sortedImages = selectedImages.sort((a, b) => {
    return order.indexOf(a.alt) - order.indexOf(b.alt);
  });

  return (
    <div className="flex flex-wrap justify-center space-x-3 mt-4">
      {sortedImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:border-6 xl:w-20 xl:h-20 xl:border-3 2xl:w-24 2xl:h-24 2xl:border-3 object-contain rounded-full border-2 md:border-4 border-blue-400"
        />
      ))}
    </div>
  );
};

export default AttackScarifSudEstTeam1;