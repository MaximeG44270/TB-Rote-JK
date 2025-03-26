import React, { useState, useEffect } from 'react';
import FooterLight from './FooterLight';
import Header from '../Header2/Header';
import { useNavigate } from 'react-router-dom';

const imageMapping: Record<string, string> = {
  '/footer/Light/1-Coruscant.webp': '/Fond-main/Light/1-coruscant.webp',
  '/footer/Light/2-Bracca.webp': '/Fond-main/Light/2-bracca.webp',
  '/footer/Light/3-Kashyyyk.webp': '/Fond-main/Light/3-kashyyyk.webp',
  '/footer/Light/4-Lothal.webp': '/Fond-main/Light/4-lothal.webp',
  '/footer/Light/5-Ring-of-Kafrene.webp': '/Fond-main/Light/5-ring-of-kafrene.webp',
  '/footer/Light/6-Scarif.webp': '/Fond-main/Light/6-scarif.webp',
  '/footer/Light/Bonus-Zeffo.webp': '/Fond-main/Light/bonus-zeffo.webp',
};

const initialImage = Object.values(imageMapping)[0] || null;

const Light: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(initialImage);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const handleImageClick = (footerImage: string) => {
    setSelectedImage(imageMapping[footerImage] || null);
  };

  const handleEnterClick = () => {
    if (selectedImage) {
      const imageName = selectedImage.split('/').pop()?.split('.').shift();
      navigate(`/planet/${imageName}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-white relative">
      <Header />
      <main
        className="flex-grow flex items-center justify-center w-full h-full transition-all duration-500 bg-cover bg-no-repeat bg-[left_20%] xl:bg-center"
        style={{
          backgroundImage: `url(${selectedImage})`,
          backgroundPosition: '20% top',
        }}
      >
        {!selectedImage && (
          <h1 className="text-4xl text-center font-bold bg-black bg-opacity-50 p-4 rounded-lg">
            Bienvenue sur la page Côté Lumineux
          </h1>
        )}
        {selectedImage && (
          <button
            onClick={handleEnterClick}
            className=" text-white px-4 py-2 rounded-xl absolute bottom-48 text-xl md:text-xl lg:text-4xl xl:text-xl border-4 border-white hover:bg-white hover:text-black transition duration-300"
          >
            Entrer
          </button>
        )}
      </main>
      <FooterLight onImageClick={handleImageClick} />
    </div>
  );
};

export default Light;