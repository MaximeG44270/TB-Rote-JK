import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import LothalOperation1 from '../../Lothal/Data Lothal/Team Lothal/Platoon/LothalOperation1';
import LothalOperation2 from '../../Lothal/Data Lothal/Team Lothal/Platoon/LothalOperation2';
import LothalOperation3 from '../../Lothal/Data Lothal/Team Lothal/Platoon/LothalOperation3';
import LothalOperation4 from '../../Lothal/Data Lothal/Team Lothal/Platoon/LothalOperation4';
import LothalOperation5 from '../../Lothal/Data Lothal/Team Lothal/Platoon/LothalOperation5';
import LothalOperation6 from '../../Lothal/Data Lothal/Team Lothal/Platoon/LothalOperation6';
import TotalPlatoonLothal from '../../Lothal/Data Lothal/Team Lothal/Platoon/TotalPlatoonLothal';

const RokPlatoon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const hasLoaded = useRef(false);
  
  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    
    if (window.location.hash === "#platoon") {
      setIsOpen(true);
    }
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#platoon") {
        setIsOpen(true);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const operations = [
    { title: "Opération 1", component: <LothalOperation1 /> },
    { title: "Opération 2", component: <LothalOperation2 /> },
    { title: "Opération 3", component: <LothalOperation3 /> },
    { title: "Opération 4", component: <LothalOperation4 /> },
    { title: "Opération 5", component: <LothalOperation5 /> },
    { title: "Opération 6", component: <LothalOperation6 /> },
    { title: "Total", component: <TotalPlatoonLothal /> },
  ];

  const toggleSubMenu = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex justify-center mt-4 md:mt-8 lg:mt-12">
      <div className='p-4 md:p-10 xl:p-5 border border-gray-600 bg-gray-700 text-white font-poppins text-center w-full rounded-lg md:rounded-2xl lg:rounded-3xl h-auto'>
        <button 
          id="platoon"
          className="flex items-center justify-center w-full text-4xl md:text-5xl lg:text-6xl font-bold mt-4 p-4 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Assignation {isOpen ? <ChevronUp size={32} className="ml-auto" /> : <ChevronDown size={32} className="ml-auto" />}
        </button>
        {isOpen && (
          <div>
            <div className='bg-gray-600 h-2 mt-6'></div>
            <div className="mt-6 space-y-4">
              {operations.map((operation, index) => (
                <div key={index} className="p-4 border border-gray-500 bg-gray-800 text-white rounded-lg">
                  <button 
                    className="flex items-center justify-between w-full text-xl md:text-2xl font-bold p-3 rounded-lg"
                    onClick={() => toggleSubMenu(index)}
                  >
                    {operation.title}
                    {openIndexes.includes(index) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                  {openIndexes.includes(index) && (
                    <div className="mt-3">
                      <div className='bg-gray-600 h-1'></div>
                      {operation.component}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RokPlatoon;