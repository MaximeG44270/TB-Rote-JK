import React from "react";
import personnages from "../../../../../../../../assets/Personnage.json";

const DefenseZeffoSudVague2: React.FC = () => {
  const order = ['Second-sister',  'Purge-trooper', 'Purge-trooper'];

  const selectedImages = order
    .map((alt) => personnages.find((p) => p.alt === alt))
    .filter(Boolean);

  return (
    <div className="flex flex-wrap justify-center space-x-3 mt-4">
      {selectedImages.map((image, index) => (
        <img
          key={index}
          src={image!.src}
          alt={image!.alt}
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-20 xl:h-20 xl:border-3 2xl:w-24 2xl:h-24 2xl:border-3 lg:border-6 object-contain rounded-full border-2 md:border-4 border-red-400"
        />
      ))}
    </div>
  );
};

export default DefenseZeffoSudVague2;