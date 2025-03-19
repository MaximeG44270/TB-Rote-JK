import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="flex items-center z-50 relative">
      {/* ------------------------------------------- Overlay sombre ------------------------------------------- */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}

      {/* ------------------------------------------- Menu latéral ------------------------------------------- */}
      <div
        className={`fixed top-0 right-0 w-52 md:w-96 bg-white h-full text-black transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 z-10" : "translate-x-full z-0"
        }`}
      >
        {/* ------------------------------------------- Bouton de fermeture ------------------------------------------- */}
        {isMenuOpen && (
          <div
            className="absolute top-10 left-36 md:left-80 w-8 h-6 cursor-pointer z-30"
            onClick={toggleMenu}
          >
            <div className="absolute w-8 h-1 bg-black transition-transform duration-300 line1"></div>
            <div className="absolute w-8 h-1 bg-black transition-transform duration-300 line3"></div>
          </div>
        )}

        {/* ------------------------------------------- Liens de navigation ------------------------------------------- */}
        <div className="flex flex-col items-center mt-40 h-full space-y-6">
          {[
            { name: "Coté Obscure", id: "Dark" },
            { name: "Coté Mixte", id: "mixte" },
            { name: "Coté Lumineux", id: "Light" },
          ].map(({ name, id }) => (
            <span
              key={id}
              className="text-lg md:text-2xl font-poppins font-bold cursor-pointer"
              onClick={() => scrollToSection(id)}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ------------------------------------------- Bouton hamburger ------------------------------------------- */}
      {!isMenuOpen && (
        <div
          className="relative flex flex-col justify-between items-center md:mb-4 w-8 h-6 cursor-pointer xl:hidden z-20"
          onClick={toggleMenu}
        >
          <div className="flex flex-col space-y-2 lg:space-y-3">
            <div className="w-10 h-1 rounded-sm md:h-2 md:w-12 md:rounded-md lg:h-3 lg:w-20 lg:rounded-md bg-white transition-all duration-300"></div>
            <div className="w-10 h-1 rounded-sm md:h-2 md:w-12 md:rounded-md  lg:h-3 lg:w-20  lg:rounded-md  bg-white transition-all duration-300 ml-auto"></div>
            <div className="w-10 h-1 rounded-sm md:h-2 md:w-12 md:rounded-md lg:h-3 lg:w-20 lg:rounded-md bg-white transition-all duration-300"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;