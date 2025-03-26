import React from 'react';
import Header from '../../Header2/Header';

const Bracca: React.FC = () => {
  return (
    <div className=''>
      <Header />
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <img src="/Planet-main-mobile/Light/2-Bracca.webp" alt="Bracca" className="w-full max-w-lg rounded-lg xl:hidden mt-8" />
        <img src='/Fond-main/Light/2-bracca.webp' alt="Bracca" className="w-full rounded-lg hidden xl:block bg-cover" />
      </div>
    </div>
  );
};

export default Bracca;