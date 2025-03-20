import React from 'react';
import FooterLight from './FooterLight';
import Header from '../Header2/Header';

const Light: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      {/* ------------------------------------------- Header collé en haut ------------------------------------------- */}
      <Header />

      {/* ------------------------------------------- Contenu qui prend l'espace restant ------------------------------------------- */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl text-center font-bold">
          Bienvenue sur la page Côté Lumineux
        </h1>
      </main>

      {/* ------------------------------------------- Footer collé en bas ------------------------------------------- */}
      <FooterLight />
    </div>
  );
};

export default Light;