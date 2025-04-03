import React from "react";

interface FooterLightProps {
  onImageClick: (imageSrc: string) => void;
}

const footerImages = [
  "/footer/Dark/1-Mustafar.webp",
  "/footer/Dark/2-Geonosis.webp",
  "/footer/Dark/3-Dathomir.webp",
  "/footer/Dark/4-Haven-Class-Medical-Station.webp",
  "/footer/Dark/5-Malachor.webp",
  "/footer/Dark/6-Death-Star.webp",
];

const FooterDark: React.FC<FooterLightProps> = ({ onImageClick }) => {
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

export default FooterDark;