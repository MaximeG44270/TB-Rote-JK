import React from 'react';
import personnages from '../../../../../../../../assets/Personnage.json';

const AttackCoruscantNordTeam3: React.FC = () => {
  const order = ['JML', 'Shaak-ti', 'Vieux-Ben', 'Anakin', 'Ahsoka-tano-chipie'];

  const selectedImages = personnages.filter((personnage) => 
    order.includes(personnage.alt)
  );

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
          className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-full border-2 md:border-4 border-blue-400"
        />
      ))}
    </div>
  );
};

export default AttackCoruscantNordTeam3;