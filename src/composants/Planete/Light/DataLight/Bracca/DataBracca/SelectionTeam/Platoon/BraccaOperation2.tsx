import React from "react";
import personnages from "../../../../../../../../assets/Personnage.json";

type Personnage = {
  src: string;
  alt: string;
  name: string;
};

const BraccaOperation2: React.FC = () => {
  const order = [
    "Young-solo", "Razor", "PAO", "Chebacca", "MM",
    "secura", "Ben", "Jedi-stellaire", "BB-8", "C-3po",
    "Profundity", "Razor", "CRA", "JKR", "BTL"
  ];

  const orderedImages = order
    .map(alt => personnages.find(p => p.alt === alt))
    .filter((personnage): personnage is Personnage => personnage !== undefined);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mt-4">
      {/* ------------------------------------------- Boucle pour créer 3 lignes indépendantes ------------------------------------------- */}
      {[0, 5, 10].map((startIndex, rowIndex) => (
        <div 
          key={rowIndex} 
          className="overflow-x-auto flex gap-4 pb-2 mt-4 scroll-smooth snap-x snap-mandatory xl:justify-center custom-scrollbar"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
          {orderedImages.slice(startIndex, startIndex + 5).map((image, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-700 rounded-lg p-4 w-40 flex-shrink-0 snap-center">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-24 h-24 object-contain rounded-full border-2 border-blue-400" 
              />
              <div className="bg-gray-600 h-1 w-full mb-2 mt-4"></div>
              <p className="text-sm font-bold">{image.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BraccaOperation2;