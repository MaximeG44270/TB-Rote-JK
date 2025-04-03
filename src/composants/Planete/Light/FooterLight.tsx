import React from "react";

interface FooterLightProps {
  onImageClick: (imageSrc: string) => void;
}

const footerImages = [
  "/footer/Light/1-Coruscant.webp",
  "/footer/Light/2-Bracca.webp",
  "/footer/Light/3-Kashyyyk.webp",
  "/footer/Light/4-Lothal.webp",
  "/footer/Light/5-Ring-of-Kafrene.webp",
  "/footer/Light/6-Scarif.webp",
  "/footer/Light/Bonus-Zeffo.webp",
];

const FooterLight: React.FC<FooterLightProps> = ({ onImageClick }) => {
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

export default FooterLight;