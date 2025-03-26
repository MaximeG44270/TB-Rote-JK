import React from 'react';
import Header from '../../Header2/Header';

const Zeffo: React.FC = () => {
  return (
    <div className=''>
      <Header />
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <img src="/Planet-main-mobile/Light/Bonus-Zeffo.webp" alt="Zeffo" className="w-full max-w-lg rounded-lg xl:hidden mt-8" />
        <img src='/public/Fond-main/Light/bonus-zeffo.webp' alt="Zeffo" className="w-full rounded-lg hidden xl:block bg-cover" />
      </div>
    </div>
  );
};

export default Zeffo;