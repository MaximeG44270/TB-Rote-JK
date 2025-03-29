import React from "react";
import personnages from "../../../../../../../../assets/Personnage.json";

const DefenseCoruscantNordVague2: React.FC = () => {
  const order = ["LV", "Clone-arc", "Clone-Chef", "Clone-elite", "Clone-medic"];

  const selectedImages = order.map((alt) => personnages.find((p) => p.alt === alt)).filter(Boolean);

  return (
    <div className="flex justify-center space-x-3 mt-4">
      {selectedImages.map((image, index) => (
        <img
          key={index}
          src={image!.src}
          alt={image!.alt}
          className={`w-16 h-16 object-contain rounded-full border-2 ${
            image!.alt === "Royal-guard" ? "border-red-400" : "border-blue-400"
          }`}
        />
      ))}
    </div>
  );
};

export default DefenseCoruscantNordVague2;