import React from "react";
import personnages from "../../../../../../../../assets/Personnage.json";

const DefenseVague2: React.FC = () => {
  const order = ["Darth-sidious", "Anakin", "Royal-guard", "Royal-guard", "Clone-elite", "Clone-medic"];

  const selectedImages = order.map((alt) => personnages.find((p) => p.alt === alt)).filter(Boolean);

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {selectedImages.map((image, index) => (
        <img
          key={index}
          src={image!.src}
          alt={image!.alt}
          className={`w-16 h-16 object-contain rounded-full border-2 ${
            ["Royal-guard", "Darth-sidious"].includes(image!.alt) ? "border-red-400" : "border-blue-400"
          }`}
        />
      ))}
    </div>
  );
};

export default DefenseVague2;