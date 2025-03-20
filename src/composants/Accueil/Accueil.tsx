import React from 'react';
import Header from './Header/Header';
import Bloc1 from './Bloc1';
import Footer from './Footer';

const Accueil: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* ------------------------------------------- Conteneur de l'image avec voile noir  */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/Accueil/fond-ecran-accueil.webp)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ------------------------------------------- Contenu au premier plan ------------------------------------------- */}
      <div className="relative z-10">
        <Header />
        <Bloc1 />
        <Footer />
      </div>
    </div>
  );
};

export default Accueil;