import React from 'react';
import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header className="text-white p-6 sm:p-12 lg:p-16 flex flex-row justify-between">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-bold">TB Rote</h1>
      <NavBar />
    </header>
  );
};

export default Header;