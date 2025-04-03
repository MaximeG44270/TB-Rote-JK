import React, { useState, useEffect } from 'react';
import FooterLight from './FooterLight';
import Header from '../Header2/Header';
import { useNavigate } from 'react-router-dom';

const planetData: Record<string, { mainImage: string; description: string }> = {
  '/footer/Light/1-Coruscant.webp': {
    mainImage: '/Fond-main/Light/1-coruscant.webp',
    description: "Coruscant",
  },
  '/footer/Light/2-Bracca.webp': {
    mainImage: '/Fond-main/Light/2-bracca.webp',
    description: "Bracca",
  },
  '/footer/Light/3-Kashyyyk.webp': {
    mainImage: '/Fond-main/Light/3-kashyyyk.webp',
    description: "Kashyyyk",
  },
  '/footer/Light/4-Lothal.webp': {
    mainImage: '/Fond-main/Light/4-lothal.webp',
    description: "Lothal",
  },
  '/footer/Light/5-Ring-of-Kafrene.webp': {
    mainImage: '/Fond-main/Light/5-ring-of-kafrene.webp',
    description: "Ring of Kafrene",
  },
  '/footer/Light/6-Scarif.webp': {
    mainImage: '/Fond-main/Light/6-scarif.webp',
    description: "Scarif",
  },
  '/footer/Light/Bonus-Zeffo.webp': {
    mainImage: '/Fond-main/Light/bonus-zeffo.webp',
    description: "Zeffo",
  },
};

const initialPlanet = Object.values(planetData)[0];

const Light: React.FC = () => {
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
      <FooterLight onImageClick={handleImageClick} />
    </div>
  );
};

export default Light;