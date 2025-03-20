import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-20 lg:mt-52 xl:mt-5 xl:text-xl 2xl:text-2xl 2xl:mt-10 font-poppins sm:text-3xl text-center p-4">
      <a 
        href="mailto:mgdigital.dev@gmail.com" 
        className=""
      >
        Contact
      </a>
      <p className="mt-4 lg:mt-8 xl:mt-4 xl:text-lg lg:text-2xl sm:text-xl font-poppins">© 2025  <a href='https://mgdigital-test.netlify.app/' target='_blank' rel='noopener noreferrer'>MG Digital</a></p>
    </footer>
  );
};

export default Footer;