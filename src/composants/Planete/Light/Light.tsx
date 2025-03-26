import React, { useState, useEffect } from 'react';
import FooterLight from './FooterLight';
import Header from '../Header2/Header';

const imageMapping: Record<string, string> = {
  '/footer/Light/1-Coruscant.webp': '/Fond-main/Light/1-coruscant.webp',
  '/footer/Light/2-Bracca.webp': '/Fond-main/Light/2-bracca.webp',
  '/footer/Light/3-Kashyyyk.webp': '/Fond-main/Light/3-kashyyyk.webp',
  '/footer/Light/4-Lothal.webp': '/Fond-main/Light/4-lothal.webp',
  '/footer/Light/5-Ring-of-Kafrene.webp': '/Fond-main/Light/5-ring-of-kafrene.webp',
  '/footer/Light/6-Scarif.webp': '/Fond-main/Light/6-scarif.webp',
  '/footer/Light/Bonus-Zeffo.webp': '/Fond-main/Light/bonus-zeffo.webp',
};

const Light: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const handleImageClick = (footerImage: string) => {
    setSelectedImage(imageMapping[footerImage] || null);
  };

  return (
    <div className="flex flex-col min-h-screen text-white relative">
      {/* Header */}
      <Header />

      {/* Contenu principal avec image de fond */}
      <main
        className="flex-grow flex items-center justify-center w-full h-full transition-all duration-500"
        style={{
          backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {!selectedImage && (
          <h1 className="text-4xl text-center font-bold bg-black bg-opacity-50 p-4 rounded-lg">
            Bienvenue sur la page Côté Lumineux
          </h1>
        )}
      </main>

      {/* Footer */}
      <FooterLight onImageClick={handleImageClick} />
    </div>
  );
};

export default Light;