import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const images = [
    '/Accueil/side/dark.png',
    '/Accueil/side/mixte.png',
    '/Accueil/side/light.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen">
        {/* ------------------------------------------- Texte ------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center z-20">
        <h1 className="text-4xl font-bold font-poppins text-white mt-32 mb-4 md:text-6xl md:mb-8">Choix du côté</h1>
        <p className="text-lg font-poppins text-white md:text-2xl">
          Côté obscur, Mixte ou côté Lumineux
        </p>
      </div>

      {/* ------------------------------------------- Image en arrière-plan (Carousel) ------------------------------------------- */}
      <div className='bg-black opacity-60 absolute inset-0'></div>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          />
        ))}
      </div>

    {/* ------------------------------------------- Bouton switch Carousel ------------------------------------------- */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 text-6xl md:text-7xl transform -translate-y-1/2 text-white p-2 rounded-full z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 text-6xl md:text-7xl transform -translate-y-1/2 text-white p-2 rounded-full z-20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;