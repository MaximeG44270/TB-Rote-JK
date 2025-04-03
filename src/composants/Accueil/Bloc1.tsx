import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bloc1: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/side');
  };

  return (
    <div className="mt-28 flex sm:mt-40 flex-col justify-center items-center text-center p-6 xl:mt-4">
      {/* ------------------------------------------- Texte ------------------------------------------- */}
      <p className="text-4xl sm:text-7xl font-poppins font-bold text-white xl:text-5xl 2xl:text-7xl 2xl:mt-20 2xl:mb-20">MG Digital</p>
      <p className="text-4xl mt-4 font-poppins font-bold sm:text-7xl text-white xl:text-5xl 2xl:text-7xl">Communté Héros français | JEDI KYBER</p>

      {/* ------------------------------------------- Bouton Entrée & Liens ------------------------------------------- */}
      <button
        onClick={handleClick}
        className="mt-28 sm:mt-40 xl:mt-20 xl:text-lg 2xl:text-3xl xl:px6 xl:py-3 px-6 py-3 sm:px-8 sm:py-5 text-lg sm:text-4xl font-poppins font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Entrée
      </button>
      <div className="mt-10 sm:mt-32 xl:mt-10 flex flex-row justify-center">
        <a
          href="https://goh.warstats.net/29/Heros-Francais-HF"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg xl:text-lg 2xl:text-3xl 2xl:mt-10 xl:px6 xl:py-3 sm:text-4xl sm:px-8 sm:py-5 font-poppins font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
        >
          Warstats
        </a>
        <a
          href="https://recruit.swgoh.gg/alliance/638/heros-francais"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 ml-8 text-lg xl:text-lg 2xl:text-3xl 2xl:mt-10 xl:px6 xl:py-3 sm:text-4xl sm:ml-12 sm:px-8 sm:py-5 font-poppins font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
        >
          Swgoh.gg
        </a>
      </div>
    </div>
  );
};

export default Bloc1;