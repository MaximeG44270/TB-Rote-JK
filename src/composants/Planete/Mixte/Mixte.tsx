import React, { useState, useEffect } from 'react';
import Header from '../Header2/Header';
import { useNavigate } from 'react-router-dom';
import FooterMixte from './FooterMixte';

const planetData: Record<string, { mainImage: string; description: string }> = {
  '/footer/Mixte/1-Corellia.webp': {
    mainImage: '/Fond-main/Mixte/1-corellia.webp',
    description: "Corellia",
  },
  '/footer/Mixte/2-Felucia.webp': {
    mainImage: '/Fond-main/Mixte/2-felucia.webp',
    description: "Felucia",
  },
  '/footer/Mixte/3-Tatooine.webp': {
    mainImage: '/Fond-main/Mixte/3-tatooine.webp',
    description: "Tatooine",
  },
  '/footer/Mixte/4-Kessel.webp': {
    mainImage: '/Fond-main/Mixte/4-kessel.webp',
    description: "Kessel",
  },
  '/footer/Mixte/5-Vandor.webp': {
    mainImage: '/Fond-main/Mixte/5-vandor.webp',
    description: "Vandor",
  },
  '/footer/Mixte/6-Hoth.webp': {
    mainImage: '/Fond-main/Mixte/6-hoth.webp',
    description: "Hoth",
  },
  '/footer/Mixte/Bonus-Mandalor.webp': {
    mainImage: '/Fond-main/Mixte/bonus-mandalor.webp',
    description: "Bonus: Mandalore",
  },
};

const initialPlanet = Object.values(planetData)[0];

const Mixte: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(initialPlanet);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const handleImageClick = (footerImage: string) => {
    const planet = planetData[footerImage] || initialPlanet;
    setSelectedPlanet(planet);
  };

  const handleEnterClick = () => {
    if (selectedPlanet) {
      const imageName = selectedPlanet.mainImage.split('/').pop()?.split('.').shift();
      navigate(`/planet/${imageName}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-white relative">
      <Header />
      <main
        className="flex-grow flex items-center justify-center w-full h-full transition-all duration-500 bg-cover bg-no-repeat bg-[left_20%] xl:bg-center"
        style={{
          backgroundImage: `url(${selectedPlanet.mainImage})`,
          backgroundPosition: '20% top',
        }}
      >
        {!selectedPlanet && (
          <h1 className="text-4xl text-center font-bold bg-black bg-opacity-50 p-4 rounded-lg">
            Bienvenue sur la page Côté Lumineux
          </h1>
        )}
        {selectedPlanet && (
          <>
            <button
              onClick={handleEnterClick}
              className="text-white px-4 py-2 rounded-xl absolute bottom-48 text-xl md:text-xl lg:text-4xl xl:text-xl border-4 border-white hover:bg-white hover:text-black transition duration-300"
            >
              Entrer
            </button>

            <p className="block xl:hidden font-poppins font-black absolute bottom-64 lg:bottom-72 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white text-center rounded-lg w-11/12 text-4xl md:text-6xl">
              {selectedPlanet.description}
            </p>
          </>
        )}
      </main>
      <FooterMixte onImageClick={handleImageClick} />
    </div>
  );
};

export default Mixte;