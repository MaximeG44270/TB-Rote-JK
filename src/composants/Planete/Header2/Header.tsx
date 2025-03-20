import React from 'react';
import NavBar from '../../Accueil/Header/NavBar';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="text-white bg-black p-6 sm:p-12 lg:p-16 flex flex-row items-center justify-between">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-bold">TB Rote</h1>
      <div className='flex flex-row'>
        <Link to="/" className="text-white rounded-xl border-white border-2 py-2 px-4 mr-10 md:text-xl lg:text-4xl md:mr-16 lg:mr-28">
          Accueil
        </Link>
        <div className='flex'>
            <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;