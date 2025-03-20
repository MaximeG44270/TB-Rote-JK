import React from 'react';
import Header from '../Header2/Header';

const Dark: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-800 text-white">
      <Header />
      <h1 className="text-4xl text-center font-bold">Bienvenue sur la page Côté Obscur</h1>
    </div>
  );
};

export default Dark;