import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import logoBlack from '@/assests-public/logo_black.svg';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Logo Top Left */}
      <div className="fixed top-8 left-8 z-[60] mix-blend-difference cursor-pointer hover:scale-105 transition-transform duration-300">
        <img
          src={logoBlack}
          alt="Singulare"
          className="h-10 md:h-14 w-auto invert"
        />
      </div>

      {/* Trigger Button - "Hamburger" */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-[60] w-12 h-12 flex flex-col justify-center items-center group mix-blend-difference"
      >
        <div className={`w-8 h-[1px] bg-white transition-all duration-500 transform ${isOpen ? 'rotate-[-45deg] translate-y-[1px]' : 'rotate-[-15deg] -translate-y-1 group-hover:w-10'}`} />
        <div className={`w-8 h-[1px] bg-white transition-all duration-500 transform ${isOpen ? 'rotate-[-45deg] -translate-y-[1px]' : 'rotate-[-15deg] translate-y-1 group-hover:w-6'}`} />
      </button>

      {/* Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        ${isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-200'}
        `}
      >
        {/* Left Panel */}
        <div
          className={`absolute inset-0 bg-graphite transform transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] origin-bottom-left skew-x-[-15deg]
          ${isOpen ? 'translate-x-[-15%]' : 'translate-x-[-150%]'}
          w-[150%] h-full
          `}
        />

        {/* Menu Content */}
        <div className={`relative z-10 h-full flex flex-col justify-center items-center
          transition-opacity duration-500 delay-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}>
          <nav className="flex flex-col space-y-8 text-center">
            {MENU_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggleMenu}
                className="font-serif text-4xl md:text-6xl text-ice-white italic hover:text-bronze transition-colors duration-300 transform hover:skew-x-[-10deg] inline-block"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;