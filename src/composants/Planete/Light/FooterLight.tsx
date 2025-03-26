import React, { useState, useRef, useEffect } from 'react';

interface FooterLightProps {
  onImageClick: (imageSrc: string) => void;
}

const footerImages = [
  '/footer/Light/1-Coruscant.webp',
  '/footer/Light/2-Bracca.webp',
  '/footer/Light/3-Kashyyyk.webp',
  '/footer/Light/4-Lothal.webp',
  '/footer/Light/5-Ring-of-Kafrene.webp',
  '/footer/Light/6-Scarif.webp',
  '/footer/Light/Bonus-Zeffo.webp',
];

const FooterLight: React.FC<FooterLightProps> = ({ onImageClick }) => {
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleImages([
      ...footerImages,
      ...footerImages,
      ...footerImages
    ]);

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = footerImages.length * 80;
    }
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 200) {
        setVisibleImages(prev => [
          ...prev,
          ...footerImages
        ]);
      }

      if (scrollLeft <= 200) {
        setVisibleImages(prev => [
          ...footerImages,
          ...prev
        ]);
        carouselRef.current.scrollLeft = scrollLeft + footerImages.length * 80;
      }
    }
  };

  return (
    <footer className="bg-gray-900 py-4">
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex space-x-4 overflow-x-auto custom-scrollbar"
        style={{
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Miniature ${index + 1}`}
            className="w-32 h-32 cursor-pointer rounded-lg flex-shrink-0"
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </footer>
  );
};

export default FooterLight;