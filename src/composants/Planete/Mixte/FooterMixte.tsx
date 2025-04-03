import React from "react";

interface FooterLightProps {
  onImageClick: (imageSrc: string) => void;
}

const footerImages = [
  "/footer/Mixte/1-Corellia.webp",
  "/footer/Mixte/2-Felucia.webp",
  "/footer/Mixte/3-Tatooine.webp",
  "/footer/Mixte/4-Kessel.webp",
  "/footer/Mixte/5-Vandor.webp",
  "/footer/Mixte/6-Hoth.webp",
  "/footer/Mixte/Bonus-Mandalor.webp",
];

const FooterMixte: React.FC<FooterLightProps> = ({ onImageClick }) => {
  return (
    <footer className="bg-gray-900 py-4 flex justify-center">
      <div className="flex gap-x-6 overflow-x-auto custom-scrollbar px-6 xl:gap-x-14 xl:px-14 2xl:gap-x-20 2xl:px-20 3xl:gap-x-28 3xl:px-28">
        {footerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Miniature ${index + 1}`}
            className="w-32 h-32 cursor-pointer rounded-lg"
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </footer>
  );
};

export default FooterMixte;