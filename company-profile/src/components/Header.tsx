import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-start">
          {/* Brand (Left Section) */}
          <div className="flex items-center mr-4 md:mr-6">
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Semen Indonesia" 
                className="h-8 md:h-10 m-2 mt-1 transition-all duration-300" 
              />
              <span className="text-xl md:text-2xl font-bold 
                bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400
                hidden md:inline-block">
                Semen<span className="text-red-400">Indonesia</span><span className="text-black text-3xl" style={{ marginLeft: '25px' }}>|</span>
              </span>
            </a>
          </div>

          {/* Navigasi Desktop (Right Section) */}
          <div className="hidden md:flex space-x-8 text-red-600 font-medium ml-auto">
            {['Beranda', 'Tentang', 'Layanan', 'Berita', 'Galeri', 'Karir'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5
                  transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Tombol Mobile (Right on Mobile) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-600 p-2 rounded-lg 
              hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200 
              transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-400 
                w-6 h-0.5 rounded-full mb-1.5 transition-all duration-300" />
              <div className="bg-gradient-to-r from-red-600 to-red-400 
                w-6 h-0.5 rounded-full mb-1.5 transition-all duration-300" />
              <div className="bg-gradient-to-r from-red-600 to-red-400 
                w-6 h-0.5 rounded-full transition-all duration-300" />
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
          <div className="rounded-lg overflow-hidden bg-white shadow-md 
            border border-red-50 backdrop-blur-sm bg-opacity-90">
            {['Beranda', 'Tentang', 'Layanan', 'Berita', 'Galeri', 'Karir'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block px-5 py-3 text-red-600 font-medium 
                hover:bg-red-600 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;