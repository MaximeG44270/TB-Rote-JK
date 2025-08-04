import React from "react";
import personnages from "../../../../../../../../assets/Personnage.json";

type Personnage = {
  src: string;
  alt: string;
  name: string;
};

const CorelliaOperation1: React.FC = () => {
  const order = [
    "CAT", "Chebacca", "JKR", "Eeth", "Traya",
    "boba-heritie", "Thrawn", "C-3po", "Ima-gun", "Trooper-sith",
    "boba-heritie", "R2D2", "DR", "hyena", "Eta-2"
  ];

  const redBorderAlts = new Set([
    "Traya",
    "boba-heritie",
    "Thrawn",
    "Trooper-sith",
    "DR",
    "hyena"
  ]);

  const orderedImages = order
    .map(alt => personnages.find(p => p.alt === alt))
    .filter((personnage): personnage is Personnage => personnage !== undefined);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg mt-4">
      {[0, 5, 10].map((startIndex, rowIndex) => (
        <div
          key={rowIndex}
          className="overflow-x-auto flex gap-4 pb-2 mt-4 scroll-smooth snap-x snap-mandatory xl:justify-center custom-scrollbar"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
          {orderedImages.slice(startIndex, startIndex + 5).map((image, index) => {
            const isRed = redBorderAlts.has(image.alt);
            const borderColor = isRed ? "border-red-400" : "border-blue-400";

            return (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-700 rounded-lg p-4 w-40 flex-shrink-0 snap-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-24 h-24 object-contain rounded-full border-2 ${borderColor}`}
                />
                <div className="bg-gray-600 h-1 w-full mb-2 mt-4"></div>
                <p className="text-sm font-bold">{image.name}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CorelliaOperation1;