import React from 'react';

const ResponsiveCarousel: React.FC = () => {
  const slides = [
    { src: '/Accueil/side/dark.webp', text: 'Côté Obscur' },
    { src: '/Accueil/side/mixte.webp', text: 'Mixte' },
    { src: '/Accueil/side/light.webp', text: 'Côté Lumineux' },
  ];

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="hidden xl:grid grid-cols-3 h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full group">
            {/* ------------------------------------------- Image en arrière-plan (toujours visible) ------------------------------------------- */}
            <img
              src={slide.src}
              alt={`Background ${index}`}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* ------------------------------------------- Image au premier plan qui disparaît ------------------------------------------- */}
            <img
              src={slide.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            {/* ------------------------------------------- Voile sombre qui disparaît ------------------------------------------- */}
            <div className="absolute inset-0 bg-black/90 z-10 transition-opacity duration-300 group-hover:opacity-0" />
            {/* ------------------------------------------- Texte avec effet de fade (transition d'opacité) ------------------------------------------- */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold p-12 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 z-20">
              {slide.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;