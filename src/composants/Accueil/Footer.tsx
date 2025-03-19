import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-20 lg:mt-52 xl:mt-5 xl:text-xl font-poppins sm:text-3xl text-center p-4">
      <a 
        href="mailto:mgdigital.dev@gmail.com" 
        className=""
      >
        Contact
      </a>
      <p className="mt-4 lg:mt-8 xl:mt-4 xl:text-lg lg:text-2xl sm:text-xl font-poppins">© 2025 MG Digital</p>
    </footer>
  );
};

export default Footer;