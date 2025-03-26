import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel: React.FC = () => {
  const slides = [
    { src: '/Accueil/side/dark.webp', text: 'Côté Obscur', link: '/dark' },
    { src: '/Accueil/side/mixte.webp', text: 'Mixte', link: '/mixte' },
    { src: '/Accueil/side/light.webp', text: 'Côté Lumineux', link: '/light' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen">
      {/* ------------------------------------------- Texte ------------------------------------------- */}
      <div className="absolute inset-0 flex flex-col items-center z-20 text-white text-center pointer-events-none">
        <h1 className="text-4xl font-bold font-poppins mt-32 mb-4 md:text-6xl md:mb-8">Choix du côté</h1>
        <p className="text-lg font-poppins md:text-2xl">Côté obscur, Mixte ou côté Lumineux</p>
      </div>

      {/* ------------------------------------------- Image en arrière-plan ------------------------------------------- */}
      <div className='bg-black opacity-60 absolute inset-0'></div>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.text}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'block' : 'hidden'
          }`}
        />
      ))}

      {/* ------------------------------------------- Bouton de redirection ------------------------------------------- */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
        <Link
          to={slides[currentIndex].link}
          className="px-6 py-3 text-white font-poppins font-semibold text-3xl rounded-xl border-4 transition-opacity duration-500 ease-in-out bg-black/60 hover:bg-black/80"
        >
          Entrer
        </Link>
      </div>

      {/* ------------------------------------------- Boutons de navigation ------------------------------------------- */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 text-6xl md:text-7xl transform -translate-y-1/2 text-white p-2 rounded-full z-40"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 text-6xl md:text-7xl transform -translate-y-1/2 text-white p-2 rounded-full z-40"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;